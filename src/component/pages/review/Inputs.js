import React from "react";
import "./Inputs.css";
import Button from "../../UI/Button";

const Inputs = () => {
  return (
    <div class="contact__content">
      <form action="" class="contact__form">
        <div class="contact__form-div">
          <label for="" class="contact__form-tag">
            Names
          </label>
          <input type="text" class="contact__form-input" />
        </div>

        <div class="contact__form-div">
          <label for="" class="contact__form-tag">
            Mail
          </label>
          <input type="email" class="contact__form-input" />
        </div>

        <div class="contact__form-div contact__form-area">
          <label for="" class="contact__form-tag">
            Project
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            class="contact__form-input"
          ></textarea>
        </div>

        <Button text="Send" />
      </form>
    </div>
  );
};

export default Inputs;
