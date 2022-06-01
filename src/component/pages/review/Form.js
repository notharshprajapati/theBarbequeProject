import React from "react";
import "./Form.css";
import Inputs from "./Inputs";

const Form = () => {
  return (
    <>
      <section class="about section bd-container" id="about">
        <div class="about__container bd-grid">
          <div class="about__data">
            <div class="footer__content">
              <h3 class="footer__title">Contact Details</h3>
              <ul>
                <li>Lima - Peru</li>
                <li>Jr Union #999</li>
                <li>999 - 888 - 777</li>
                <li>tastyfood@email.com</li>
              </ul>
            </div>
          </div>
          <div class="about__img">
            <Inputs class="about__img" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
