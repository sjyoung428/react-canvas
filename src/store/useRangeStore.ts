import create from "zustand";

interface RangeState {
  value: number;
}

interface RangeAction {
  setValue: (value: number) => void;
}

export const useRangeStore = create<RangeState & RangeAction>((set) => ({
  value: 5,
  setValue: (value: number) => {
    set(() => ({ value }));
  },
}));
