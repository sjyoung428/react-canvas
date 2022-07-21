import create from "zustand";

type ModeType = "Stroke Mode" | "Fill Mode";

interface CanvasState {
  mode: ModeType;
  height: 500;
  width: 500;
}
interface CanvasAction {
  setMode: () => void;
}

export const useCanvasStore = create<CanvasState & CanvasAction>(
  (set, get) => ({
    mode: "Fill Mode",
    height: 500,
    width: 500,

    setMode: () =>
      set(() => ({
        mode: get().mode === "Fill Mode" ? "Stroke Mode" : "Fill Mode",
      })),
  })
);
