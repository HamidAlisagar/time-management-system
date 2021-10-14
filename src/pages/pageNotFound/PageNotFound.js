import React from "react";
import Styles from "./PageNotFound.module.css";
const PageNotFound = () => {
  return (
    <div className={Styles.PageNotFound}>
      <h2>OOPS!! Page Not Found</h2>
      <p>Error 404 Hurray!!</p>
    </div>
  );
};

export default PageNotFound;
