import s from '../verificationName/verificationNameInput.module.css';
import React, { useState } from 'react';

const VerificationMessageInput = ({ formVerification, setFormVerification, showErrorMsg, setShowErrorMsg }) => {

    const regexMsg = /\w+\s+\w+/;

    const isMsgPattern = (e) => {
        setFormVerification(formVerification, formVerification.message = e.target.value);
        let result = regexMsg.test(e.target.value);
        e.target.onblur = function () {
            if (result || e.target.value.length === 0) {
                setShowErrorMsg(false);
            } else {
                setShowErrorMsg(true);
            }
        };
        e.target.onfocus = function () {
            setShowErrorMsg(false);
        };
    }

    return (
        <form className={s.inputWidth}>
            <label className={s.wrapperInput}>
                <input
                    className={showErrorMsg && s.inputError}
                    placeholder={'Žinutė'}
                    name="name"
                    type='text'
                    onChange={isMsgPattern} />
                {showErrorMsg && <div className={s.errorMessage}>Privalomas laukas</div>}
            </label>
        </form>
    )
}

export default VerificationMessageInput;