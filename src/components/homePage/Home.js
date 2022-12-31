export const Home = () => {
  return (
    <body>
      <div className="wrapper">
        {/* end loader */}
        <div className="sidebar">
          {/* Sidebar */}
          <nav id="sidebar">
            <div id="dismiss">
              <i className="fa fa-arrow-left" />
            </div>
            <ul className="list-unstyled components">
              <li className="active">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#game">Game</a>
              </li>
              <li>
                <a href="#customer">Our customer</a>
              </li>
              <li>
                <a href="#contact">Conatct</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="content">
          {/* header */}
          <header>
            {/* header inner */}
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
                            <a href="/">Login</a>
                          </li>
                          <li>
                            <button type="button" id="sidebarCollapse">
                              <img src="images/menu_icon.png" alt="#" />
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* end header inner */} {/* end header */}
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
          {/* Categories */} {/* casino */}
          <div id="game" className="casino">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="titlepage">
                    <h2>Our Casino Games</h2>
                    <span />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 padding_bottom">
                  <div className="game_box">
                    <figure>
                      <img src="images/game1.jpg" alt="#" />
                    </figure>
                  </div>
                  <div className="game">
                    <h3>Game 1</h3>
                  </div>
                </div>
                <div className="col-md-4 padding_bottom">
                  <div className="game_box">
                    <figure>
                      <img src="images/game2.jpg" alt="#" />
                    </figure>
                  </div>
                  <div className="game">
                    <h3>Game 2</h3>
                  </div>
                </div>
                <div className="col-md-4 padding_bottom">
                  <div className="game_box">
                    <figure>
                      <img src="images/game3.jpg" alt="#" />
                    </figure>
                  </div>
                  <div className="game">
                    <h3>Game 3</h3>
                  </div>
                </div>
                <div className="col-md-4 margin_bottom1">
                  <div className="game_box">
                    <figure>
                      <img src="images/game4.jpg" alt="#" />
                    </figure>
                  </div>
                  <div className="game">
                    <h3>Game 4</h3>
                  </div>
                </div>
                <div className="col-md-4 margin_bottom1">
                  <div className="game_box">
                    <figure>
                      <img src="images/game5.jpg" alt="#" />
                    </figure>
                  </div>
                  <div className="game">
                    <h3>Game 5</h3>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="game_box">
                    <figure>
                      <img src="images/game6.jpg" alt="#" />
                    </figure>
                  </div>
                  <div className="game">
                    <h3>Game 6</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end casino */} {/* licens */}
          <div className="licens">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="titlepage">
                    <h2>Licensing &amp; Reglation</h2>
                    <span />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div
                    id="licens"
                    className="carousel slide licens_Carousel "
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-target="#licens"
                        data-slide-to="{0}"
                        className="active"
                      />
                      <li data-target="#licens" data-slide-to="{1}" />
                      <li data-target="#licens" data-slide-to="{2}" />
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="container">
                          <div className="carousel-caption ">
                            <div className="row d_flex">
                              <div className="col-md-6">
                                <div className="test_box">
                                  <div className="jons">
                                    <h4>Promotins</h4>
                                  </div>
                                  <p>
                                    There are many variations of passages of
                                    Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by
                                    injected humour, or randomised words which
                                    don't look even slightly believable.
                                  </p>
                                  <a className="read_more" href="/">
                                    Play Online
                                  </a>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="test_box">
                                  <div className="jons">
                                    <figure>
                                      <img src="images/jons_img1.png" alt="#" />
                                    </figure>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="container">
                          <div className="carousel-caption">
                            <div className="row d_flex">
                              <div className="col-md-6">
                                <div className="test_box">
                                  <div className="jons">
                                    <h4>Promotins</h4>
                                  </div>
                                  <p>
                                    There are many variations of passages of
                                    Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by
                                    injected humour, or randomised words which
                                    don't look even slightly believable.
                                  </p>
                                  <a className="read_more" href="/">
                                    Play Online
                                  </a>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="test_box">
                                  <div className="jons">
                                    <figure>
                                      <img src="images/jons_img1.png" alt="#" />
                                    </figure>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="container">
                          <div className="carousel-caption">
                            <div className="row d_flex">
                              <div className="col-md-6">
                                <div className="test_box">
                                  <div className="jons">
                                    <h4>Promotins</h4>
                                  </div>
                                  <p>
                                    There are many variations of passages of
                                    Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by
                                    injected humour, or randomised words which
                                    don't look even slightly believable.
                                  </p>
                                  <a className="read_more" href="/">
                                    Play Online
                                  </a>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="test_box">
                                  <div className="jons">
                                    <figure>
                                      <img src="images/jons_img1.png" alt="#" />
                                    </figure>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#licens"
                      role="button"
                      data-slide="prev"
                    >
                      <i className="fa fa-long-arrow-left" aria-hidden="true" />
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#licens"
                      role="button"
                      data-slide="next"
                    >
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                  <p className="lorem">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.There are many variations of
                    passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injected humour, or
                    randomised words which don't look even slightly believable.
                  </p>
                </div>
                <div id="about" className="col-md-12">
                  <ul className="spinit">
                    <li>
                      <a href="/">About spinit</a>
                    </li>
                    <li>
                      <a href="/">our promotions</a>
                    </li>
                    <li>
                      <a href="/">over 1000games</a>
                    </li>
                    <li>
                      <a href="/">our mobile app</a>
                    </li>
                  </ul>
                  <div className="two_box">
                    <div className="row d_flex">
                      <div className="col-md-4">
                        <div className="many_box_img">
                          <figure>
                            <img src="images/imag.jpg" alt="#" />
                          </figure>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="many_box">
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly
                            believable.There are many variati
                            <br />
                            ons of passages of Lorem Ipsum available, but the
                            majority have suffered alteration in some form, by
                            injected humour, or randomised words which don't
                            look even slightly believable.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end lLicens */} {/* customer */}
          <div id="customer" className="customer">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="titlepage">
                    <h2>What Says Our customer</h2>
                    <span />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  <div className="customer_text">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.There are many
                      variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some form, by
                      injected humour, or randomised words which don't look even
                      slightly believable.
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
          {/* end customer */} {/* reqeste */}
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
          {/* end reqeste */} {/* footer */}
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
          {/* end footer */}
        </div>
        <div className="overlay" />
        {/* sidebar */}
      </div>
    </body>
  );
};
