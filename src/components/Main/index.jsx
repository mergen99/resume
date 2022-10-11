import React from "react";
import "./main.scss";
import { ReactComponent as LogoBat } from "../../assets/bat.svg";
import { ReactComponent as Margo } from "../../assets/margo.svg";
import { ReactComponent as Cherva } from "../../assets/cherva.svg";
import { ReactComponent as Trepha } from "../../assets/trepha.svg";
import { ReactComponent as Bubi } from "../../assets/bubi.svg";
import { ReactComponent as Piki } from "../../assets/piki.svg";
import ExampleDoc from "D:/Downloads/TyuteevM.pdf";
const Main = ({activeModal,setActiveModal}) => {


  return (
    <>
      <div className="main">
        <h1 className="main____welcome">Добро пожаловать</h1>
        <h3 className="main____myself">
          Здесь собрана коллекция моих работ и немного о себе
        </h3>
      </div>
      <div className="myself">
        <div className="myself____logo">
          <LogoBat
            width="5rem"
            height="5rem"
            className="myself____logo___icon"
          />
        </div>
        <div className="myself____aboutme">
          <h2>
            Меня зовут Мерген Тютеев и я начинающий фронтенд разработчик.
            <br />
            Закончил бакалавриат ВШЭ и учусь в магистратуре там же.
            <br />
            На данный момент я работаю консультаном в компании, которая <br />
            входит в большую четверку.Хочу развиваться в программировании.
          </h2>
        </div>
        <div className="myself____links">
          <button
            className="myself____links___contact"
            onClick={() => setActiveModal(true)}
          >
            Связаться со мной
          </button>
          <button className="myself____links___download">
            <a href={ExampleDoc} download>
              Скачать резюме
            </a>
          </button>
        </div>
      </div>
      <div className="simpletext">
        <Margo width="4rem" height="4rem" />
        <h2>Ниже представлены работы, которые я делал</h2>
      </div>
      <div className="mysites">
        <table cellspacing="25">
          <tr className="mysites____languages">
            <th className="mysites____languages___lang">JS</th>
            <th className="mysites____languages___lang">HTML+CSS</th>
            <th className="mysites____languages___lang">React(JS+HTML+CSS)</th>
            <th className="mysites____languages___lang">
              React(Typescript+HTML+CSS)
            </th>
          </tr>
          <tr>
            <td>
              <a href="">Time now</a>
            </td>
            <td></td>
            <td>
              <a href="">Todo list</a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>
              <a href="">HotSkins</a>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Main;
