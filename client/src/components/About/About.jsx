import React from "react";
import { Link } from "react-router-dom";
import style from "./index.module.css";
import github from "../../Images/github.jpg";
import linkedin from "../../Images/linkedin.jpg";
import gmail from "../../Images/gmail.jpg";

export default function About() {
  return (
    <div className={style.bigContent}>
      <div className={style.content}>


        <h1 className={style.title}>THANK YOU FOR VISITING <br /> "FOOD PROYECT"</h1>
        <h1 className={style.title}>MUCHAS GRACIAS POR INGRESAR AL <br /> "PROYECTO FOOD"</h1>
        <div className={style.about}>
          <p>
            This app is a individual proyect made in the bootCamp
            <a
              href="https://www.soyhenry.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Soy Henry{" "}
            </a>
            , this one of two projects required.
          </p>
          <p>
            Esta aplicación es un proyecto individual que fue creado durante mi
            bootCamp en
            <a
              href="https://www.soyhenry.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Soy Henry{" "}
            </a>
            , siendo uno de los 2 proyectos requeridos.
          </p>
          <br />
          <div className={style.ulLi}>
            <p>
              The technologies used here: <br /> Las tecnologías utilizadas aqui
              son:
            </p>
            <ul>
              <li>
                <strong>Data Base | Base de datos:</strong>{" "}
                <a
                  href="https://www.postgresql.org/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  PostgreSQL{" "}
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <strong>BackEnd:</strong>
                <a
                  href="https://sequelize.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Sequelize{" "}
                </a>
                y{" "}
                <a
                  href="https://expressjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Express{" "}
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <strong>FrontEnd:</strong>{" "}
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  React{" "}
                </a>
                y
                <a
                  href="https://redux.js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Redux{" "}
                </a>
                entre otras librerias como
                <a
                  href="https://axios-http.com/docs/intro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Axios
                </a>
              </li>
            </ul>
            <p>
              There are no design libraries | No se ha utilizado apoyo de alguna
              libreria en la parte de diseño
            </p>
          </div>
          <br />
          <p>
            This app uses{" "}
            <a
              href="https://spoonacular.com/food-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spoonacular API
            </a>{" "}
            to get different types of recipes, I get 100 first recipes and push
            into the database to work with my own API.
          </p>
          <p>
            Esta aplicación se sirve de la API{" "}
            <a
              href="https://spoonacular.com/food-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spoonacular API
            </a>{" "}
            para obtener distintos tipos de recetas, captar las primeras 100
            para trabajarlos y requerirlos desde una API propia.
          </p>

          <br />
          <h2>CONTACT | CONTACTO</h2>
          <div className={style.contact}>
            <div className={style.contact_item}>
              <img
                src={linkedin}
                alt="Not found"
                className={style.contact_item_img}
              />
              <a
                href="https://www.linkedin.com/in/lina-mikaela-gutierrez-arribas"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div className={style.contact_item}>
              <img
                src={github}
                alt="Not found"
                className={style.contact_item_img}
              />
              <a
                href="https://github.com/linamikaela21"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
            <div className={style.contact_item}>
              <img
                src={gmail}
                alt="Not found"
                className={style.contact_item_img}
              />
              <a
                href="mailto:mikaelagutierrezarribas@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                E-mail
              </a>
            </div>
          </div>
        </div>
        <Link to="/recipes">
          <button className={style.buttonVolver}>Volver | Go back</button>
        </Link>
      </div>
    </div>
  );
}
