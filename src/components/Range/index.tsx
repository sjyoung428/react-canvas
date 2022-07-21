import { useContextStore } from "@/store/useContextStore";
import { useState } from "react";
import { S } from "./styled";

const Range = () => {
  const [value, setValue] = useState(5);
  const context = useContextStore((state) => state.context);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.currentTarget.value));
    if (context) {
      context.lineWidth = value;
    }
  };
  return (
    <>
      <S.Range
        type="range"
        min={1}
        max={10}
        value={value}
        step={0.1}
        onChange={onChange}
      />
    </>
  );
};

export default Range;
