import './Skills.css';
import uiDesign from '../../assets/ui-design.png';
import websiteDesign from '../../assets/website-design.png';
import appDesign from '../../assets/app-design.png';

const Skills = () => {

    return (
        <section id="skills">
            <span className="skillsTitle">What I do</span>
            <p className="skillsDescription">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in html, css, and javascript, as well as design software such as Adobe Photoshop and Illustrator.</p>
            <div className="skillSet">
                <img src={uiDesign} alt="UI-design" className='skillIcon'/>
                <div className="skillDetail">
                    <span className="skillName">UI/UX design</span>
                    <span className="skillText">This is a demo text, you can write your own content here.</span>
                </div>
            </div>
            <div className="skillSet">
                <img src={websiteDesign} alt="UI-design" className='skillIcon'/>
                <div className="skillDetail">
                    <span className="skillName">Website design</span>
                    <span className="skillText">This demo can be changed while making the production ready site.</span>
                </div>
            </div>
            <div className="skillSet">
                <img src={appDesign} alt="UI-design" className='skillIcon'/>
                <div className="skillDetail">
                    <span className="skillName">App design</span>
                    <span className="skillText">You can write text related to mobile app development.</span>
                </div>
            </div>
        </section>
    );
};

export default Skills;