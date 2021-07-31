import s from './imageGallery.module.css';
import BlackButton from '../../assets/blackButton/BlackButton'
import pic1 from '../../images/pic1.png';
import pic2 from '../../images/pic2.png';
import pic3 from '../../images/pic3.png';
import pic4 from '../../images/pic4.png';
import pic5 from '../../images/pic5.png';
import pic6 from '../../images/pic6.png';

const ImageGallery = () => {
    return (
        <section className={s.gallerySection}>

            <div className={s.galleryWrapper}>
                <h3 className={s.galleryName}>Naujienos</h3>
                <div className={s.gallery}>
                    <div className={s.innerGalleryWrapper}>
                        <div className={s.singleImg}>
                            <img src={pic2} alt="" />
                            <p>Lorem ipsum dolor <br></br> sit amet</p>
                        </div>
                        <div className={s.singleImg}>
                            <img src={pic1} alt="" />
                            <p>Lorem ipsum dolor <br></br> sit amet</p>
                        </div>
                        <div className={s.singleImg}>
                            <img src={pic3} alt="" />
                            <p>Lorem ipsum dolor <br></br> sit amet</p>
                        </div>
                        <div className={s.singleImg}>
                            <img src={pic4} alt="" />
                            <p>Lorem ipsum dolor <br></br> sit amet</p>
                        </div>
                        <div className={s.singleImg}>
                            <img src={pic5} alt="" />
                            <p>Lorem ipsum dolor <br></br> sit amet</p>
                        </div>
                        <div className={s.singleImg}>
                            <img src={pic6} alt="" />
                            <p>Lorem ipsum dolor <br></br> sit amet</p>
                        </div>
                    </div>
                    <div className={s.buttonPlace}>
                    <BlackButton>
                            <p>Daugiau naujienų</p>
                    </BlackButton>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ImageGallery;