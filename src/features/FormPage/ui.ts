import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #fffffe;
`

export const Sidebar = styled.div`
  flex-direction: row;
  padding: 20px;
  border: 3px solid #317ac3;
  border-right: none;
  width: 300px;
`

export const Content = styled.div`
  width: calc(100% - 300px);
  flex-direction: column;
  padding: 20px;
  height: 100%;
  border: 3px solid #317ac3;
  align-items: center;
  display: flex;
`

export const ElementWrapper = styled.div<any>`
  padding: 15px 10px;
  background-color: #317ac3;
  border-radius: 10px;
  margin-bottom: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transform: scaleY(1.05);
  }
`

export const RemoveIcon = styled.div<any>`
  position: absolute;
  right: 0;
  top: 0;
  display: none;

  ::after {
    content: '✖';
    font-size: 25px;
    cursor: pointer;
    color: #317ac3;
  }
`

export const FieldWrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 25px 0px 10px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  
  &:hover {
    ${RemoveIcon} {
      display: block;
    }
  }
`

export const Form = styled.form<{ isEditMode: boolean }>`
  width: 100%;
  padding: 15px;

  ${props => !props.isEditMode && css`
    background-color: #eee;
  `}
`

export const Button = styled.button`
  background-color: #317ac3;
  border-radius: 10px;
  font-size: 25px;
  width: 200px;
  height: 50px;
  justify-content: center;
  align-items: center;
  display: flex;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  margin-top: 50px;

  &:hover {
    opacity: 0.9;
    transform: scaleY(1.05);
  }
`


