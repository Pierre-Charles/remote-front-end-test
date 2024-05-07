const API_URL = 'http://localhost:3000/api';

export const fetchWrapper = async (url = '/', options = {}) => {
    const response = await fetch(`${API_URL}${url}`, options);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
};
