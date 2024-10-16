import "./contact.css";
import {
  FaGithub,
  FaLinkedin,
  FaDribbble,
  FaInstagramSquare,
} from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoLocation } from "react-icons/io5";

import { MdEmail } from "react-icons/md";


export default function Contact() {
  return (
    <section id="contactID" className="contact">
      <div className="contactHeading">
        <h1>Hire me! </h1>
        <p>
          <i>
            "Feel free to reach out for any inquiries or collaborations—i'd love
            to hear from you! Whether you have a project in mind or just want to
            connect, don't hesitate to get in touch."
          </i>
        </p>
      </div>
      <div className="contactContainer">
        <div className="contactTextPart">
          <li>
            <div className="icon">
              <IoMdCall />
            </div>
            +1(437)665-1393
          </li>
          <li>
            <div className="icon">
              {" "}
              <MdEmail />
            </div>
            swaggyabii56@gmail.com
          </li>
          <li>
            <div className="icon">
              <IoLocation />
            </div>
            Mississauga, ON, Canada
          </li>
        </div>
        <div className="contactSocial">
          <div>
            <FaGithub />
          </div>
          <div>
            <FaLinkedin />
          </div>
          <div>
            <FaDribbble />
          </div>
          <div>
            <FaInstagramSquare />
          </div>
        </div>
      </div>
    </section>
  );
}
 