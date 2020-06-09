import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/logo.svg';

const CreatePoint = () => {
    return (
        <div id="id-create-point">
            <header>
                <img src={logo} alt="Ecoleta"/>
                <Link to="/">
                    Voltar para home
                </Link>
            </header>
        </div>

    );
}

export default CreatePoint;