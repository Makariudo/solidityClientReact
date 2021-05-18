
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

export const SUBSCRIBE_ADDRESSENTRIES = "SUBSCRIBE_ADDRESSENTRIES";
export const subscribeAddressEntries = (drizzle) => ({
  type: SUBSCRIBE_ADDRESSENTRIES,
  drizzle,
});

export const SEED_ADDRESSENTRIES = "SEED_ADDRESSENTRIES";
export const seedAddressEntries = (data) => ({
  type: SEED_ADDRESSENTRIES,
  payload: data,
});



export const SUBSCRIBE_ALL_ENTRIES = "SUBSCRIBE_ALL_ENTRIES";
export const subscribeAllEntries = (drizzle) => ({
  type: SUBSCRIBE_ALL_ENTRIES,
  drizzle,
});

export const SEED_COUNTER = "SEED_COUNTER";
export const seedCounter = (nb) => ({
  type: SEED_COUNTER,
  payload: nb,
});


export const FETCH_ALL_ENTRIES = "FETCH_ALL_ENTRIES";
export const fetchAllEntries = (oldNb, newNb, drizzle) => ({
  type: FETCH_ALL_ENTRIES,
  payload: {oldNb, newNb},
  drizzle
});

export const SEED_ALL_ENTRIES = "SEED_ALL_ENTRIES";
export const seedAllEntries = (data) => ({
  type: SEED_ALL_ENTRIES,
  payload: data,
});

