import { useContextStore } from "@/store/useContextStore";
import { useRangeStore } from "@/store/useRangeStore";
import { S } from "./styled";

const Range = () => {
  const { value, setValue } = useRangeStore();
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
