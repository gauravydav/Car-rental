const API_BASE_URL = 'http://localhost:3000/api';

const api = {
  fetchUserData: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/user`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  },
};

export default api;
