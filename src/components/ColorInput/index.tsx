import { useContextStore } from "@/store/useContextStore";
import React, { useState } from "react";
import { S } from "./styled";

const ColorInput = () => {
  const [color, setColor] = useState("");
  const context = useContextStore((state) => state.context);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.currentTarget.value);
    if (context) {
      context.strokeStyle = color;
      context.fillStyle = color;
    }
  };
  return (
    <>
      <S.ColorInput type="color" onChange={onChange} />
    </>
  );
};

export default ColorInput;
