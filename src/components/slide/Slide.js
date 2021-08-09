import s from './slide.module.css';
import pic2 from '../../images/pic2.png'


const Slide = ({image}) => {
    return (
    <div className={s.slide1}>
       
            <img className={s.pic} src={image} alt="" />

   
        <div className={s.textSlider}>
                <p className={s.blockName}>Lorem ipsum dolor sit amet</p>
                <p className={s.blockText}>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad... minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
    </div>)
}

export default Slide;