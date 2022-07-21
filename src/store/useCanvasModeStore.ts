import create from "zustand";

type ModeType = "Stroke Mode" | "Fill Mode";

interface ModeState {
  mode: ModeType;
}
interface ModeAction {
  setMode: () => void;
}

export const useCanvasModeStore = create<ModeState & ModeAction>(
  (set, get) => ({
    mode: "Fill Mode",
    setMode: () =>
      set(() => ({
        mode: get().mode === "Fill Mode" ? "Stroke Mode" : "Fill Mode",
      })),
  })
);
