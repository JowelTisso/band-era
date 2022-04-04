import { CHANGE_GENRE } from "../../utils/Constants";

export const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_GENRE:
      return {
        ...state,
        selectedGenre: action.payload,
      };
    default:
      return state;
  }
};
