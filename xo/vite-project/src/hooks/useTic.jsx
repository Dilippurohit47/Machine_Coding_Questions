import React, { useEffect, useState } from "react";
const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard);

  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const WINNING_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    const winner = calculateWinner(board);
    if (winner === "x") setXScore((prev) => prev + 1);
    if (winner === "o") setOScore((prev) => prev + 1);
  }, [board]);

  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const [a, b, c] = WINNING_PATTERNS[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
  };

  const handleClick = (index) => { 
    const winner = calculateWinner(board); 
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isNext ? "x" : "o";
    setBoard(newBoard);
    setIsNext(!isNext);
  };
  const getStatusMessage = () => {
    const winner = calculateWinner(board);

    if (winner) return `Player ${winner} wins!`;
    if (!board.includes(null)) return "Its a draw!";
    return `Player ${isNext ? "X" : "O"}'s turn`;
  };
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsNext(true);
  };

  const resetScore =()=>{
    setOScore(0);
    setXScore(0);
    setBoard(Array(9).fill(null));
    setIsNext(true);
  }

  return {
    board,
    handleClick,
    calculateWinner,
    getStatusMessage,
    resetGame,
    xScore,
    oScore,
    resetScore
  };
};

export default useTicTacToe;
