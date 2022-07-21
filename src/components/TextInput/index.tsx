import { useInputStore } from "@/store/useInputStore";
import { ChangeEvent } from "react";
import { S } from "./styled";

const TextInput = () => {
  const { value, setValue } = useInputStore();
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };
  return (
    <>
      <S.TextInput
        value={value}
        onChange={onChange}
        placeholder="Write Text and Double Click the Canvas"
      />
    </>
  );
};

export default TextInput;
