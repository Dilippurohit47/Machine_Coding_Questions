import "../App.css";
import useTicTacToe from "../hooks/useTic";

const TicTac = () => {
  const {
    board,
    resetGame,
    getStatusMessage,
    handleClick,
    xScore,
    oScore,
    resetScore,
  } = useTicTacToe();

  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()}
        <button className="reset_button" onClick={resetGame}>
          Play Again
        </button>
        <button className="btn-class-name" onClick={resetScore}>
          <span className="back"></span>
          <span className="front"></span>
        </button>
      </div>

      <div className="board">
        {board.map((b, i) => {
          return (
            <button
              className="cell"
              key={i}
              onClick={() => handleClick(i)}
              disabled={b !== null}
            >
              {b}
            </button>
          );
        })}
      </div>
      <div className="score">
        <h1 className="xscore">Player X : {xScore}</h1>
        <h1>Player O : {oScore} </h1>
      </div>
    </div>
  );
};

export default TicTac;
