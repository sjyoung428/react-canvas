import { useCanvasStore } from "@/store/useCanvasStore";
import { useContextStore } from "@/store/useContextStore";
import { S } from "./styled";

const ResetButton = () => {
  const context = useContextStore((state) => state.context);
  const { width, height } = useCanvasStore();
  const onClick = () => {
    if (context) {
      context.fillStyle = "white";
      context.fillRect(0, 0, width, height);
    }
  };
  return (
    <>
      <S.ResetButton onClick={onClick}>RESET</S.ResetButton>
    </>
  );
};

export default ResetButton;
