import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/loginContext";

export const Games = () => {
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
                        <li className="menu_iconb">
                          <Link to="/logout">Logout</Link>
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
    </div>
  );
};
