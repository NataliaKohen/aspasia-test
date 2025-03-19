import axios from 'axios';

const BASE_URL = 'https://anapioficeandfire.com/api/';

export const getData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};
