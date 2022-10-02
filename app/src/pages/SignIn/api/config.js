import { api } from "../../../api/config";

export const signIn = (signInInfo) => api.post(`/auth/signIn/`, signInInfo);
