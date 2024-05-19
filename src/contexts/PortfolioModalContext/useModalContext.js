import { useContext } from "react";
import { Context } from "./ModalProvider";

function useModalContext() {
  const values = useContext(Context);
  if (!values) throw new Error("use inside menu context");
  return values;
}

export default useModalContext;
