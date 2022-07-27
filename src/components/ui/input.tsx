import React from 'react'
import TextField from '@mui/material/TextField';

type propsInput = {
    helperText?: string,
    disabled?: boolean
    required?: boolean
    fullWidth?: any
    variant?: any
    margin?: any
    autoComplete?: string
    outlined?: string
    label?:string
}
const Input: React.FC<propsInput> = (props) => {

    return (
        <TextField
            {...props}
            error={!!(props.helperText)}
        />

    )
}
export default Input
