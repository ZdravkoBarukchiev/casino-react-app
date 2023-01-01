export const Home = () => {
  return (
    <div className="wrapper">
      <div id="content">
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
                          <a href="/">Home</a>
                        </li>
                        <li className="menu_iconb">
                          <a href="/">About</a>
                        </li>
                        <li className="menu_iconb">
                          <a href="/">Games</a>
                        </li>
                        <li className="menu_iconb">
                          <a href="/">Contact</a>
                        </li>
                        <li className="menu_iconb">
                          <a href="/">Login</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="slider_section">
          <div className="banner_main">
            <img src="images/bg_main.jpg" alt="#" />
            <div className="container-fluid padding3">
              <div className="row">
                <div className="col-md-12">
                  <div className="text-bg">
                    <a href="/">Play now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="overlay" />
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
