import React, { useEffect } from "react";

function creatPortalWrapper() {
  const element = document.createElement("div");
  element.id = "portal-warrper";
  return element;
}
const portalWrapper = creatPortalWrapper();
const Portal = () => {
  useEffect(() => {
    document.body.appendChild(portalWrapper);
  }, []);
  return <div></div>;
};

export default Portal;
