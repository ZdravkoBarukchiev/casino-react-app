export const Home = () => {
  return (
    <div className="wrapper">
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
      </div>
      <div className="overlay" />
      {/* sidebar */}
    </div>
  );
};
