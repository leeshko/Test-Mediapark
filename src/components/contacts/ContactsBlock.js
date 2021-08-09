import React, { useState } from "react";
import Checkbox from "react-custom-checkbox";
import s from './contactsBlock.module.css';
import agnie from '../../images/Agne.png';
import kamile from '../../images/Kamile.png';
import tomas from '../../images/Tomas.png';
import checkedBox from '../../images/checkboxSquare.png';
import VerificationNameInput from '../../assets/verificationName/VerificationNameInput';
import VerificationMailInput from '../../assets/verificationEmail/InputEmailComponent';
import VerificationPhoneInput from '../../assets/verificationPhoneInput/VerificationPhoneInput';
import VerificationMessageInput from '../../assets/verificationMessage/VerificationMessageInput';
import SortButton from "../../assets/blackButton/BlackButton";

const ContactsBlock = () => {

    const form = {
        name: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formVerification, setFormVerification] = useState(form);

    const [showErrorName, setShowErrorName] = useState(false);
    const [showErrorMail, setShowErrorMail] = useState(false);
    const [showErrorPhone, setShowErrorPhone] = useState(false);
    const [showErrorMsg, setShowErrorMsg] = useState(false);
    const [checkBoxValue, setCheckBoxValue] = useState(' ');

    return (
        <section className={s.contactsWrapper}>
            <div className={s.infoBlock}>
                <div className={s.workerBlock}>
                    <img src={agnie} alt="" />
                    <div className={s.info}>
                        <p className={s.name}>Agnė Valentinaitė</p>
                        <p className={s.connection}>agne@ntprojects.com</p>
                        <p className={s.connection}>  +370 62553454 </p>
                    </div>
                </div>
                <div className={s.workerBlock}>
                    <img src={kamile} alt="" />
                    <div className={s.info}>
                        <p className={s.name}>Kamilė Henderson</p>
                        <p className={s.connection}>kamile@ntprojects.com</p>
                        <p className={s.connection}>  +370 64567893 </p>
                    </div>
                </div>
                <div className={s.workerBlock}>
                    <img src={tomas} alt="" />
                    <div className={s.info}>
                        <p className={s.name}>Tomas Petkevičius</p>
                        <p className={s.connection}>tomas@ntprojects.com</p>
                        <p className={s.connection}>  +370 60567843 </p>
                    </div>
                </div>
            </div>


            <div className={s.contactsBlock}>
                <div className={s.contactBlockName}>Sužinok apie <br></br> projektą daugiau</div>
                <VerificationNameInput
                    formVerification={formVerification}
                    setFormVerification={setFormVerification}
                    showErrorName={showErrorName}
                    setShowErrorName={setShowErrorName} />
                <VerificationMailInput
                    formVerification={formVerification}
                    setFormVerification={setFormVerification}
                    showErrorMail={showErrorMail}
                    setShowErrorMail={setShowErrorMail} />
                <VerificationPhoneInput
                    formVerification={formVerification}
                    setFormVerification={setFormVerification}
                    showErrorPhone={showErrorPhone}
                    setShowErrorPhone={setShowErrorPhone} />
                <VerificationMessageInput
                    formVerification={formVerification}
                    setFormVerification={setFormVerification}
                    showErrorMsg={showErrorMsg}
                    setShowErrorMsg={setShowErrorMsg} />

                <div className={s.checkBlock}>
                    <Checkbox
                        onChange={(e) => setCheckBoxValue(e)}
                        className={s.chkBox}
                        checked={false}
                        icon={<img src={checkedBox} style={{ width: '18px' }} alt="" />}
                        borderColor="#6F88B1"
                        borderRadius={0}
                        borderWidth={1}
                        size={28}
                        label=""
                    />
                    <div className={s.checkboxLegend}>
                        Lorem ipsum, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore minim
                        <br />
                        ntprojects@info.com
                        {!checkBoxValue && <div className={s.errorMessageChkBox}>Privalomas laukas</div>}
                    </div>
                </div>
                <div className={s.buttonContainer}>
                    <SortButton
                        buttonDisabled={!Object.values(formVerification).includes('')
                            && !showErrorName
                            && !showErrorMail
                            && !showErrorPhone
                            && !showErrorMsg
                            && checkBoxValue
                            && checkBoxValue !== ' '
                            ? false
                            : true}
                    >
                        <p>Siųsti</p>
                    </SortButton>
                </div>
            </div>
        </section>
    )
}

export default ContactsBlock;