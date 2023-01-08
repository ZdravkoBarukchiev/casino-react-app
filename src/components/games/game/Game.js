export const Game = ({ name, image }) => {
  return (
    <div className="col-md-4 padding_bottom">
      <div className="game_box">
        <figure>
          <img src={image} alt="#" />
        </figure>
      </div>
      <div className="game">
        <h3>{name}</h3>
      </div>
    </div>
  );
};
