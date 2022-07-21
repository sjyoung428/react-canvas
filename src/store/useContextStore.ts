import create from "zustand";

interface ContextState {
  context: CanvasRenderingContext2D | null;
}
interface ContextAction {
  setContext: (context: CanvasRenderingContext2D | null) => void;
}

export const useContextStore = create<ContextState & ContextAction>((set) => ({
  context: null,
  setContext: (context: CanvasRenderingContext2D | null) => {
    set(() => ({ context }));
  },
}));
