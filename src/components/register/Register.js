import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/loginContext";
import { Navigation } from "../navigation/Navigation";
export const Register = () => {
  const navigate = useNavigate();
  const { userLogin } = useContext(LoginContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");
    const url = "http://localhost:3030/users/register";
    if (password !== confirmPassword) {
      return;
    }
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((result) => {
        userLogin(result);
        navigate("/");
      });
  };
  return (
    <>
      <Navigation />
      <div id="contact" className="reqeste">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Register</h2>
                <span />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form id="cochang" className="form_main" onSubmit={onSubmit}>
                <div className="row">
                  <div className="col-md-12">
                    <input
                      className="form_control"
                      placeholder="Email"
                      type="text"
                      name="email"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="form_control"
                      placeholder="Password"
                      type="text"
                      name="password"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="form_control"
                      placeholder="Confirm Password"
                      type="text"
                      name="confirm-password"
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
    </>
  );
};
