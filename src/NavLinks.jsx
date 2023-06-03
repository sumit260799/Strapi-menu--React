import React, { useState } from "react";
import sublinks from "./data";
import { useGlobalContext } from "./context";

function NavLinks() {
  const { setPageId } = useGlobalContext();
  return (
    <div className="navlinks">
      {sublinks.map((item) => {
        const { page, pageId } = item;
        return (
          <p
            className="navbutton"
            key={pageId}
            onMouseEnter={(e) => setPageId(pageId)}
          >
            {page}
          </p>
        );
      })}
    </div>
  );
}

export default NavLinks;
