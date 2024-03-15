import axios, { AxiosResponse } from "axios";

const API = axios.create({ baseURL: "http://localhost:3001" });

interface FormData {
  // Define the type for FormData properties
  username: string;
  password: string;
  // Add more properties as needed
}

export const LogIn = (formData: FormData) => API.post(`auth/login`, formData);

export const SignUp = (formData: FormData) => API.post(`auth/register`, formData); // I corrected the endpoint to "auth/signup"

// Optionally, you can also specify the response type if needed
export const LogInResponse = (formData: FormData): Promise<AxiosResponse> =>
  API.post(`auth/login`, formData);

export const SignUpResponse = (formData: FormData): Promise<AxiosResponse> =>
  API.post(`auth/signup`, formData);
