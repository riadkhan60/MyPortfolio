import { useState } from "react";

const useFormSubmit = (reset) => {
  const [state, setState] = useState("idle"); // idle | submitting | success | error

  const postForm = async (data) => {
    setState("submitting");

    try {
      const res = await fetch("https://formsubmit.co/annakhn50@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _captcha: false,
        }),
      });

      if (res.ok) {
        setState("success");
        reset();
      } else {
        setState("error");
      }
    } catch (err) {
      console.error(err);
      setState("error");
    }
  };

  return { state, postForm };
};

export default useFormSubmit;
