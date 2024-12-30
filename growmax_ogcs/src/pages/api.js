import axios from 'axios';

const BASE_URL = 'https://growmaxbackend.ogcs.co.in/:5001/api/programs';

// Fetch multiple programs by IDs
export const fetchPrograms = async (programIds) => {
    try {
      // Fetch all programs in parallel using their IDs
      const requests = programIds.map((id) =>
        axios.get(`https://growmaxbackend.ogcs.co.in/api/programs/${id}`)
      );
      const responses = await Promise.all(requests);
      return responses.map((res) => res.data); // Return array of program data
    } catch (error) {
      console.error('Error fetching programs:', error);
      throw error;
    }
  };
  

// Fetch a single program by ID
export const fetchProgramById = async (programId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${programId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching program with ID ${programId}:`, error);
    throw error;
  }
};
