import s from './blackButton.module.css';

const SortButton = ({ children }) => {
    return (
        <button className={s.sortButton}>
            <div className={s.inButton}>
                {children}
                <div className={s.arrowDown}></div>
            </div> 
        </button>
    )
}

export default SortButton;