import { IField } from './../../components/interfaces';

export type FormItem = string

export interface IFormItemList {
  formFields: FormItem[],
  clickHandler: (fieldName: string) => void
}

export interface FormElement {
  [key: string]: IField
}

export interface IFormPreview {
  fields: FormItem[],
  isEditMode: boolean,
  control: any,
  removeHandler: (index: number) => void
}

export interface IFormValues {
  [key: string]: string
}

export interface IFormField {
  fieldInfo: IField,
  name: string,
  control: any,
  isEditMode: boolean
}


