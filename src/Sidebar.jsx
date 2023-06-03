import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import sublinks from "./data";
function Sidebar() {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();

  return (
    <div className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div>
          {sublinks.map((item) => {
            const { links, page, pageId } = item;
            return (
              <article className="sidebarItem" key={pageId}>
                <h4>{page}</h4>
                <div className="sidebarLinks">
                  {links.map((link) => {
                    const { id, label, icon, url } = link;
                    return (
                      <a key={id} href={url}>
                        {icon}
                        <span className="linkgap">{label}</span>
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
