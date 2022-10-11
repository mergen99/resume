import React from "react";
import "../Header/header.scss";

import { ReactComponent as LogoSVG } from "../../assets/batman.svg";

const Header = ({ checked, setChecked }) => {
  const cls = ["LogoSVG"];
  if (checked) {
    cls.push("blue");
  }
  return (
    <header className="header">
      <div className="header___container">
        <div className="header___container__logo" >
          <LogoSVG
            width="6rem"
            height="6rem"
            className={checked ? "header___container__logo_name":"header___container__logo_name_jj"}
            
          />
        </div>
        <div className="header___container__checkboxes">
          <label className="header___container__checkboxes_lbl">
            <p>Цвет фона</p>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <span className="header___container__checkboxes_lbl_inp">
              <i className="header___container__checkboxes_lbl_inp_circle"></i>
            </span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
