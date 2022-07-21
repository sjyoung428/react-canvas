import create from "zustand";

type ModeType = "Stroke Mode" | "Fill Mode";

interface CanvasState {
  mode: ModeType;
  height: 500;
  width: 500;
}
interface CanvasAction {
  setMode: (mode: ModeType) => void;
}

export const useCanvasStore = create<CanvasState & CanvasAction>((set) => ({
  mode: "Fill Mode",
  height: 500,
  width: 500,

  setMode: (mode: ModeType) =>
    set(() => ({
      mode,
    })),
}));
