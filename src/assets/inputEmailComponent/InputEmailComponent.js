import s from './inputPhoneComponent.module.css';
import React, { useState, useCallback } from 'react';
import Checkbox from '../Checkbox';
import NumberFormat from 'react-number-format';

const InputPhoneComponent = ({ showEmail, setShowEmail }) => {

    const [showErrorPhone, setShowErrorPhone] = useState(() => false);
    const [showErrorMail, setShowErrorMail] = useState(() => false);
    const [userInput, setUserInput] = useState('')

    const regexpMail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    let phoneFormPlaceholder = '+7 (_ _ _) - _ _ _ - _ _ - _ _';

    const displayEmail = (e) => {
        setShowEmail(e.target.checked);
        setUserInput('');
        setShowErrorPhone(false);
        setShowErrorMail(false);
    }

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

    const isMailPattern = (e) => {
        let result = regexpMail.test(e.target.value);
        e.target.onblur = function () {
            if (result) {
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
            <label>
                <div className={s.labelName}></div>
                <div className={s.checkboxRow}>
                    <div className={s.labelName}>Телефон</div>
                    <Checkbox displayEmail={displayEmail} />
                    <div className={s.labelName}>E-mail</div>
                </div>

                {!showEmail ?
                    <NumberFormat
                        className={showErrorPhone ? s.inputFieldError : s.inputField} name="number"
                        format="+# (###) ### - ## - ##"
                        mask=""
                        name="phoneNumberInput"
                        placeholder={phoneFormPlaceholder}
                        onValueChange={inputChangedHandler}
                        value={userInput.value}
                        onChange={isPhonePattern}
                    /> :
                    <input
                        className={showErrorMail ? s.inputFieldError : s.inputField}
                        placeholder={'example@gmail.com'} 
                        name="number" 
                        type='email' 
                        onChange={isMailPattern} />}
                {!showEmail && showErrorPhone && <div className={s.errorMessage}> Введен некорректный номер телефона</div>}
                {showEmail && showErrorMail && <div className={s.errorMessage}>  Введен некорректный номер e-mail</div>}
            </label>
        </form>
    )
}

export default InputPhoneComponent;