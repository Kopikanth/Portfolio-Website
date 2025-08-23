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
    <section className="contact">
        <span className="clientsTitle">My clients</span>
        <p className="clientsText">I have had a opportunity to work with a diverse group of companies. Some of the companies I have worked with include.</p>
        <div className="companies">
            <img src={walmart} alt="walmart" className="companyLogo" />
            <img src={adobe} alt="" className="companyLogo" />
            <img src={microsoft} alt="" className="companyLogo" />
            <img src={facebook} alt="" className="companyLogo" />
        </div>
        <span className="contactTitle">Contact Me</span>
        <p className="contactText">Please fill out the form below to discuss any work opportunities.</p>
        <input placeholder='Your name' type="text" className="contactName" />
        <input placeholder='Your Email' type="text" className="contactEmail" />
        <textarea placeholder='Your Message' className="contactMessage"></textarea>
        <button className="contactSubmit">Submit</button>
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