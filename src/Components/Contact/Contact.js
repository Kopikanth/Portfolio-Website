import './Contact.css';
import walmart from '../../assets/walmart.png';
import adobe from '../../assets/adobe.png';
import microsoft from '../../assets/microsoft.png';
import facebook from '../../assets/facebook.png';
import facebookIcon from '../../assets/facebook-icon.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';
import instagram from '../../assets/instagram.png';

const Contact = () => {

  return (
    <section id="contact">
        <div id="clientsInfo">
            <span className="clientsTitle">My clients</span>
            <p className="clientsText">I have had a opportunity to work with a diverse group of companies. Some of the notable companies I have worked with include.</p>
            <div className="companies">
                <img src={walmart} alt="walmart" className="companyLogo" />
                <img src={adobe} alt="" className="companyLogo" />
                <img src={microsoft} alt="" className="companyLogo" />
                <img src={facebook} alt="" className="companyLogo" />
            </div>
        </div>
        <span id="contactTitle">Contact Me</span>
        <p className="contactText">Please fill out the form below to discuss any work opportunities.</p>
        <form action="" className="contactForm">
            <input placeholder='Your Name' type="text" className="contactDetail" />
            <input placeholder='Your Email' type="email" className="contactDetail" />
            <textarea placeholder='Your Message' className="contactMessage"></textarea>
            <button className="contactSubmit" type='submit'>Submit</button>
        </form>
        <div className="socialMedias">
            <img src={facebookIcon} alt="facebook-icon" className="mediaLogo" />
            <img src={twitter} alt="twitter" className="mediaLogo" />
            <img src={youtube} alt="youtube" className="mediaLogo" />
            <img src={instagram} alt="instagram" className="mediaLogo" />
        </div>
    </section>
  );
};

export default Contact;