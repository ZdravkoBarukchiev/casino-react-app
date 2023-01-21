import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/loginContext";
import { Navigation } from "../Navigation/Navigation";
import { Footer } from "../Footer/Footer";

export const Login = () => {
  const { userLogin } = useContext(LoginContext);
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = Object.fromEntries(new FormData(e.target));

    const url = "http://localhost:3030/users/login";
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
                <h2>Login</h2>
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
                    <button className="send_btn">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay" />
      <Footer />
      <div className="overlay" />
    </>
  );
};
