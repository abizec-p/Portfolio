import "./contact.css";
import {
  FaGithub,
  FaLinkedin,
  FaDribbble,
  FaInstagramSquare,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contactID" className="contact">
      <div className="contactHeading">
        <h1>Leave me a Message! </h1>
        <p>
          <i>
            "Feel free to reach out for any inquiries or collaborations—I’d love
            to hear from you! Whether you have a project in mind or just want to
            connect, don't hesitate to get in touch."
          </i>
        </p>
      </div>
      <div className="contactContainer">
        <div className="contactTextPart">

          <li>+1(437)665-1393</li>
          <li>swaggyabii56@gmail.com</li>
          <li>Mississauga, ON, Canada</li>
          <div className="contactSocial">
            
              <div><FaGithub /></div>
              <div><FaLinkedin /></div>
              <div><FaDribbble /></div>
              <div><FaInstagramSquare /></div>
          </div>
        </div>
    
      </div>
    </section>
  );
}
 