import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/loginContext";
import { Navigation } from "../Navigation/Navigation";
import { Footer } from "../Footer/Footer";
import { loginService } from "../../services/loginService";
export const Register = () => {
  const navigate = useNavigate();
  const { userLogin } = useContext(LoginContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");
    if (password !== confirmPassword) {
      return;
    }
    loginService("/register", email, password).then((result) => {
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
      <div className="overlay" />
      <Footer />
      <div className="overlay" />
    </>
  );
};
