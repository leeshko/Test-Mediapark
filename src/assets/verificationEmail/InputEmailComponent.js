import s from '../verificationName/verificationNameInput.module.css';
import React, { useState, useCallback } from 'react';

const VerificationMailInput = ({ formVerification, setFormVerification, showErrorMail, setShowErrorMail }) => {

    const regexMail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

    const isMailPattern = (e) => {
        setFormVerification(formVerification, formVerification.email = e.target.value);
        let result = regexMail.test(e.target.value);
        e.target.onblur = function () {
            if (result || e.target.value.length === 0) {
                setShowErrorMail(false);
            } else {
                setShowErrorMail(true);
            }
        };
        e.target.onfocus = function () {
            setShowErrorMail(false);
        };
    }

    return (
        <form className={s.inputWidth}>
            <label className={s.wrapperInput}>
                <input
                    className={showErrorMail && s.inputError}
                    placeholder={'El. Paštas'}
                    name="email"
                    type='email'
                    onChange={isMailPattern} />
                {showErrorMail && <div className={s.errorMessage}> Įvestas neteisingas el. paštas</div>}
            </label>
        </form>
    )
}

export default VerificationMailInput;