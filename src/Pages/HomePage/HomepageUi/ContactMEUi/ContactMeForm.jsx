import ContactMeInput from "./ContactMeInput";
import { useForm } from "react-hook-form";
import ContactMeTextArea from "./ContactMeTextArea";
import { useState } from "react";
import ContactMeItems from "./ContactMeItems";

function ContactMeForm() {
  const [submited, setSubmited] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();


  const onSubmit = (data, e) => {
    console.log(data);
    console.log(e)
    setSubmited(true);
    setTimeout(() => {
      setSubmited(false);
      reset();
    }, 1000);
  };
  return (
    <div>
      {submited && (
        <div className="mb-6 break-words  text-lg font-medium text-[#009140]">
          Your message has been received, we will contact you soon.
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-10 flex  items-center justify-between gap-10 max-md:flex-col md:flex ">
          <ContactMeInput
            type="text"
            label="Name"
            inputName="name"
            required={true}
            register={register}
          />
          <ContactMeInput
            type="email"
            label="Email"
            inputName="email"
            required={true}
            register={register}
          />
        </div>
        <div className="mb-10">
          <ContactMeInput
            type="phone"
            label="Phone"
            inputName="phone"
            required={true}
            register={register}
          />
        </div>
        <div className="">
          <ContactMeTextArea
            type="text"
            label="Message"
            inputName="message"
            required={true}
            register={register}
          />
        </div>
        <div className="mt-[120px] flex w-full items-center justify-center border-2 border-[#ffffff33] p-[30px] text-[#ddd]">
          <button className="text-[18px] w-full h-full font-bold uppercase" type="submit">
            Send Message
          </button>
        </div>
      </form>

      <ContactMeItems/>
    </div>
  );
}

export default ContactMeForm;
