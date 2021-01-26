import React, {useContext, useState} from 'react';
import {Redirect} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import {firebaseAuth} from "../provider/authProvider";
import {Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));


const Login = () => {
    const classes = useStyles();
    const {handleSingIn, inputs, setInputs} = useContext(firebaseAuth);
    const [redirect, setRedirect] = useState(false)

    const handleChange = (event) => {
        const {name, value} = event.target;
        setInputs(prev => ({...prev, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSingIn();
    }
    const handleRedirect = () => {
        console.log('Zalogowano')
        setRedirect(true);
    }

    return (
        <>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField
                        error
                        onChange={handleChange}
                        name="password"
                        type="password"
                        value={inputs.password}
                        id="standard-error"
                        label="Hasło:"
                    />

                    <TextField
                        error
                        value={inputs.email}
                        onChange={handleChange}
                        name="email"
                        type="email"
                        id="standard-error"
                        label="Adres e-mail:"
                    />

                    <Button onClick={handleSubmit} variant="contained">Zaloguj</Button>
                </div>
            </form>
            {redirect && <Redirect to="/rejestracja"/>}

            {/*<Button onClick={handleRedirect} variant="contained">Zarejestruj</Button>*/}
        </>
    );
}

export default Login