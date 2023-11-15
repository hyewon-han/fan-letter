import fakeData from "../../fakeData.json";

const CREATE = "comment/CREATE";
const DELETE = "comment/DELETE";

export const createData = (payload) => {
  return { type: CREATE, payload };
};
export const deleteData = (payload) => {
  return { type: DELETE, payload };
};

const initialState = fakeData;

const comment = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return [action.payload, ...state];
    case DELETE:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default comment;
