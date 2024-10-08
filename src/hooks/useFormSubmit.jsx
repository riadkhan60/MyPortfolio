import axios from "axios";
import {  useState } from "react";

function useFormSubmit(reset) {
  const [state, setState] = useState("idle");

  async function postForm(data) {
    try {
      setState("submitting");
      await axios.post("http://localhost:3000/contact", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      setState("success");

      setTimeout(() => {
        setState("idle");
        reset();
      }, 1000);
    } catch (error) {
      setState("error");
    }
  }

  return { state, setState, postForm };
}

export default useFormSubmit;
