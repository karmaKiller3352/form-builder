import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Wrapper, Sidebar, Content, ElementWrapper, FieldWrapper, RemoveIcon, Button, Form } from './ui';

import { FormItem, IFormItemList, IFormPreview, IFormValues } from './interfaces';
import { EMAIL, PHONE, URL, DESCRIPTION, NOTES, SIGNATURE, DATE, TYPES_MAP } from "./constants";
import FormField from "./FormField";


const formFields = [
  EMAIL, PHONE, URL, DESCRIPTION, NOTES, SIGNATURE, DATE
]

const ElementList: React.FC<IFormItemList> = ({ formFields, clickHandler }) => {
  return (
    <React.Fragment>
      {formFields.map(
        (item: FormItem) => (
          <ElementWrapper onClick={() => clickHandler(item)}>{TYPES_MAP[item].fieldName}</ElementWrapper>
        ))
      }
    </React.Fragment>
  )
}

const FormPreview: React.FC<IFormPreview> = ({ fields, removeHandler, isEditMode, control }) => {
  return (
    <Form isEditMode={isEditMode}>
      {fields.map(
        (item: FormItem, index) => (
          <FieldWrapper>
            <FormField 
              rules={TYPES_MAP[item].rules}
              fieldInfo={TYPES_MAP[item]}
              name={item+index}
              control={control} 
              isEditMode={isEditMode} 
            />

            {isEditMode && <RemoveIcon onClick={() => removeHandler(index)}/>}
          </FieldWrapper>
        ))
      }
    </Form>
  )
}


const FormPage = () => {
  const [chosenFields, setChosenFields] = useState([])
  const [isEditMode, setEditMode] = useState(true)

  const { control, formState } = useForm<IFormValues>({
    mode: "onChange",
  });

  const clickHandler = useCallback(
    (fieldName) => isEditMode && setChosenFields(prev => prev.concat(fieldName)),
    [isEditMode]
  )
  
  const removeHandler = useCallback(
    (index) => isEditMode && setChosenFields(prev => prev.filter((_, i) => index !== i)),
    [isEditMode]
  )

  const toggleModeHandler = useCallback(
    () => setEditMode(prev => !prev),
    []
  )

  return (
    <Wrapper>
      <Sidebar>
        <ElementList formFields={formFields} clickHandler={clickHandler} />
      </Sidebar>
      <Content>
        <FormPreview fields={chosenFields} removeHandler={removeHandler} isEditMode={isEditMode} control={control} />

        {
        (chosenFields.length > 0 && Object.keys(formState.errors).length === 0) &&
          <Button onClick={toggleModeHandler}>{isEditMode ? 'Preview' : 'Edit'} </Button>
        }
      </Content>
    </Wrapper>
  )
}

export default FormPage