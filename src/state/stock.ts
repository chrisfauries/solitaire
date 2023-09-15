import { atom, selector } from "recoil";

interface Stock {
    drawPointer: number,
    waistPointer: number
}

const stockAtom = atom<Stock>({
    key: "stock/stockAtom",
    default: {drawPointer: -1, waistPointer: -1}
})