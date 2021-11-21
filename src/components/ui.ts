import styled, { css } from 'styled-components'

const fieldStyles = css<any>`
  width: 100%;
  border: 1px solid ${ props => props.error ? 'red': '#317ac3'};
  padding: 10px;
  border-radius: 3px;
  font-size: 25px;
  color: #317ac3;
  background-color: inherit;
  filter: none;

  &:-webkit-autofill {
    background-color: inherit!important;
  }
`

export const StyledField = styled.input`
  ${fieldStyles}
`

export const StyledTextArea = styled.textarea`
  ${fieldStyles}
`

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;
`

export const FieldName = styled.div<{isEditMode?: boolean}>`
  position: absolute;
  background-color: ${props => props.isEditMode ? '#fffffe' : '#eee'};
  color: #317ac3;
  font-size: 13px;
  padding: 0 5px;
  top: -7px;
  left: 10px;
`

export const ErrorContainer = styled.div`
  position: absolute;
  left: 10px;
  text-transform: capitalize;
  bottom: -17px;
  color: red;
  font-size: 13px;
`