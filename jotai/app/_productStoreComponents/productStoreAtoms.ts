import { atom } from "jotai";
import { Product } from "@/app/types";

export const apiAtom = atom("");
export const productAtom = atom<Product | null>(null);
