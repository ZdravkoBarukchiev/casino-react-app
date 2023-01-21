import { Footer } from "../Footer/Footer";
import { Navigation } from "../Navigation/Navigation";

export const Home = () => {
  return (
    <div className="wrapper">
      <div id="content">
        {<Navigation />}
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
      <Footer />
      <div className="overlay" />
    </div>
  );
};
