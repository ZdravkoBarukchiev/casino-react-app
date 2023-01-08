import { Navigation } from "../navigation/Navigation";
import { Footer } from "../footer/Footer";
import { Game } from "./game/Game";

export const Games = () => {
  const allGames = [
    { name: "Game 1", image: "images/game1.jpg" },
    { name: "Game 2", image: "images/game2.jpg" },
    { name: "Game 3", image: "images/game3.jpg" },
    { name: "Game 4", image: "images/game4.jpg" },
    { name: "Game 5", image: "images/game5.jpg" },
    { name: "Game 6", image: "images/game6.jpg" },
  ];
  return (
    <>
      <Navigation />
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
            {allGames.map((g) => (
              <Game name={g.name} image={g.image} />
            ))}
          </div>
        </div>
      </div>
      <div className="overlay" />
      <Footer />
      <div className="overlay" />
    </>
  );
};
