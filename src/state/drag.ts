import { atom, selector } from "recoil";

export interface Drag {
  source?: HTMLElement;
  destination?: HTMLElement;
  success?: boolean;
}

const dragAtom = atom<Drag | null>({
  key: "drag/drag-atom",
  default: null,
  effects: [({onSet,getPromise}) => {
    onSet(async() => {
        const atom = await getPromise(dragAtom);
        console.log(atom)
    })
  }]
});

const source = selector<HTMLElement>({
  key: "drag/source",
  get: () => new HTMLElement(),
  set: ({ get, set }, args) => {
    const source = args as HTMLElement;
    const dragState = get(dragAtom) || {};
    set(dragAtom, { ...dragState, source });
  },
});

const destination = selector<HTMLElement>({
  key: "drag/destination",
  get: () => new HTMLElement(),
  set: ({ get, set }, args) => {
    const destination = args as HTMLElement;
    const dragState = get(dragAtom) || {};
    set(dragAtom, { ...dragState, destination });
  },
});

const clearDestination = selector<void>({
  key: "drag/clear-destination",
  get: () => {},
  set: ({ get, set }) => {
    const dragState = get(dragAtom) || {};
    set(dragAtom, { ...dragState, destination: undefined });
  },
});

const success = selector<void>({
  key: "drag/success",
  get: () => {},
  set: ({ get, set }) => {
    const dragState = get(dragAtom);
    if (
      dragState !== null &&
      dragState.destination !== undefined &&
      dragState.source !== undefined
    ) {
      set(dragAtom, { ...dragState, success: true });
    }
  },
});

const clear = selector<void>({
  key: "drag/clear",
  get: () => {},
  set: ({ get, set }) => {
    set(dragAtom, null);
  },
});

export default {
  get: dragAtom,
  source,
  destination,
  clearDestination,
  success,
  clear,
};
