import {useState} from 'react'


type TError = {
    type: string
    message: string
}

type TValidator = {
    type: string,
    message: string,
    check: Function,
    valueToCheck?: number
}

interface useInputValueProps {
    name: string,
    validators?: TValidator[],
    value: string,
    label?: string,
    errors?: TError[],
    type?: string
}

export const useInputValue = ({
                                  name: nameP = '',
                                  value: valueP = '',
                                  label: placeholderP = '',
                                  validators: validatorsParam = [] ,
                                  errors: errorsP = [],
                                  type: typeP = 'text'
                              }: useInputValueProps) => {

    const [value, setValue] = useState(valueP)
    const [errors, setErrors] = useState(errorsP)
    const [validators, setValidators] = useState(validatorsParam || [])
    const [helperText, setHelperText] = useState('')

    const onChange = (e: any) => {
        e.target ? setValue(e.target.value) : setValue("")
        e.target ? validateInput(e.target.value) : validateInput("")
    }

    /**
     *
     * @param {*} value
     * @return Array of errors
     */
    const validateInput = (value: any) => {
        const err = validators
            .filter(validator => !validator.check(value, validator?.valueToCheck))
            .map(val => {
                return {type: val.type, message: val.message}
            })
        setErrors(err)
        updateHelperText(err)
        return err
    }

    const updateHelperText = (err: TError[]) => {
        err.length > 0 ? setHelperText(err.map(e => e.message)?.join('\n')) : setHelperText('')
    }

    return {
        value,
        errors,
        validators,
        helperText,
        onChange,
    }
}
