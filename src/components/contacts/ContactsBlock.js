import s from './contactsBlock.module.css';
import agnie from '../../images/Agne.png';
import kamile from '../../images/Kamile.png';
import tomas from '../../images/Tomas.png';
import VerificationPhoneInput from '../../assets/verificationPhoneInput/VerificationPhoneInput'

const ContactsBlock = () => {
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

                <VerificationPhoneInput/>

            </div>



        </section>
    )
}

export default ContactsBlock;