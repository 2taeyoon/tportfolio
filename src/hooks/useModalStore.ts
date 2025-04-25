import { create } from 'zustand';

interface ModalStore {
  isAnyModalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isAnyModalOpen: false,
  setModalOpen: (open) => set({ isAnyModalOpen: open }),
}));