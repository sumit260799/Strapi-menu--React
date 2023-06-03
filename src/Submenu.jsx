import React from "react";
import { useGlobalContext } from "./context";
import sublinks from "./data";
function Submenu() {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);

  return (
    <div
      className={currentPage ? "submenu show-submenu" : "submenu"}
      onMouseLeave={() => setPageId("")}
    >
      <div className="submenulayout">
        <h5>{currentPage?.page}</h5>
        <div
          className="submenu-links"
          style={{
            gridTemplateColumns:
              currentPage?.links?.length > 2 ? "1fr 1fr" : "1fr",
          }}
        >
          {currentPage?.links?.map((link) => {
            const { id, url, label, icon } = link;
            return (
              <a key={id} href="url">
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Submenu;
