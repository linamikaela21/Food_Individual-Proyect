import style from "./index.module.css";
import Express from "../../Images/Express.jpg";
import PostgreSQL from "../../Images/PostgreSQL.jpg";
import React from "../../Images/React.jpg";
import Redux from "../../Images/Redux.jpg";
import Sequelize from "../../Images/Sequelize.jpg";

export default function Footer() {
  return (
    <div className={style.footerContainer}>
      <div className={style.footerElements}>
        <span className={style.span}>
          {" "}
          <strong>POWERED BY:</strong>
        </span>
        <img
          src={Express}
          className={style.footerIcon}
          title="Express"
          alt="No encontrada / Not found"
        />
        <img
          src={PostgreSQL}
          className={style.footerIcon}
          title="PostgreSQL"
          alt="No encontrada / Not found"
        />
        <img
          src={React}
          className={style.footerIcon}
          title="React"
          alt="No encontrada / Not found"
        />
        <img
          src={Redux}
          className={style.footerIcon}
          title="Redux"
          alt="No encontrada / Not found"
        />
        <img
          src={Sequelize}
          className={style.footerIcon}
          title="Sequelize"
          alt="No encontrada / Not found"
        />
      </div>
    </div>
  );
}
