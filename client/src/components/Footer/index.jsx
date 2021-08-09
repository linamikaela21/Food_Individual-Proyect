
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
        <span className={style.span}>POWERED BY:</span>
        <img
          src={Express}
          className={style.footerIcon}
          alt="No encontrada / Not found"
          width="100px"
          height="100px"
        />
        <img
          src={PostgreSQL}
          className={style.footerIcon}
          alt="No encontrada / Not found"
          width="100px"
          height="100px"
        />
        <img
          src={React}
          className={style.footerIcon}
          width="100px"
          height="100px"
          alt="No encontrada / Not found"
        />
        <img
          src={Redux}
          className={style.footerIcon}
          alt="No encontrada / Not found"
          width="100px"
          height="100px"
        />
        <img
          src={Sequelize}
          className={style.footerIcon}
          alt="No encontrada / Not found"
          width="100px"
          height="100px"
        />
      </div>
    </div>
  );
}
