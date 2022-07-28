import { PATTERN_EMAIL } from '../Forms/patterns'
import {
    checkMinLength,
    checkMaxLength,
    checkPattern,
    rangeMinLength,
    rangeMaxLength,
    phoneMaxLength,
    phoneMinLength
} from '../Forms/Validators'


export const REQUIRED_MESSAGE = 'This field is requiered.'
export const PATTERN_ERROR_MESSAGE = 'It must be a valid email. e.g. myemail@mydomain.com.'
export const MAX_LENGTH_MESSAGE = 'The maximum size allowed is ? characters.'
export const MIN_LENGTH_MESSAGE = 'The minimum size allowed is ? characters.'

export const VALIDATORS_LOGIN_FORM = {
    username: [
        {
            type: 'required',
            message: REQUIRED_MESSAGE,
            check: checkMinLength,
            valueToCheck: 0
        },
        {
            type: 'maxlength',
            message: MAX_LENGTH_MESSAGE.replace('?', '100'),
            check: checkMaxLength,
            valueToCheck: 100
        }
    ],
    email: [
        {
            type: 'maxlength',
            message: MAX_LENGTH_MESSAGE,
            check: checkMaxLength,
            valueToCheck: 50
        },
        {
            type: 'minlength',
            message: MIN_LENGTH_MESSAGE.replace('?', '3'),
            check: checkMinLength,
            valueToCheck: 3
        },
        {
            type: 'required',
            message: REQUIRED_MESSAGE,
            check: checkMinLength,
            valueToCheck: 0
        },
        {
            type: 'email    ',
            message: PATTERN_ERROR_MESSAGE,
            check: checkPattern,
            valueToCheck: PATTERN_EMAIL
        }
    ],

    phone: [
        {
            type: 'maxlength',
            message: MAX_LENGTH_MESSAGE.replace("?","10"),
            check: phoneMaxLength,
            valueToCheck: 10
        },
        {
            type: 'minlength',
            message: MIN_LENGTH_MESSAGE.replace('?', '18'),
            check: phoneMinLength,
            valueToCheck: 3
            
        },
    ],
    age: [
       
        {
            type: 'minlength',
            message: MIN_LENGTH_MESSAGE.replace('?', '18'),
            check: rangeMinLength,
            valueToCheck: 18 
            
        },
        {
            type: 'maxlength',
            message: MAX_LENGTH_MESSAGE.replace('?', '100'),
            check: rangeMaxLength,
            valueToCheck: 100
            
        },
        {
            type: 'required',
            message: REQUIRED_MESSAGE,
            check: checkMinLength,
            valueToCheck: 0
        },
    ]
}
