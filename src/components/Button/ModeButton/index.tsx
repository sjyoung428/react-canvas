import { useCanvasStore } from "@/store/useCanvasStore";
import { S } from "./styled";

type ModeType = "Fill Mode" | "Stroke Mode";

const ModeButton = () => {
  const { mode, setMode } = useCanvasStore();
  const onClick = () => {
    setMode(mode === "Fill Mode" ? "Stroke Mode" : "Fill Mode");
  };
  return (
    <>
      <S.ModeButton onClick={onClick}>{mode}</S.ModeButton>
    </>
  );
};

export default ModeButton;
