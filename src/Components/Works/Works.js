import './Works.css';
import pic1 from '../../assets/portfolio-1.png';
import pic2 from '../../assets/portfolio-2.png';
import pic3 from '../../assets/portfolio-3.png';
import pic4 from '../../assets/portfolio-4.png';
import pic5 from '../../assets/portfolio-5.png';
import pic6 from '../../assets/portfolio-6.png';

const Works = () => {

    return (
        <section id="works">
            <span className="worksTitle">My portfolio</span>
            <p className="worksDescription">I take pride in paying attention to the smallest deatils and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</p>
            <div className="imageSection">
                <img src={pic1} alt="image 1" className="workImage" />
                <img src={pic2} alt="image 2" className="workImage" />
                <img src={pic3} alt="image 3" className="workImage" />
                <img src={pic4} alt="image 4" className="workImage" />
                <img src={pic5} alt="image 5" className="workImage" />
                <img src={pic6} alt="image 6" className="workImage" />
            </div>
            <button className="seeMore">See more</button>
        </section>
    );
};

export default Works;