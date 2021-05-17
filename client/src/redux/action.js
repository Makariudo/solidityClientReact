
export const CHANGE_NAME = "CHANGE_NAME";
export const changeName = (data) => ({
  type: CHANGE_NAME,
  payload: data
});

export const SET_MIND = "SET_MIND";
export const setMind = (data, drizzle) => ({
  type: SET_MIND,
  payload: data,
  drizzle,
});