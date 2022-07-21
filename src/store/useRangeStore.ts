import create from "zustand";

interface RangeState {
  range: number;
}

interface RangeAction {
  setRange: (range: number) => void;
}

export const useRangeStore = create<RangeState & RangeAction>((set) => ({
  range: 5,
  setRange: (range) =>
    set(() => ({
      range,
    })),
}));
