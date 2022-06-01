import React from "react";
import "./Form.css";
import Inputs from "./Inputs";

const Form = () => {
  return (
    <>
      <section class="contact section" id="contact">
        <div class="contact__container container grid">
          <Inputs />

          <div class="footer__content">
            <h3 class="footer__title">Address</h3>
            <ul>
              <li>Lima - Peru</li>
              <li>Jr Union #999</li>
              <li>999 - 888 - 777</li>
              <li>tastyfood@email.com</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
