import { FormElement } from './interfaces';

export const EMAIL = 'email'

export const PHONE = 'phone'

export const URL = 'url'

export const DESCRIPTION = 'description'

export const NOTES = 'notes'

export const SIGNATURE = 'signature'

export const DATE = 'date'

export const STRING_DEFAULTS = {
  type: 'text',
  defaultPlaceholder: 'Text Field',
}

export const TEXTAREA_DEFAULTS = {
  type: 'textarea',
  defaultPlaceholder: 'Text Area Field',
}

export const DATE_DEFAULTS = {
  type: 'datetime-local',
  defaultPlaceholder: 'Date'
}

export const TYPES_MAP: FormElement = {
  [EMAIL]: {
    ...STRING_DEFAULTS,
    fieldName: 'Email',
    placeholder: 'Email',
    rules: { minLength: { value: 3, message: 'At least 3 characters' }, maxLength: { value: 30, message: 'Maximum 30 characters' } }
  },
  [PHONE]: {
    ...STRING_DEFAULTS,
    fieldName: 'Phone',
    placeholder: 'Phone',
    rules: { minLength: { value: 3, message: 'At least 3 characters' }, maxLength: { value: 30, message: 'Maximum 20 characters' } }
  },
  [URL]: {
    ...STRING_DEFAULTS,
    fieldName: 'Url',
    placeholder: 'Url',
    rules: { minLength: { value: 3, message: 'At least 3 characters' }, maxLength: { value: 30, message: 'Maximum 20 characters' } }
  },
  [DESCRIPTION]: {
    ...TEXTAREA_DEFAULTS,
    fieldName: 'Description',
    placeholder: 'Description',
    rules: { minLength: { value: 3, message: 'At least 3 characters' }, maxLength: { value: 255, message: 'Maximum 255 characters' } }
  },
  [NOTES]: {
    ...TEXTAREA_DEFAULTS,
    fieldName: 'Notes',
    placeholder: 'Notes',
    rules: { minLength: { value: 3, message: 'At least 3 characters' }, maxLength: { value: 128, message: 'Maximum 128 characters' } }
  },
  [SIGNATURE]: {
    ...STRING_DEFAULTS,
    fieldName: 'Signature',
    placeholder: 'Signature',
    rules: { minLength: { value: 3, message: 'At least 3 characters' }, maxLength: { value: 10, message: 'Maximum 10 characters' } }
  },
  [DATE]: {
    ...DATE_DEFAULTS,
    fieldName: 'Date/Time',
    placeholder: 'yyyy-MM-dd hh:mm:a'
  }
}