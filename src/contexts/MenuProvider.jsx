import { createContext, useState } from "react"

export const Context = createContext();



function MenuProvider({ children }) {
  const [openMenu, setOpenMenu] = useState(false);

  function onCloseMenu() {
    setOpenMenu(false);
  }

  function onOpenMenu() {
    setOpenMenu(true);
  }

  return (
    <Context.Provider value={{openMenu, onCloseMenu, onOpenMenu}}>
      {children}
    </Context.Provider>
  )
}

export default MenuProvider
