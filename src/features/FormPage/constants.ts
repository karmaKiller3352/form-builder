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
    placeholder: 'Email'
  },
  [PHONE]: {
    ...STRING_DEFAULTS,
    fieldName: 'Phone',
    placeholder: 'Phone'
  },
  [URL]: {
    ...STRING_DEFAULTS,
    fieldName: 'Url',
    placeholder: 'Url'
  },
  [DESCRIPTION]: {
    ...TEXTAREA_DEFAULTS,
    fieldName: 'Description',
    placeholder: 'Description'
  },
  [NOTES]: {
    ...TEXTAREA_DEFAULTS,
    fieldName: 'Notes',
    placeholder: 'Notes'
  },
  [SIGNATURE]: {
    ...STRING_DEFAULTS,
    fieldName: 'Signature',
    placeholder: 'Signature'
  },
  [DATE]: {
    ...DATE_DEFAULTS,
    fieldName: 'Date/Time',
    placeholder: 'yyyy-MM-dd hh:mm:a'
  }
}