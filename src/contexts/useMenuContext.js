import { useContext } from "react";
import { Context } from "./MenuProvider";

function useMenuContext() {
  const values = useContext(Context);
  if (!values) throw new Error('use inside menu context');
  return values;
}

export default useMenuContext