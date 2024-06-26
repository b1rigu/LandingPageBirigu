import { useContext } from "react";
import { SidebarContext } from "../store/sidebar-context";

export default function Sidebar() {
  const sidebarContext = useContext(SidebarContext);

  return (
    <aside>
      <div className="aside-item">
        <div className="aside-item-name">
          <h1>B.</h1>
        </div>
      </div>
      {Object.keys(sidebarContext.items).map((key) => {
        const item = sidebarContext.items[key];
        let classes = "aside-item";

        if (item.intersecting) {
          classes += " aside-item-active";
        }

        return (
          <a className={classes} href={`#${key}`}>
            <p>{item.title}</p>
          </a>
        );
      })}
    </aside>
  );
}
