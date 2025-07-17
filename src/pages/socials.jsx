import { Link } from "react-router-dom";
function Socials() {
  return (
    <div className="socials">
      <div className="socialsnav">
        <Link to="/" className="homeLink">Simon Schlitzer</Link>
        <div className="socialsnavright">
          <Link to="/projects" className="socialsnavLink">Projects</Link>
          <Link to="/about" className="socialsnavLink">About</Link>
        </div>
        <Link to="/" className="backLink">
          <img className="backIcon" src="./public/back.svg" alt="Back" />

        </Link>
    
      </div>
      <div className="socialsContent">
        <h2 className="socialsHeader">My Socials</h2>
        <div className="socialsLinks">
          <div className="socialLink">
            <img src="" alt="" className="socialIcon" />
            <a href="example.com" className="socialLink">Link1</a>
          </div>
           <div className="socialLink">
            <img src="" alt="" className="socialIcon" />
            <a href="example.com" className="socialLink">Link2</a>
          </div>
          <span className="socialLink">
            <img src="" alt="" className="socialIcon" />
            <a href="example.com" className="socialLink">Link3</a>
          </span>
        </div>
      </div>
    </div>
  );
}
export default Socials;
