import { Avatar, Button, Grid, Link, Typography, } from "@mui/material"
import {SyntheticEvent} from "react"
import Input from "../ui/input"
import { useInputValue } from "../ui/useInputValue"
import { VALIDATORS_LOGIN_FORM } from "./validators"
import { red } from '@mui/material/colors';

type Nullable<T> = T | null

export type TValidator = {
    type: string,
    message: string,
    check: Function,
    valueToCheck?: number
}

type loginFormProps = {
    title?: string,
    error?: Nullable<string>,
    loading: boolean
}

export const LoginForm: React.FC<loginFormProps> = ({title = 'Formularios', error, loading=false}) => {

    const color = red[900];
  
    const password = useInputValue({
        value: '',
        name: 'email',
        type: 'password',
        label: 'Your password',
        validators: VALIDATORS_LOGIN_FORM.password as TValidator[]
    })
    const username = useInputValue({
        value: '',
        name: 'password',
        type: 'text',
        label: 'Your username',
        validators: VALIDATORS_LOGIN_FORM.username as TValidator[],
    })

    const verifyForm = async (e: SyntheticEvent) => {
        e.preventDefault()
        if (isInvalidForm()) {
            // TODO setErrorMessage('you have an error')
        } else {
           console.log("verde")
        }
    }

    const fillError = () => {
        return <span>{error}</span>
    }

    const isInvalidForm = () => !!(username.errors.length > 0 || password.errors.length > 0)

    const fillSignInHeader = () => (
        <>
            <Typography component="h1" variant="h5">
                {title}
            </Typography>
        </>
    )

    const fillForm = () => (
        <>
            <form  noValidate onSubmit={verifyForm}>
                <Input
                    required
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    autoComplete="email"
                    label="Nombre Completo"
                    {...username} />
                <Input
                    required
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    label="Email"
                    autoComplete="current-password"
                    {...password} />
                <Input
                    required
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    autoComplete="current-password"
                    label="Celular"
                    {...password} />
                <Input
                    required
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    autoComplete="current-password"
                    label="Rango de edad"
                    {...password} />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="inherit"
                    disabled={isInvalidForm()}
                >
                    Enviar formularios
                </Button>
            </form>
        </>
    )

    return (
        <div className="container-form" >
            <div className="login-form">
                {fillSignInHeader()}
                {!loading && fillForm()}
            </div>
        </div>
    )
}
