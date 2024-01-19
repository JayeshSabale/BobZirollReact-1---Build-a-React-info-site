import React from "react";

import me from "./Rectangle90.png";
import mail from "./Icons/Mail.svg";
import linkedin from "./Icons/linkedin.svg";

function Info() {
  return (
    <div>
      <img src={me} alt="me" width="200px" className="info--img" />
      <h1 className="info--title">Laura Smith</h1>
      <p className="info--position">Frontend Developer</p>
      <p className="info--website">laurasmith.website</p>
      <div className="info--mailC">
        <img src={mail} alt="mail" />
        <p>Email</p>
      </div>
      <div className="info--linkedinC">
        <img src={linkedin} alt="linkedin" />
        <p>Linkedin</p>
      </div>
    </div>
  );
}

export default Info;
