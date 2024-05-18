import { Params } from "@/types";
import { create } from "zustand";

export const useParamsStore = create<Params>((set) => ({
    subject: "",
    post: "",
    setSubject: (subject: string) => set({ subject }),
    setPost: (post: string) => set({ post }),
}))