import React from "react";
import { useController } from "react-hook-form";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import { IFieldComponent } from "../../components/interfaces";
import { IFormField } from "./interfaces";



const FieldComponent: React.FC<IFieldComponent> = (props) => {
  switch (props.fieldInfo.type) {
    case 'textarea':
      return <TextArea {...props} />

    default:
      return <Input {...props} />
  }
}

const FormField: React.FC<IFormField> = ({ control, fieldInfo, name, isEditMode }) => {
  const { field, fieldState } = useController({
    control,
    name
  });


  return <FieldComponent fieldInfo={fieldInfo} field={field} error={fieldState.error} isEditMode={isEditMode} />

}

export default FormField