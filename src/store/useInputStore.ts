import create from "zustand";

interface InputState {
  value: string;
}

interface InputAction {
  setValue: (value: string) => void;
}

export const useInputStore = create<InputState & InputAction>((set) => ({
  value: "",

  setValue: (value) =>
    set(() => ({
      value,
    })),
}));
