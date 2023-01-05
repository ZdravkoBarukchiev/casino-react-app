import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/loginContext";
export const Promotins = () => {
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
      <div className="licens">
        <div className="container">
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
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable.
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
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable.
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
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable.
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
                  <i className="fa fa-long-arrow-right" aria-hidden="true" />
                </a>
              </div>
              <p className="lorem">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.There are many variations of passages of
                Lorem Ipsum available, but the majority have suffered alteration
                in some form, by injected humour, or randomised words which
                don't look even slightly believable.
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
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable.There are many
                        variati
                        <br />
                        ons of passages of Lorem Ipsum available, but the
                        majority have suffered alteration in some form, by
                        injected humour, or randomised words which don't look
                        even slightly believable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
