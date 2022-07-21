import { useCanvasStore } from "@/store/useCanvasStore";
import { useContextStore } from "@/store/useContextStore";
import { ChangeEvent, useEffect, useState } from "react";
import { S } from "./styled";

const ImageUpload = () => {
  const [image, setImage] = useState("");
  const context = useContextStore((state) => state.context);
  const { width, height } = useCanvasStore();

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      context?.drawImage(img, 0, 0, width, height);
    };
  }, [image]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      console.log(event.target.files);
      const file = event.target.files[0];
      setImage(URL.createObjectURL(file));
      event.target.value = "";
    }
  };

  return (
    <>
      <S.ImageUpload htmlFor="file">
        이미지 업로드
        <input type="file" accept="image/*" id="file" onChange={onChange} />
      </S.ImageUpload>
    </>
  );
};

export default ImageUpload;
