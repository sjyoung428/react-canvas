import React, { useEffect, useRef, useState } from "react";
import { S } from "./styled";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>();
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      setContext(ctx);
      context?.strokeRect(50, 50, 100, 200); // x좌표, y좌표, 가로, 세로
    }
  }, []);

  return <S.Canvas height={500} width={500} ref={canvasRef} />;
};

export default Canvas;
