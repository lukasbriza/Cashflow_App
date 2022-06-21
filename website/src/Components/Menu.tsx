import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="menu">
      <section className="buttonSection">
        <Link className="menuItem" to={"/app/home"}>
          Home
        </Link>
        <Link className="menuItem" to={"/app/statistics"}>
          Statistics
        </Link>
      </section>
    </nav>
  );
};

export { Menu };
