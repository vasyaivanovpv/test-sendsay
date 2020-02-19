import { actionTypes } from '../constants';

const initialState = {
  messages: [],
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload.message],
      };
    case actionTypes.GET_STATUS:
      let updatedMessages = state.messages;
      updatedMessages.forEach(message => {
        if (message.trackId === action.trackId) {
          message.status = action.status;
        }
        return message;
      });
      return {
        ...state,
        messages: updatedMessages,
      };
    default:
      return state;
  }
};

export default messagesReducer;
