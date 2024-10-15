import './hero.css'
import heroImg from "../logo/images/duotone.jpg"
import Navigation from './Navigation';


export default function Hero() {
    return (
      <section id="hero" className="hero">
        <Navigation />
        <div className="hero-div">
          <div className="hero-text">
            <h1>
              Hi, <br />I am a web developer{" "}
            </h1>
            <p>
              <i>
                "I'm Abishek Pariyar, a versatile web developer and graphic
                designer skilled in ReactJS, HTML5, CSS3, Photoshop,
                Illustrator, and InDesign. I create responsive websites and
                impactful visual designs. Proficient in Microsoft Office, I
                deliver creative and technical solutions tailored to client
                needs."
              </i>{" "}
            </p>
            <button className='hireMe-button'>Hire me</button>
          </div>
        </div>
      </section>
    );
}