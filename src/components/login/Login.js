import { Link } from "react-router-dom";
export const Login = () => {
  return (
    <div>
      <header>
        <div className="head_top">
          <div className="header">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3 logo_section">
                  <div className="full">
                    <div className="center-desk">
                      <div className="logo">
                        <a href="index.html">
                          <img src="images/logo.png" alt="#" />
                        </a>
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
      <div id="contact" className="reqeste">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Login</h2>
                <span />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form id="cochang" className="form_main">
                <div className="row">
                  <div className="col-md-12">
                    <input
                      className="form_control"
                      placeholder="Username"
                      type="text"
                      name="Username"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="form_control"
                      placeholder="Password"
                      type="text"
                      name="Password"
                    />
                  </div>
                  <div className="col-md-12">
                    <button className="send_btn">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
