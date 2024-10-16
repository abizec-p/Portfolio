import { useState } from "react";
import "./navigation.css"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHome } from "react-icons/fa";




export default function Navigation() {
  const [isActive, SetIsActive] = useState(false);
  const [isHamburger, setHamburger] = useState(false);
  const [isMenuItem, setIsMenuItem] = useState(false);

  const toggleClass = () => {
    SetIsActive(!isActive);
    setHamburger(!isHamburger);
    setIsMenuItem(!isMenuItem);

  }

    return (
      <section className="top-nav">
        <div className="nav-bar">
          <div className="logo">
            <span className="home-icon">
              <a href="home">
                {" "}
                <FaHome />
              </a>{" "}
            </span>
            <h1>Abizec</h1>
          </div>
          <div>
            <ul className={isActive ? "active" : "inactive"}>
              <div className={isMenuItem ? "show-menu-item" : "menu-item"}>
                <li>
                  <a href="#project">works </a>
                </li>

                <li>
                  <a href="#profileID">about </a>
                </li>

                <li>
                  <a href="#skillsID">skills</a>
                </li>

                <li>
                  <a href="#contactID">contact </a>
                </li>

                <div className="social-nav">
                  <li>
                    <a href="#">
                      <FaGithub />{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <FaLinkedin />
                    </a>
                  </li>
                </div>
              </div>
              <button
                onClick={toggleClass}
                className={isHamburger ? "cross-button" : "hamburger"}
              >
                <div></div>
                <div></div>
                <div></div>
              </button>
            </ul>
          </div>
        </div>
      </section>
    );
}