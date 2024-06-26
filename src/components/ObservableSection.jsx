import { useEffect, useRef, useContext } from "react";
import { useInView } from "framer-motion";
import { SidebarContext } from "../store/sidebar-context";

export default function ObservableSection({ children, id }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const sidebarContext = useContext(SidebarContext);

  useEffect(() => {
    if (isInView) {
      sidebarContext.setIntersecting(id, true);
    } else {
      sidebarContext.setIntersecting(id, false);
    }
  }, [isInView]);

  return (
    <section className="p-4" id={id}>
      <div ref={containerRef}>{children}</div>
    </section>
  );
}
