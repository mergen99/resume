import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../Modal/modal.scss";
import { ReactComponent as Cross } from "../../assets/X.svg";

const Modal = ({ activeModal, setActiveModal }) => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_twxjsey",
        "template_2m7igob",
        e.target,
        "42aQZcXeKmJWf7dzK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className={activeModal === true ? "container" : "container hide"}>
      <div className="container___modal">
        <form onSubmit={sendEmail}>
          <div className="container___modal__wrapper">
            <div>
              <input type="text" name="to_name" placeholder="Имя" />
            </div>
            <div>
              <input type="email" name="from_name" placeholder="Email адрес" />
            </div>
            <div>
              <input type="text" name="to_subject" placeholder="Тема" />
            </div>
            <div>
              <textarea
                name="message"
                id=""
                cols="20"
                rows="8"
                placeholder="Ваше сообщение"
              ></textarea>
            </div>
            <div>
              <input
                type="submit"
                value="
              Отправить сообщение"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="container___cross">
        <Cross onClick={() => setActiveModal(false)} />
      </div>
    </div>
  );
};

export default Modal;
