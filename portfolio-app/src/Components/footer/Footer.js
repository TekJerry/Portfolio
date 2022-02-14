import React from "react";
import "./Footer.css"

export default function Footer() {
  return (
    <div className="footer-main">
        <h1>Skills</h1>
        <div className="two-tier">
      <div className="box">
        <div className="sub-list">Languages</div>
        <div>
          <div className="list-language">
            <img src="https://i.imgur.com/qFRIv1c.png" />
            <h4>Javascript</h4>
          </div>
          <div className="list-language">
            <img src="https://i.imgur.com/xpjaHmb.png" />
            <h4>Python</h4>
          </div>
          <div className="list-language">
            <img src="https://i.imgur.com/Fwv5B6R.png" />
            <h4>HTML5</h4>
          </div>
          <div className="list-language">
            <img src="https://i.imgur.com/Hi8JEBy.png" />
            <h4>CSS3</h4>
          </div>
          <div className="list-language">
            <img src="https://i.imgur.com/hr6aRHU.png" />
            <h4>Postgres</h4>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="sub-list">FrameWorks</div>
        <div>
          <div className="list-language">
            <img src="https://i.imgur.com/SyKozAL.png" />
            <h4>Django</h4>
          </div>
          <div className="list-language">
            <img src="https://i.imgur.com/ZG37vCi.png" />
            <h4>Express</h4>
          </div>
          <div className="list-language">
            <img src="https://i.imgur.com/Rl47UsS.png" />
            <h4>Node.js</h4>
          </div>
          <div className="list-language">
            <img src="https://i.imgur.com/cTEnYYV.png" />
            <h4>Flask</h4>
          </div>
          <div className="list-language">
            <img src="https://i.imgur.com/0Yg8PDj.png" />
            <h4>React</h4>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
