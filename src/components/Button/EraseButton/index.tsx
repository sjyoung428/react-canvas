import { useCanvasStore } from "@/store/useCanvasStore";
import { useContextStore } from "@/store/useContextStore";
import { S } from "./styled";

const EraseButton = () => {
  const context = useContextStore((state) => state.context);
  const setMode = useCanvasStore((state) => state.setMode);
  const onClick = () => {
    if (context) {
      setMode("Fill Mode");
      context.strokeStyle = "white";
    }
  };
  return (
    <>
      <S.EraseButton onClick={onClick}>지우개</S.EraseButton>
    </>
  );
};

export default EraseButton;
