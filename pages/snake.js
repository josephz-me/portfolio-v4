import React, { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';

const GRID_SIZE = 20;
const INITIAL_SPEED = 150;

export default function Snake() {
  const canvasRef = useRef(null);
  const [gameState, setGameState] = useState('idle');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const gameRef = useRef({
    snake: [{ x: 10, y: 10 }],
    direction: { x: 1, y: 0 },
    nextDirection: { x: 1, y: 0 },
    food: { x: 15, y: 10 },
    gridWidth: 0,
    gridHeight: 0,
  });

  const getGridDimensions = useCallback(() => {
    const width = Math.floor(window.innerWidth / GRID_SIZE);
    const height = Math.floor(window.innerHeight / GRID_SIZE);
    return { width, height };
  }, []);

  const generateFood = useCallback(() => {
    const { width, height } = getGridDimensions();
    const game = gameRef.current;
    let newFood;
    do {
      newFood = {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
      };
    } while (game.snake.some((seg) => seg.x === newFood.x && seg.y === newFood.y));
    return newFood;
  }, [getGridDimensions]);

  const resetGame = useCallback(() => {
    const { width, height } = getGridDimensions();
    gameRef.current = {
      snake: [{ x: Math.floor(width / 2), y: Math.floor(height / 2) }],
      direction: { x: 1, y: 0 },
      nextDirection: { x: 1, y: 0 },
      food: generateFood(),
      gridWidth: width,
      gridHeight: height,
    };
    setScore(0);
  }, [getGridDimensions, generateFood]);

  const startGame = useCallback(() => {
    resetGame();
    setGameState('playing');
  }, [resetGame]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const game = gameRef.current;

    ctx.fillStyle = '#111111';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#e9dd34';
    ctx.beginPath();
    ctx.arc(
      game.food.x * GRID_SIZE + GRID_SIZE / 2,
      game.food.y * GRID_SIZE + GRID_SIZE / 2,
      GRID_SIZE / 2 - 2,
      0,
      Math.PI * 2
    );
    ctx.fill();

    game.snake.forEach((segment, index) => {
      const isHead = index === 0;
      ctx.fillStyle = isHead ? '#ffffff' : 'rgba(255, 255, 255, 0.7)';
      ctx.fillRect(
        segment.x * GRID_SIZE + 1,
        segment.y * GRID_SIZE + 1,
        GRID_SIZE - 2,
        GRID_SIZE - 2
      );
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const { width, height } = getGridDimensions();
      gameRef.current.gridWidth = width;
      gameRef.current.gridHeight = height;
      draw();
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getGridDimensions, draw]);

  useEffect(() => {
    const stored = localStorage.getItem('snakeHighScore');
    if (stored) setHighScore(parseInt(stored, 10));
  }, []);

  useEffect(() => {
    if (gameState !== 'playing') return;

    const gameLoop = setInterval(() => {
      const game = gameRef.current;

      game.direction = game.nextDirection;

      const head = game.snake[0];
      const newHead = {
        x: head.x + game.direction.x,
        y: head.y + game.direction.y,
      };

      const { width, height } = getGridDimensions();
      if (newHead.x < 0 || newHead.x >= width || newHead.y < 0 || newHead.y >= height) {
        setGameState('gameover');
        if (score > highScore) {
          setHighScore(score);
          localStorage.setItem('snakeHighScore', score.toString());
        }
        return;
      }

      if (game.snake.some((seg) => seg.x === newHead.x && seg.y === newHead.y)) {
        setGameState('gameover');
        if (score > highScore) {
          setHighScore(score);
          localStorage.setItem('snakeHighScore', score.toString());
        }
        return;
      }

      game.snake.unshift(newHead);

      if (newHead.x === game.food.x && newHead.y === game.food.y) {
        setScore((s) => s + 1);
        game.food = generateFood();
      } else {
        game.snake.pop();
      }

      draw();
    }, INITIAL_SPEED);

    return () => clearInterval(gameLoop);
  }, [gameState, score, highScore, getGridDimensions, generateFood, draw]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (gameState === 'idle' || gameState === 'gameover') {
          startGame();
        }
        return;
      }

      if (gameState !== 'playing') return;

      const game = gameRef.current;
      const { direction } = game;

      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          e.preventDefault();
          if (direction.y !== 1) game.nextDirection = { x: 0, y: -1 };
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          e.preventDefault();
          if (direction.y !== -1) game.nextDirection = { x: 0, y: 1 };
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          e.preventDefault();
          if (direction.x !== 1) game.nextDirection = { x: -1, y: 0 };
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          e.preventDefault();
          if (direction.x !== -1) game.nextDirection = { x: 1, y: 0 };
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState, startGame]);

  useEffect(() => {
    if (gameState === 'idle') {
      draw();
    }
  }, [gameState, draw]);

  return (
    <div className="fixed inset-0 bg-[#111111] overflow-hidden">
      <canvas ref={canvasRef} className="block" />

      <div className="fixed top-4 left-4 text-white font-mono text-sm z-10">
        <div className="opacity-60">SCORE: {score}</div>
        <div className="opacity-40">HIGH: {highScore}</div>
      </div>

      {gameState === 'idle' && (
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <h1 className="text-white text-4xl font-bold mb-4 tracking-wider">SNAKE</h1>
            <p className="text-white opacity-60 mb-8 font-mono text-sm">
              Use arrow keys or WASD to move
            </p>
            <button
              onClick={startGame}
              className="px-8 py-3 bg-white text-[#111111] font-mono text-sm hover:bg-[#e9dd34] transition-colors"
            >
              PRESS SPACE TO START
            </button>
          </div>
        </div>
      )}

      {gameState === 'gameover' && (
        <div className="fixed inset-0 flex items-center justify-center z-20 bg-black/50">
          <div className="text-center">
            <h1 className="text-white text-4xl font-bold mb-4 tracking-wider">GAME OVER</h1>
            <p className="text-white opacity-60 mb-2 font-mono text-sm">SCORE: {score}</p>
            {score === highScore && score > 0 && (
              <p className="text-[#e9dd34] mb-4 font-mono text-sm">NEW HIGH SCORE!</p>
            )}
            <button
              onClick={startGame}
              className="px-8 py-3 bg-white text-[#111111] font-mono text-sm hover:bg-[#e9dd34] transition-colors"
            >
              PRESS SPACE TO RESTART
            </button>
          </div>
        </div>
      )}

      <Link
        href="/"
        className="fixed bottom-4 left-4 text-white opacity-40 hover:opacity-100 font-mono text-sm z-10 transition-opacity"
      >
        &larr; BACK
      </Link>
    </div>
  );
}

Snake.getLayout = (page) => page;
