import React from "react";

import { StyledContainer, FieldName, ErrorContainer } from "./ui";

const FieldContainer: React.FC<({ name: string, error?: any, isEditMode: boolean })> = ({ children, name, error, isEditMode }) => {
  return (
    <StyledContainer>
      <FieldName isEditMode={isEditMode}>{name}</FieldName>
      <ErrorContainer>{error?.message}</ErrorContainer>
      {children}
    </StyledContainer>
  )
}

export default FieldContainer