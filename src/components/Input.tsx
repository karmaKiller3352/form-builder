import React from "react";
import FieldContainer from "./FieldContainer";
import { IFieldComponent } from "./interfaces";
import { StyledField } from "./ui";

const Input: React.FC<IFieldComponent> = (props) => {
  return (
    <FieldContainer name={props.fieldInfo.fieldName} error={props.error} isEditMode={props.isEditMode}>
      <StyledField {...props.fieldInfo} {...props.field} error={props.error} disabled={!props.isEditMode} autocomplete="disabled" />
    </FieldContainer>
  )
}

export default Input