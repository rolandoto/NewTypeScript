import { Avatar, Button, Grid, Link, Typography } from "@mui/material"
import {SyntheticEvent} from "react"
import Input from "../ui/input"
import { useInputValue } from "../ui/useInputValue"
import { VALIDATORS_LOGIN_FORM } from "./validators"

type Nullable<T> = T | null

export type TValidator = {
    type: string,
    message: string,
    check: Function,
    valueToCheck?: number
}

type loginFormProps = {
    title?: string,
    error: Nullable<string>,
    loading: boolean
}

export const LoginForm: React.FC<loginFormProps> = ({title = 'Sign in', error, loading=false}) => {
  
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
            <Avatar  >
                
            </Avatar>
            <Typography component="h1" variant="h5">
                {title}
            </Typography>
        </>
    )

    const fillLoginHelpers = () => (
        <Grid container>
            <Grid item xs>
                <Link href="#" variant="body2">
                    Forgot password?
                </Link>
            </Grid>
            <Grid item>
                <Link href="#" variant="body2">
                    {'Don\'t have an account? Sign Up'}
                </Link>
            </Grid>
        </Grid>
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
                    {...username} />
                <Input
                   
                    required
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    autoComplete="current-password"
                    {...password} />
                {error && fillError()}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={isInvalidForm()}
                >
                    Sign In
                </Button>
                {fillLoginHelpers()}
            </form>
        </>
    )

    return (
        <>
            {fillSignInHeader()}
            {!loading && fillForm()}
        </>
    )
}
