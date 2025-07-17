import { Link } from 'react-router-dom';
export default function About() {
  return (
    <div className="about">
      <div className="aboutnav">
        <Link to="/" className="homeLink">Simon Schlitzer</Link>
        <div className="aboutnavright">
          <Link to="/projects" className="navLink">Projects</Link>
          <Link to="/socials" className="navLink">Socials</Link>
        </div>
        <Link to="/" className="backLink">
          <img className="backIcon" src="./public/back.svg" alt="Back" />

        </Link>
      </div>


    </div>
  );
}