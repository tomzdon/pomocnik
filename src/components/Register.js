import React, {useContext} from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
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


const Register = () => {
    const classes = useStyles();
    const {handleSingUp, inputs, setInputs} = useContext(firebaseAuth);

    const handleChange = (event) => {
    const {name,value} = event.target;
    setInputs(prev=> ({...prev, [name]: value}));
    }

    const handleSubmit = async (event) => {
    event.preventDefault();
    await handleSingUp();
    }

return (
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
                onChange={handleChange}
                name="email"
                type="email"
                value={inputs.email}
                id="standard-error"
                label="Adres e-mail:"
            />

            <Button onClick={handleSubmit} variant="contained">Zarejestruj</Button>

        </div>
    </form>
);
}

export default Register