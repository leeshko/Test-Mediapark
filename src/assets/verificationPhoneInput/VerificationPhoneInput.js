import s from './verificationPhoneInput.module.css';
import React, { useState } from 'react';
import NumberFormat from 'react-number-format';

const VerificationPhoneInput = ({ phoneInput}) => {

    const [showErrorPhone, setShowErrorPhone] = useState(false);

    const [userInput, setUserInput] = useState('')

    const inputChangedHandler = (values) => {
        setUserInput(values,)
    }

    const isPhonePattern = (e) => {
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
       <div className={s.wrapperPhone}>
            <NumberFormat
                className={showErrorPhone ? s.inputFieldError : s.inputField} name="number"
                format="+# (###) ### - ## - ##"
                mask=""
                name="phoneNumberInput"
                placeholder={'Ваш телефон'}
                onValueChange={inputChangedHandler}
                value={userInput.value}
                onChange={isPhonePattern}
                onKeyUp={phoneInput}
            />
            {showErrorPhone && <div className={s.errorMessage}> Введен некорректный номер телефона</div>}
       </div>
    )
}

export default VerificationPhoneInput;