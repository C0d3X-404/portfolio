import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? "dark" : "light";
  const [frozen, setFrozen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };




  return (
    <div className="home_container">
      <div className={`home ${theme}`}>
        <div className="header_container">
          <div className="welcometext">Hey, I'm</div>


          <div className="line_container">
            <span className="name">Simon Schlitzer</span>
            <img className={`svg ${theme} line`} src="./public/namenslinie.svg" />
            <label className="lineLabel">Name</label>
          </div>

          <div className="description">
            I am a Student and I'll leave two lines for this
          </div>

          <div className="regalContainer">
            <div className="regalinhalt">
              <div className="regalinhaltLinks">
                <img className={`svg ${theme} blume`} src="./public/blume.svg" />

                <a className="brief" href="mailto:simon.schlitzer@gmx.de?subject=🚀%20Let's%20Talk">
                  <img className={`svg ${theme} briefGeschlossen`} src="./public/brief.svg" />
                  <img className={`svg ${theme} briefOffen`} src="./public/brief hover.svg" />
                </a>
                <img className={`svg ${theme} camera`} src="./public/kamera.svg" />

              </div>

              <div className="regalinhaltRechts">
                <Link to="/about" className="bild_container">
                  <img className={`svg ${theme} bild1`} src="./public/bild1.svg" />
                  <img className={`svg ${theme} bild2`} src="./public/bild1hover.svg" />

                </Link>
                <div className="Lampe_container">
                  <img onClick={toggleDarkMode}className={`lampe ${theme}`}src="./public/lampe ohne string.svg"/>
                  <img onClick={toggleDarkMode}className={`lampeVoll ${theme}`} src="./public/lampeVoll.svg" />
                </div>
  
                <div className="buecher">
                  <Link to="/socials"className={`svg ${theme} buch1`}><img  src="./public/buch1.svg" /></Link>
                  <Link to="/socials" className={`svg ${theme} buch2`}> <img src="./public/buch2.svg" /></Link>
                  <Link to="/socials"className={`buch3 ${frozen ? 'frozen' : ''}`} onMouseEnter={() => setFrozen(true)}>
                    <img className={`svg ${theme} buch3img`} src="./public/buch3.svg" />
                  </Link>
                </div>
              </div>
            </div>

            <div className={`svg ${theme} regal`}  />
          </div>

         
        </div>
      </div>

      
    </div>
  );

}