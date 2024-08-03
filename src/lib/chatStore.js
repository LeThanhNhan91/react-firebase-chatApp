import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebase";
import { useUserStore } from "./userStore";

export const useChatStore = create((set) => ({
  chatId: null,
  user: null,
  isCurrentUserBlock: false,
  isReceiverBlock: false,
  isLoading: true,
  changeChat: (chatId, user) => {
    const currentUser = useUserStore.getState().currentUser;

    // check if currentUser is blocked
    if (user.blocked.includes(currentUser.id)) {
      return set({
        chatId,
        user: null,
        isCurrentUserBlock: true,
        isReceiverBlock: false,
      });
    }

    // check if receiver is blocked
    else if (currentUser.blocked.includes(user.id)) {
      return set({
        chatId,
        user: user,
        isCurrentUserBlock: false,
        isReceiverBlock: true,
      });
    } else {
      return set({
        chatId,
        user,
        isCurrentUserBlock: false,
        isReceiverBlock: false,
      });
    }
  },

  changeBlock: () => {
    set((state) => ({ ...state, isReceiverBlock: !state, isReceiverBlock }));
  },
}));
