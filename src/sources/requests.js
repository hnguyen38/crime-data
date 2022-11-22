const API_KEY = "HJp2ryK1LBgOtoj3fLTaTf61e9aCK5W7iTqljoqt";

const requests = (input) => {
  return `estimates/states/${input}?API_KEY=${API_KEY}`;
};

export default requests;
