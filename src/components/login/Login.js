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
                      placeholder="Email"
                      type="text"
                      name="Email"
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
      <footer>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
                <div className="address">
                  <h3>Subscribe Now</h3>
                  <form className="newtetter">
                    <button className="submit">submit</button>
                    <input
                      className="tetter"
                      placeholder="Enter your email"
                      type="text"
                      name="Enter your email"
                    />
                  </form>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="address">
                      <h3>Links</h3>
                      <ul className="Menu_footer">
                        <li className="active">
                          {" "}
                          <Link to="/">Home</Link>{" "}
                        </li>
                        <li>
                          <Link to="/promotins">Promotins</Link>{" "}
                        </li>
                        <li>
                          <Link to="/games">Games</Link>{" "}
                        </li>
                        <li>
                          <Link to="/customers">Customers</Link>{" "}
                        </li>
                        <li>
                          <Link to="/licens">Licens</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="address">
                      <h3>Contact us</h3>
                      <ul className="Links_footer">
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <p>
                Copyright 2019 All Right Reserved By{" "}
                <a href="https://html.design/">Free html Templates</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="overlay" />
    </div>
  );
};
