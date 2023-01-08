import { Navigation } from "../navigation/Navigation";
import { Footer } from "../footer/Footer";
import { Game } from "./game/Game";

export const Games = () => {
  const allGames = [
    { name: "Game 1", image: "images/game1.jpg", id: 1 },
    { name: "Game 2", image: "images/game2.jpg", id: 2 },
    { name: "Game 3", image: "images/game3.jpg", id: 3 },
    { name: "Game 4", image: "images/game4.jpg", id: 4 },
    { name: "Game 5", image: "images/game5.jpg", id: 5 },
    { name: "Game 6", image: "images/game6.jpg", id: 6 },
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
              <Game key={g.id} name={g.name} image={g.image} />
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
