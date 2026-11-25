import { useState } from "react";

// Contact form messages go to riad@qbexel.com through FormSubmit.
// Use FormSubmit's AJAX address: the plain address answers with a redirect to a web page, which
// fetch cannot read, so the form always showed an error.
// The first message to a new address makes FormSubmit email riad@qbexel.com an "Activate Form" link.
// Messages are delivered only after that link has been clicked once.
const FORM_ENDPOINT = "https://formsubmit.co/ajax/riad@qbexel.com";

const useFormSubmit = (reset) => {
  const [state, setState] = useState("idle"); // idle | submitting | success | error

  const postForm = async (data) => {
    setState("submitting");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: `New message from ${data.name} (riad.qbexel.com)`,
          _template: "table",
          _captcha: "false",
        }),
      });
      const result = await res.json().catch(() => ({}));

      if (res.ok && String(result.success) === "true") {
        setState("success");
        reset();
      } else {
        console.error("Form not sent:", result.message || res.status);
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
