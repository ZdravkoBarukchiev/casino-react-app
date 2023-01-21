import { Navigation } from "../Navigation/Navigation";
import { Footer } from "../Footer/Footer";
import { Game } from "./Game/Game";
import { useState, useEffect } from "react";

export const Games = () => {
  const [games, setGame] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3030/data/games")
      .then((res) => res.json())
      .then((result) => setGame(result));
  }, []);
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
            {games.map((g) => (
              <Game key={g._id} name={g.title} image={g.imageUrl} />
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
