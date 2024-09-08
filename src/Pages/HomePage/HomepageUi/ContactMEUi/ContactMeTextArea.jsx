import { useState } from "react";
import style from "./ContactMeInput.module.css";

function ContactMeTextArea({ type, label, inputName, register, required }) {
  const [isValid, setIsValid] = useState(false);

  const handleBlur = (event) => {
    if (event.target.value) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="w-full">
      <div className={style.entryarea}>
        <textarea
          className={`${style.contactMeInput} ${isValid ? "is-valid leading-[1.2] h-[150px] pt-4" : " pt-4 leading-[1.2] h-[150px]"}`}
          type={type}
          {...register(inputName)}
          required={required}
          onBlur={handleBlur}
          data-gramm="false"
        />
        <label htmlFor="" className={style.labelline}>
          {label}
        </label>
      </div>
    </div>
  );
}

export default ContactMeTextArea;
