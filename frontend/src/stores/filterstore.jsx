
import { create } from "zustand";

const useJobStore = create((set) => ({
  
  globallocation: "",
  globaltype: "",

  
  setgloballocation: (text) => set({ globallocation: text }),
  setglobaltype: (text) => set({ globaltype: text }),


}));

export default useJobStore;
