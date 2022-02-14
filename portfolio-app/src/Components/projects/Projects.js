import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <div>
      <div id="projecto" className="projects">
        <h1 className="my-projects">My Projects</h1>
        <div className="multiple-containers">
          <a href="https://tekjerry.github.io/Just-Add-Salt/">
            <div className="project-container">
              <div className="project1-image">
                <p>Just Add Salt</p>
              </div>
              <div className="project-details">
                <article>
                  This was my first project I created. It is a recipe website,
                  where users can search for different recipes using just a
                  single keyword for example "chicken" and it would list recipes
                  that include chicken in them. This is done of course by making
                  request to a public API and displaying that information on my
                  page.
                </article>
                <article>
                  In this project I used Javascript, Axios, HTML, and, Css.
                </article>
              </div>
            </div>
          </a>
          <a href="https://61b12abb3683380007b10146--musing-joliot-2fa60f.netlify.app/">
            <div className="project-container">
              <div className="project2-image">
                <p>The Anglers Guide</p>
              </div>
              <div className="project-details">
                <article>
                  My second project was made so anglers are able to share their
                  catches with the world! I believe there is not really a
                  platform for anglers, to share knowledge besides forums.
                  However with this page your able to make POST, GET, and DELETE
                  request to an API that was made using airtable.
                </article>
                <article>
                  In this project I used Javascript, Axios, HTML, and, Css.
                </article>
              </div>
            </div>
          </a>
          <a href="https://frntr.netlify.app/">
            <div className="project-container">
              <div className="project3-image">
                <p>Frntr</p>
              </div>
              <div className="project-details">
                <article>
                  My third project is a full-stack team project, where my team
                  and I create the backend using Javascript and
                  mongodb,mongoose, and express.js. This project is a shopping
                  page, where you can add items to your cart, post new items to
                  the database, delete and edit existing items as well.
                </article>
                <article>
                  In this project I used Javascript, Axios, HTML, Css, Mongodb,
                  Mongoose, Express.js
                </article>
              </div>
            </div>
          </a>
          <a href="https://cocky-noether-81384f.netlify.app">
            <div className="project-container">
              <div className="project4-image">
                <p>The Super Universe</p>
              </div>
              <div className="project-details">
                <article>
                  My fourth project is another full stack project but this time
                  it was a solo project and used python and django for the
                  backend. The user can search up heroes or villains in our
                  database and see their facts, edit the facts, delete the
                  character from the database, or create a whole new character
                  of their own from scratch. Project also contains full authentication.
                </article>{" "}
                <article>
                  In this project I used Javascript, Axios, HTML, Css, Python,
                  and Django
                </article>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
