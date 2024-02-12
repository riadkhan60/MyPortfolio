import { createContext, useState } from "react"

export const Context = createContext();



function MenuProvider({ children }) {
  const [openMenu, setOpenMenu] = useState(false);

  function onCloseMenu() {
    setOpenMenu('close');
  }

  function onOpenMenu() {
    setOpenMenu('open');
  }

  return (
    <Context.Provider value={{openMenu, onCloseMenu, onOpenMenu}}>
      {children}
    </Context.Provider>
  )
}

export default MenuProvider
