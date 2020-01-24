import { getAll, GET, DELETE } from "../actions/action";

const initialState = {
  directorsData: [],
  director: { id: "", director_name: "" }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET:
      return { directorsData: action.json };

    default:
      return state;
  }
};
