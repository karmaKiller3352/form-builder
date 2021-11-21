import React from "react";
import FieldContainer from "./FieldContainer";
import { IFieldComponent } from "./interfaces";
import { StyledTextArea } from "./ui";


const TextArea: React.FC<IFieldComponent> = (props) => {
  return (
    <FieldContainer name={props.fieldInfo.fieldName} error={props.error} isEditMode={props.isEditMode}>
      <StyledTextArea {...props.fieldInfo} {...props.field} error={props.error} disabled={!props.isEditMode} />
    </FieldContainer>
  )
}

export default TextArea