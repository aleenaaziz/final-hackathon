import axios from "axios";

const login = async (formData) => {
  const response = await axios.post("form/addformdata", formData);
  return response.data;
};


export { login };
