import { useCanvasModeStore } from "@/store/useCanvasModeStore";
import { S } from "./styled";

type ModeType = "Fill Mode" | "Stroke Mode";

const ModeButton = () => {
  const { mode, setMode } = useCanvasModeStore();
  const onClick = () => {
    setMode();
  };
  return (
    <>
      <S.ModeButton onClick={onClick}>{mode}</S.ModeButton>
    </>
  );
};

export default ModeButton;
