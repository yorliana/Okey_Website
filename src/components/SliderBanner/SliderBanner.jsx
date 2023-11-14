import style from "./SliderBanner.module.css"
import img1 from './imgSlider/img1.png';
import img2 from './imgSlider/img2.png';
import img3 from './imgSlider/img3.png';
import img4 from './imgSlider/img4.png';



const SliderBanner = () => {
    return (
    <div id={style.SliderContainer}>
        <div>
            <ul>
                <li><img src={img1} alt="Img referencial" /></li>
                <li><img src={img2} alt="Img referencial" /></li>
                <li><img src={img3} alt="Img referencial" /></li>
                <li><img src={img4} alt="Img referencial" /></li>
                
            </ul>
        </div>

   </div>
    );
};


export default SliderBanner;
