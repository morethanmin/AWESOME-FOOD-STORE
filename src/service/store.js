import axios from "axios";

export async function getStores() {
  try {
    const result = await axios.get(`http://localhost:9000/stores`);

    if (result.status === 200) return result.data;
    else throw result;
  } catch (error) {
    throw error;
  }
}

export async function getStoresId(id) {
  try {
    const result = await axios.get(`http://localhost:9000/stores/${id}`);
    if (result.status === 200) return result.data;
    else throw result;
  } catch (error) {
    throw error;
  }
}
