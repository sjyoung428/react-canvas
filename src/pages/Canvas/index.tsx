import { useContextStore } from "@/store/useContextStore";
import { useEffect, useRef, useState } from "react";
import ColorInput from "@/components/ColorInput";
import Colors from "@/components/Colors/indext";
import Range from "@/components/Range";
import { S } from "./styled";
import ModeButton from "@/components/Button/ModeButton";
import { useCanvasStore } from "@/store/useCanvasStore";
import ResetButton from "@/components/Button/ResetButton";
import EraseButton from "@/components/Button/EraseButton";
import ImageUpload from "@/components/ImageUpload";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { context, setContext } = useContextStore();
  const [isPainting, setIsPainting] = useState(false);
  const { mode, height, width } = useCanvasStore();

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      setContext(ctx);
      canvas.addEventListener("mousemove", onMove);
      canvas.addEventListener("mousedown", startPainting);
      canvas.addEventListener("mouseup", cancelPainting);
      canvas.addEventListener("mouseleave", cancelPainting);
      canvas.addEventListener("click", onClickMode);

      return () => {
        canvas.removeEventListener("mousemove", onMove);
        canvas.removeEventListener("mousedown", startPainting);
        canvas.removeEventListener("mouseup", cancelPainting);
        canvas.removeEventListener("mouseleave", cancelPainting);
        canvas.removeEventListener("click", onClickMode);
      };
    }
  }, [context, isPainting, mode]);

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

  const onClickMode = () => {
    if (mode === "Stroke Mode") {
      context?.fillRect(0, 0, width, height);
    }
  };

  return (
    <>
      <S.Canvas height={height} width={width} ref={canvasRef} />
      <Range />
      <ColorInput />
      <ModeButton />
      <EraseButton />
      <ResetButton />
      <ImageUpload />
      <Colors />
    </>
  );
};

export default Canvas;
