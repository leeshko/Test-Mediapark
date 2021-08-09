import s from './verificationNameInput.module.css';
import React, { useState } from 'react';

const VerificationNameInput = ({ formVerification, setFormVerification, showErrorName, setShowErrorName }) => {
  

    const regexName = /^([А-Я]{1}[а-я]{1,23}|[A-Z]{1}[a-z]{1,23})$/;

    const isNamePattern = (e) => {
        setFormVerification(formVerification, formVerification.name = e.target.value);
        let result = regexName.test(e.target.value);
        e.target.onblur = function () {
            if (result || e.target.value.length === 0) {
                setShowErrorName(false);
            } else {
                setShowErrorName(true);
            }
        };
        e.target.onfocus = function () {
            setShowErrorName(false);
        };
    }

    return (
        <form className={s.inputWidth}>
            <label className={s.wrapperInput}>
                <input
                    className={showErrorName && s.inputError}
                    placeholder={'Jūsų vardas'}
                    name="name"
                    type='text'
                    onChange={isNamePattern} />
                {showErrorName && <div className={s.errorMessage}>Privalomas laukas</div>}
            </label>
        </form>
    )
}

export default VerificationNameInput;