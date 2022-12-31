export const Footer = () => {
  return (
    <div>
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
                          <a href="index.html">Home</a>{" "}
                        </li>
                        <li>
                          <a href="#about">About</a>{" "}
                        </li>
                        <li>
                          <a href="#game">Game</a>{" "}
                        </li>
                        <li>
                          <a href="#customer">customer</a>{" "}
                        </li>
                        <li>
                          <a href="#conatct">Conatct</a>
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
