import s from './header.module.css';

const Header = () => {
    return (
        <header className={s.headerStyle}>
            <h1>NTPROJECT</h1>
            <nav className={s.navLinks}>
                <a className={s.navLink} href="">Pradžia</a>
                <a className={s.navLink} href="">Pasiūlymai</a>
                <a className={s.navLink} href="">Naujienos</a>
                <a className={s.navLink} href="">Kontaktai</a>
            </nav>
        </header>
    )
}

export default Header;