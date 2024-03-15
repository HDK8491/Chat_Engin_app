// export default chatReducer
interface ChatUser {
  // Define the structure of a chat user here
  // For example: id, name, etc.
}

interface ChatState {
  chatUsers: ChatUser[];
  loading: boolean;
  error: boolean;
}

type SaveUserAction = { type: "SAVE_USER"; data: ChatUser };

type ChatAction = { type: "SAVE_USER"; data: ChatUser };

const chatReducer = (
  state: ChatState = { chatUsers: [], loading: false, error: false },
  action: ChatAction
): ChatState => {
  switch (action.type) {
    case "SAVE_USER":
      if (action.type === "SAVE_USER") {
        return { ...state, chatUsers: [...state.chatUsers, action.data] };
      }
      return state;
    default:
      return state;
  }
};

export default chatReducer;
