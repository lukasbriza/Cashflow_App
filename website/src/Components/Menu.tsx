import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="menu">
      <section className="buttonSection">

        <Link className="menuItem" to={"/app/home"}>
          <div></div>
          Home
        </Link>
        <Link className="menuItem" to={"/app/statistics"}>
          <div></div>
          Statistics
        </Link>
      </section>
    </nav>
  );
};

export { Menu };
