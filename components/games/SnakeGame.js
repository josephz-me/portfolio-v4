import React, { useEffect, useRef, useState, useCallback } from 'react';

const GRID_SIZE = 20;
const INITIAL_SPEED = 150;
const SPEED_INCREMENT = 5;
const MIN_SPEED = 50;

const Direction = {
  UP: { x: 0, y: -1 },
  DOWN: { x: 0, y: 1 },
  LEFT: { x: -1, y: 0 },
  RIGHT: { x: 1, y: 0 },
};

export default function SnakeGame() {
  const canvasRef = useRef(null);
  const [gameState, setGameState] = useState('idle');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [canvasSize, setCanvasSize] = useState(400);

  const snakeRef = useRef([{ x: 10, y: 10 }]);
  const directionRef = useRef(Direction.RIGHT);
  const nextDirectionRef = useRef(Direction.RIGHT);
  const foodRef = useRef({ x: 15, y: 10 });
  const gameLoopRef = useRef(null);
  const speedRef = useRef(INITIAL_SPEED);

  useEffect(() => {
    const stored = localStorage.getItem('snakeHighScore');
    if (stored) {
      setHighScore(parseInt(stored, 10));
    }
  }, []);

  useEffect(() => {
    const updateSize = () => {
      const maxSize = Math.min(window.innerWidth - 48, 500);
      const size = Math.floor(maxSize / GRID_SIZE) * GRID_SIZE;
      setCanvasSize(size);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const cellSize = canvasSize / GRID_SIZE;

  const spawnFood = useCallback(() => {
    const snake = snakeRef.current;
    let newFood;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (snake.some((seg) => seg.x === newFood.x && seg.y === newFood.y));
    foodRef.current = newFood;
  }, []);

  const resetGame = useCallback(() => {
    snakeRef.current = [{ x: 10, y: 10 }];
    directionRef.current = Direction.RIGHT;
    nextDirectionRef.current = Direction.RIGHT;
    speedRef.current = INITIAL_SPEED;
    setScore(0);
    spawnFood();
  }, [spawnFood]);

  const gameOver = useCallback(() => {
    setGameState('gameover');
    if (gameLoopRef.current) {
      clearInterval(gameLoopRef.current);
      gameLoopRef.current = null;
    }
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('snakeHighScore', score.toString());
    }
  }, [score, highScore]);

  const moveSnake = useCallback(() => {
    const snake = snakeRef.current;
    directionRef.current = nextDirectionRef.current;
    const head = snake[0];
    const newHead = {
      x: head.x + directionRef.current.x,
      y: head.y + directionRef.current.y,
    };

    if (
      newHead.x < 0 ||
      newHead.x >= GRID_SIZE ||
      newHead.y < 0 ||
      newHead.y >= GRID_SIZE
    ) {
      gameOver();
      return;
    }

    if (snake.some((seg) => seg.x === newHead.x && seg.y === newHead.y)) {
      gameOver();
      return;
    }

    const newSnake = [newHead, ...snake];

    if (newHead.x === foodRef.current.x && newHead.y === foodRef.current.y) {
      setScore((prev) => {
        const newScore = prev + 1;
        if (newScore % 5 === 0 && speedRef.current > MIN_SPEED) {
          speedRef.current = Math.max(MIN_SPEED, speedRef.current - SPEED_INCREMENT);
          if (gameLoopRef.current) {
            clearInterval(gameLoopRef.current);
            gameLoopRef.current = setInterval(moveSnake, speedRef.current);
          }
        }
        return newScore;
      });
      spawnFood();
    } else {
      newSnake.pop();
    }

    snakeRef.current = newSnake;
  }, [gameOver, spawnFood]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, canvasSize, canvasSize);

    ctx.strokeStyle = '#2a2a2a';
    ctx.lineWidth = 1;
    for (let i = 0; i <= GRID_SIZE; i++) {
      ctx.beginPath();
      ctx.moveTo(i * cellSize, 0);
      ctx.lineTo(i * cellSize, canvasSize);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * cellSize);
      ctx.lineTo(canvasSize, i * cellSize);
      ctx.stroke();
    }

    const snake = snakeRef.current;
    snake.forEach((segment, index) => {
      const gradient = ctx.createRadialGradient(
        segment.x * cellSize + cellSize / 2,
        segment.y * cellSize + cellSize / 2,
        0,
        segment.x * cellSize + cellSize / 2,
        segment.y * cellSize + cellSize / 2,
        cellSize / 2
      );
      if (index === 0) {
        gradient.addColorStop(0, '#4ade80');
        gradient.addColorStop(1, '#22c55e');
      } else {
        gradient.addColorStop(0, '#22c55e');
        gradient.addColorStop(1, '#16a34a');
      }
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.roundRect(
        segment.x * cellSize + 1,
        segment.y * cellSize + 1,
        cellSize - 2,
        cellSize - 2,
        4
      );
      ctx.fill();
    });

    const food = foodRef.current;
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(
      food.x * cellSize + cellSize / 2,
      food.y * cellSize + cellSize / 2,
      cellSize / 2 - 2,
      0,
      Math.PI * 2
    );
    ctx.fill();
    ctx.fillStyle = '#fca5a5';
    ctx.beginPath();
    ctx.arc(
      food.x * cellSize + cellSize / 3,
      food.y * cellSize + cellSize / 3,
      cellSize / 6,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }, [canvasSize, cellSize]);

  useEffect(() => {
    let animationId;
    const animate = () => {
      draw();
      animationId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationId);
  }, [draw]);

  const startGame = useCallback(() => {
    resetGame();
    setGameState('playing');
    gameLoopRef.current = setInterval(moveSnake, speedRef.current);
  }, [resetGame, moveSnake]);

  const pauseGame = useCallback(() => {
    if (gameState === 'playing') {
      setGameState('paused');
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
        gameLoopRef.current = null;
      }
    } else if (gameState === 'paused') {
      setGameState('playing');
      gameLoopRef.current = setInterval(moveSnake, speedRef.current);
    }
  }, [gameState, moveSnake]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd', ' '].includes(e.key)) {
        e.preventDefault();
      }

      if (gameState === 'idle' || gameState === 'gameover') {
        if (e.key === ' ' || e.key === 'Enter') {
          startGame();
        }
        return;
      }

      if (e.key === ' ' || e.key === 'Escape') {
        pauseGame();
        return;
      }

      if (gameState !== 'playing') return;

      const current = directionRef.current;
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          if (current !== Direction.DOWN) nextDirectionRef.current = Direction.UP;
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          if (current !== Direction.UP) nextDirectionRef.current = Direction.DOWN;
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          if (current !== Direction.RIGHT) nextDirectionRef.current = Direction.LEFT;
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          if (current !== Direction.LEFT) nextDirectionRef.current = Direction.RIGHT;
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState, startGame, pauseGame]);

  useEffect(() => {
    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, []);

  const handleTouch = useCallback(
    (e) => {
      if (gameState !== 'playing') return;

      const touch = e.touches[0];
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = touch.clientX - rect.left - canvasSize / 2;
      const y = touch.clientY - rect.top - canvasSize / 2;

      const current = directionRef.current;

      if (Math.abs(x) > Math.abs(y)) {
        if (x > 0 && current !== Direction.LEFT) {
          nextDirectionRef.current = Direction.RIGHT;
        } else if (x < 0 && current !== Direction.RIGHT) {
          nextDirectionRef.current = Direction.LEFT;
        }
      } else {
        if (y > 0 && current !== Direction.UP) {
          nextDirectionRef.current = Direction.DOWN;
        } else if (y < 0 && current !== Direction.DOWN) {
          nextDirectionRef.current = Direction.UP;
        }
      }
    },
    [gameState, canvasSize]
  );

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex justify-between w-full max-w-[500px] px-2">
        <div className="text-white">
          <span className="opacity-40 text-sm">SCORE</span>
          <p className="text-2xl font-mono">{score}</p>
        </div>
        <div className="text-white text-right">
          <span className="opacity-40 text-sm">HIGH SCORE</span>
          <p className="text-2xl font-mono">{highScore}</p>
        </div>
      </div>

      <div className="relative">
        <canvas
          ref={canvasRef}
          width={canvasSize}
          height={canvasSize}
          className="rounded-lg border border-white/10"
          onTouchStart={handleTouch}
        />

        {gameState === 'idle' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 rounded-lg">
            <p className="text-white text-xl mb-4">Snake Game</p>
            <button
              onClick={startGame}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Start Game
            </button>
            <p className="text-white/50 text-sm mt-4">Press SPACE or ENTER to start</p>
          </div>
        )}

        {gameState === 'paused' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 rounded-lg">
            <p className="text-white text-xl mb-4">Paused</p>
            <button
              onClick={pauseGame}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Resume
            </button>
            <p className="text-white/50 text-sm mt-4">Press SPACE to resume</p>
          </div>
        )}

        {gameState === 'gameover' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 rounded-lg">
            <p className="text-white text-xl mb-2">Game Over</p>
            <p className="text-white/70 mb-4">Score: {score}</p>
            {score === highScore && score > 0 && (
              <p className="text-yellow-400 mb-4">New High Score!</p>
            )}
            <button
              onClick={startGame}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Play Again
            </button>
            <p className="text-white/50 text-sm mt-4">Press SPACE or ENTER to restart</p>
          </div>
        )}
      </div>

      <div className="text-white/50 text-sm text-center">
        <p>Use Arrow Keys or WASD to move</p>
        <p>Press SPACE to pause</p>
      </div>
    </div>
  );
}
