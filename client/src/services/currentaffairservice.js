import axios from "axios";

const API_URL =
  "http://localhost:5000/api/current-affairs";

export const getCurrentAffairs =
  async () => {

    const response =
      await axios.get(API_URL);

    return response.data;
};

export const deleteCurrentAffair =
  async (id) => {

    const response =
      await axios.delete(
        `${API_URL}/${id}`
      );

    return response.data;
};