import { createContext, useState } from "react";
import sidebarItems from "../sidebar-items";

export const SidebarContext = createContext({
  items: sidebarItems,
  setIntersecting: (id, intersecting) => {},
});

export default function SidebarContextProvider({ children }) {
  const [sidebarItemList, setSidebarItemList] = useState(sidebarItems);

  function setIntersecting(id, intersecting) {
    setSidebarItemList((prevState) => {
      return { ...prevState, [id]: { ...prevState[id], intersecting: intersecting } };
    });
  }

  const ctxValue = {
    items: sidebarItemList,
    setIntersecting: setIntersecting,
  };

  return <SidebarContext.Provider value={ctxValue}>{children}</SidebarContext.Provider>;
}
