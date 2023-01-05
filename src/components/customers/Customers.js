import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/loginContext";
export const Customers = () => {
  const { loginData } = useContext(LoginContext);
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
                {loginData._id ? (
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
                ) : (
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
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="customer" className="customer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>What Says Our customers</h2>
                <span />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="customer_text">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.There are many variations of passages
                  of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised
                  words which don't look even slightly believable.
                </p>
                <div className="customer_box">
                  <i>
                    <img src="images/customer.png" alt="#" />
                  </i>
                  <h4>Mark jo</h4>
                  <span>jected humour</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="reqeste">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Reqeste A call back</h2>
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
                      placeholder="Name"
                      type="text"
                      name="Name"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="form_control"
                      placeholder="Phone number"
                      type="text"
                      name="Phone number"
                    />
                  </div>
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
                      placeholder="Message"
                      type="text"
                      name="Message"
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
