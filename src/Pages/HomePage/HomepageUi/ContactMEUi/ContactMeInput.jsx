import style from './ContactMeInput.module.css';
function ContactMeInput({ type, label, inputName, register, required }) {
  return (
    <div className='w-full'>
      <div className={style.entryarea}>
        <input className={style.contactMeInput} type={type} {...register(inputName)} required={required} />
        <label htmlFor="" className={style.labelline}>
         {label}
        </label>
      </div>
    </div>
  );
}

export default ContactMeInput;
