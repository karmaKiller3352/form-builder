export interface IField {
  type: string,
  defaultPlaceholder: string,
  fieldName: string,
  placeholder?: string,
  rules?: any,
}

export interface IFieldComponent {
  fieldInfo: IField, 
  field: any, 
  error: any,
  isEditMode: boolean
}