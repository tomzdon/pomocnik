import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';


const Header = () => {

    return (
        <>

            <div>

                <Button component={Link} to="/logowanie" variant="contained" color="primary">Logowanie </Button>
                <Button component={Link} to="/rejestracja" variant="contained" color="primary">Rejestracja </Button>

            </div>

            <div>

                <Button component={Link} to="/" variant="contained" color="primary">Wprowadzenie</Button>
                <Button component={Link} to="/funkcje" variant="contained" color="primary">Funkcje</Button>
                <Button component={Link} to="/inne" variant="contained" color="primary">Inne</Button>

            </div>
        </>

    );
}

export default Header