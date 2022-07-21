import { S } from "./styled";

interface SaveButtonProps {
  onClick: () => void;
}

const SaveButton = ({ onClick }: SaveButtonProps) => {
  return (
    <>
      <S.SaveButton onClick={onClick}>SAVE</S.SaveButton>
    </>
  );
};

export default SaveButton;
