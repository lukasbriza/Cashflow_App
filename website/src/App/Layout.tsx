import { Outlet } from "react-router-dom";
import { Menu } from "../Components/Menu";

function Layout() {
  return (
    <div className="page">
      <Menu />
      <Outlet />
    </div>
  );
}

export { Layout };
