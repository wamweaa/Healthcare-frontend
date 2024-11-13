import axios from 'axios';

const api_url = 'http://127.0.0.1:5555'

// register a new user
export const registerUser = async(userData) => {
    return axios.post(`${api_url}/register`, userData);
}

// login user
export const loginUser = async(userData) => {
    return axios.post(`${api_url}/login`, userData);
}

// get all appointments
export const fetchAppointments = async()=> {
    return axios.get(`${api_url}/appointments`);
}

//creating a new appointment
export const createAppointment = async(appointmentData) => {
    return axios.post(`${api_url}/appointments`, appointmentData)
};
// add a new medicine to stock
export const addNewMedicine = async(medicineData) => {
    return axios.post(`${api_url}/medicines`, medicineData);
};

// update medicine stock
export const updateMedicinw = async(medicineId, updateData) => {
    return axios.put(`${api_url}/medicines/${medicineId}`, updateData);
}

// Track medicine purchase
export const trackPurchase = async (purchaseData) => {
    return axios.post(`${API_URL}/purchase_history`, purchaseData);
  };
  
  // Get purchase history
  export const fetchPurchaseHistory = async () => {
    return axios.get(`${API_URL}/purchase_history`);
  };
