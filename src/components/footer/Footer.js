import s from './footer.module.css';
import fb from '../../images/fb.svg';
import insta from '../../images/insta.svg';

const Footer = () => {
    return (
        <footer className={s.footerStyle}>
            <div className={s.textInfoBlock}>
                <div>
                    <h4>Apie statytoją</h4>
                    <p>Lorem ipsum</p>
                    <p>Dolor sit amet</p>
                </div>
                <div>
                    <h4>Saugumas</h4>
                    <p>Consectetur adipiscing </p>
                    <p>Sed do eiusmod</p>
                </div>
            </div>
            <div className={s.socialBlock}>
                <div>
                <img src={fb} alt="facebook" />
                <img src={insta} alt="instagram" />
                </div>

            </div>
        </footer>
    )
}

export default Footer;