import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/loginContext";

export const Navigation = () => {
  const { loginData } = useContext(LoginContext);
  if (loginData._id) {
    return (
      <header>
        <div className="head_top">
          <div className="header">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3 logo_section">
                  <div className="full">
                    <div className="center-desk">
                      <div className="logo">
                        <Link to="/">
                          <img src="images/logo.png" alt="#" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="right_header_info">
                    <ul>
                      <li className="menu_iconb">{loginData.email}</li>
                      <li className="menu_iconb">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="menu_iconb">
                        <Link to="/promotins">Promotins</Link>
                      </li>
                      <li className="menu_iconb">
                        <Link to="/games">Games</Link>
                      </li>
                      <li className="menu_iconb">
                        <Link to="/logout">Logout</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
  return (
    <header>
      <div className="head_top">
        <div className="header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 logo_section">
                <div className="full">
                  <div className="center-desk">
                    <div className="logo">
                      <Link to="/">
                        <img src="images/logo.png" alt="#" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="right_header_info">
                  <ul>
                    <li className="menu_iconb">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="menu_iconb">
                      <Link to="/promotins">Promotins</Link>
                    </li>
                    <li className="menu_iconb">
                      <Link to="/games">Games</Link>
                    </li>
                    <li className="menu_iconb">
                      <Link to="/register">Register</Link>
                    </li>
                    <li className="menu_iconb">
                      <Link to="/login">Login</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
