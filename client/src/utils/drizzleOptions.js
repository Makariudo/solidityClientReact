import MindPin from "../contracts/MindPin.json"

const options = {
  contracts: [MindPin],
  events: {
    MindPin: ["MindSet", "DeleteMindSet", "UpdateMindSet"],
  },
};

export default options;