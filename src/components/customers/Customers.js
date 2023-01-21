import { Navigation } from "../Navigation/Navigation";
import { Footer } from "../Footer/Footer";

export const Customers = () => {
  return (
    <>
      <Navigation />
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
      <div className="overlay" />
      <Footer />
      <div className="overlay" />
    </>
  );
};
