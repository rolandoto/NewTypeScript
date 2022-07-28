import { Button, Typography, } from "@mui/material"
import {SyntheticEvent, useState} from "react"
import Input from "../ui/input"
import { useInputValue } from "../ui/useInputValue"
import { VALIDATORS_LOGIN_FORM } from "./validators";
import { useNavigate } from "react-router-dom";

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

    const username  = useInputValue({
        value: '',
        name: 'username',
        type: 'text',
        label: 'Your username',
        validators: VALIDATORS_LOGIN_FORM.username as TValidator[]
    })

    const email = useInputValue({
        value: '',
        name: 'username',
        type: 'email',
        label: 'Your email',
        validators: VALIDATORS_LOGIN_FORM.email as TValidator[],
    })

    const phone = useInputValue({
        value: '',
        name: 'phone',
        type: 'number',
        label: 'Your phone',
        validators: VALIDATORS_LOGIN_FORM.phone as TValidator[],
    })

    const age = useInputValue({
        value: '',
        name: 'age',
        type:'number',
        label: 'Your age',
        validators: VALIDATORS_LOGIN_FORM.age as TValidator[],
    })

    let navigate = useNavigate();

    const verifyForm = async (e: SyntheticEvent) => {
        e.preventDefault()
        if (isInvalidForm()) {
            // TODO setErrorMessage('you have an error')
        } else {
            console.log({
                username:username.value,
                email:email.value,
                phone:phone.value,
                age:age.value
                })
                hand()  
        }
    }

    const fillError = () => {
        return <span>{error}</span>
    }

    const isInvalidForm = () =>!!(username.errors.length>0 || email.errors.length>0|| phone.errors.length>0|| age.errors.length>0)

    const [state,setState] =useState(false)
    const [ismodal,setModal]=useState(false)

    const hand =() =>{
        setState(true)
    }

    const  hanConfirm =async () =>{
        setState(false)
        setModal(true)
        setTimeout(() =>{
            setModal(false)
            navigate("/confirms", { replace: true });
        },5000)
    }

    const Modal =() =>(
        <>
        {state && <div className="border-ri" >
                        <div className="content-Modal" >
                            <div>
                                <span>Confirmacion</span>
                            </div>

                            <div className="modal-confirm" >
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="inherit"
                                onClick={hanConfirm}
                            >
                                 si
                            </Button>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="inherit"
                                onClick={() => setState(false)}
                            >
                                 no
                            </Button>
                            </div>
                        </div>  
                </div>}
            
        </>
    )

    const CloseModal =() => (
        <>
        {ismodal &&<div className="border-ri" >
                        <div className="content-Modal" >
                            <div>
                                <span>Tu informacion fue enviada con exicto</span>
                            </div>
                        </div>  
                </div>
        }
        </>
    )

    const fillSignInHeader = () => (
        <>
            <Typography component="h1" variant="h5">
                {title}
            </Typography>
        </>
    )

    const fillForm = () => (
        <>
            <form   onSubmit={verifyForm}>
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
                    {...email} />
                <Input
                    required
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    label="Celular"
                    type="number"
                    {...phone} />
                <Input
                    required
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    label="Rango de edad"
                    type="number"
                    {...age} />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="inherit"
                    disabled={isInvalidForm()}
                >
                    Enviar formularios
                </Button>
                {Modal()}
                {CloseModal()}
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
