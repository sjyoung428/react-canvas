import { useContextStore } from "@/store/useContextStore";
import { useRangeStore } from "@/store/useRangeStore";
import { S } from "./styled";

const Range = () => {
  const { range, setRange } = useRangeStore();
  const context = useContextStore((state) => state.context);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRange(Number(event.currentTarget.value));
    if (context) {
      context.lineWidth = range;
    }
  };
  return (
    <>
      <S.Range
        type="range"
        min={1}
        max={10}
        value={range}
        step={0.1}
        onChange={onChange}
      />
    </>
  );
};

export default Range;
