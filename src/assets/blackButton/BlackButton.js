import s from './blackButton.module.css';

const SortButton = ({ children, buttonDisabled = false }) => {

    return (
        <>
            {buttonDisabled ?
                <button className={s.sortButtonDisabled} disabled>
                    <div className={s.inButton}>
                        {children}
                        <div className={s.arrowDown}></div>
                    </div>
                </button> :
                <button className={s.sortButton} >
                    <div className={s.inButton}>
                        {children}
                        <div className={s.arrowDown}></div>
                    </div>
                </button>}
        </>
    )
}

export default SortButton;