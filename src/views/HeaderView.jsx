import { Link, NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <div className="d-flex justify-content-between p-3 align-items-center">
      <Link
        to={"/home"}
        className="d-flex gap-3 align-items-center text-decoration-none "
      >
        <img className="logo " height={40} src="/logo.png" />
        <h3 className="text-light ">CRYPTO</h3>
      </Link>

      <nav className="d-flex gap-3 ">
        <NavLink className={"text-light text-decoration-none"} to={"/"}>
          Giriş Yap
        </NavLink>
        <NavLink className={"text-light text-decoration-none"} to={"/home"}>
          Anasayfa
        </NavLink>
      </nav>
    </div>
  );
};

export default HeaderView;
