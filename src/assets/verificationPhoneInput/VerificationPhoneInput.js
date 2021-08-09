import s from '../verificationName/verificationNameInput.module.css';
import React, { useState } from 'react';
import NumberFormat from 'react-number-format';

const VerificationPhoneInput = ({ formVerification, setFormVerification, phoneInput, showErrorPhone, setShowErrorPhone}) => {



    const [userInput, setUserInput] = useState('')

    const inputChangedHandler = (values) => {
        setUserInput(values,)
    }

    const isPhonePattern = (e) => {
        setFormVerification(formVerification, formVerification.phone = e.target.value);
        e.target.onblur = function () {
            if (e.target.value.length === 22 || e.target.value.length === 0) {
                setShowErrorPhone(false);
            } else {
                setShowErrorPhone(true);
            }
        };
        e.target.onfocus = function () {
            setShowErrorPhone(false);
        };
    }

    return (
        <label className={s.wrapperInput}>
            <NumberFormat
                className={showErrorPhone && s.inputError} name="number"
                format="+# (###) ### - ## - ##"
                mask=""
                name="phoneNumberInput"
                placeholder={'Telefono numeris'}
                onValueChange={inputChangedHandler}
                value={userInput.value}
                onChange={isPhonePattern}
                onKeyUp={phoneInput}
            />
            {showErrorPhone && <div className={s.errorMessage}>Privalomas laukas</div>}
       </label>
    )
}

export default VerificationPhoneInput;