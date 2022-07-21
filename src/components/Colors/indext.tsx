import { useContextStore } from "@/store/useContextStore";
import React, { useEffect, useState } from "react";
import { S } from "./styled";

const Colors = () => {
  const [colors, _] = useState([
    { id: 1, color: "#1abc9c" },
    { id: 2, color: "#3498db" },
    { id: 3, color: "#34495e" },
    { id: 4, color: "#27ae60" },
    { id: 5, color: "#8e44ad" },
    { id: 6, color: "#f1c40f" },
    { id: 7, color: "#e74c3c" },
    { id: 8, color: "#95a5a6" },
    { id: 9, color: "#d35400" },
    { id: 10, color: "#bdc3c7" },
    { id: 11, color: "#2ecc71" },
    { id: 12, color: "#e67e22" },
  ]);
  const [color, setColor] = useState("");
  const context = useContextStore((state) => state.context);

  useEffect(() => {
    if (context) {
      context.strokeStyle = color;
    }
  }, [color]);

  const onClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    setColor(event.currentTarget.id);
  };
  console.log(color);
  return (
    <S.CircleContainer>
      {colors.map((color) => (
        <S.ColorCircle
          key={color.id}
          id={color.color}
          color={color.color}
          onClick={onClick}
        />
      ))}
    </S.CircleContainer>
  );
};

export default Colors;
