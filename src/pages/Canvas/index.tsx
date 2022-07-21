import { useContextStore } from "@/store/useContextStore";
import { useRangeStore } from "@/store/useRangeStore";
import { useEffect, useRef, useState } from "react";
import ColorInput from "../../components/ColorInput";
import Colors from "../../components/Colors/indext";
import Range from "../../components/Range";
import { S } from "./styled";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { context, setContext } = useContextStore();
  const [isPainting, setIsPainting] = useState(false);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      setContext(ctx);
      canvas.addEventListener("mousemove", onMove);
      canvas.addEventListener("mousedown", startPainting);
      canvas.addEventListener("mouseup", cancelPainting);
      canvas.addEventListener("mouseleave", cancelPainting);

      return () => {
        canvas.removeEventListener("mousemove", onMove);
        canvas.removeEventListener("mousedown", startPainting);
        canvas.removeEventListener("mouseup", cancelPainting);
        canvas.removeEventListener("mouseleave", cancelPainting);
      };
    }
  }, [context, isPainting]);

  const onMove = (event: MouseEvent) => {
    if (isPainting) {
      context?.lineTo(event.offsetX, event.offsetY);
      context?.stroke();
    }
    context?.beginPath();
    context?.moveTo(event.offsetX, event.offsetY);
  };
  const startPainting = () => {
    setIsPainting(true);
  };
  const cancelPainting = () => {
    setIsPainting(false);
  };
  return (
    <>
      <S.Canvas height={500} width={500} ref={canvasRef} />
      <Range />
      <ColorInput />
      <Colors />
    </>
  );
};

export default Canvas;