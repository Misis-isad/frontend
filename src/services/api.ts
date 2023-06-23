import axios from "axios";
//

interface VideoFormData {
    url: string;
}

interface UserCreate {
    email: string;
    fio: string;
    password: string;
}

interface UserLogin {
    email: string;
    password: string;
}

const BASE_URL = "http://127.0.0.1:8000";

const ApiService = {
    async sendVideoData(data: VideoFormData) {
        let status = "video added";
        const response = await axios
            .post(`${BASE_URL}/video/`, {
                url: data.url,
            })
            .catch((error) => {
                console.log(error);
                if (error.response.status === 400) {
                    console.log("video already exists");
                    status = "video already exists";
                }
            });

        let result = await response;

        console.log(result);
        return status;
    },

    async createUser(data: UserCreate) {
        const response = await axios
            .post(`${BASE_URL}/auth/user/create`, data)
            .catch((error) => {
                console.log(error);
            });
        let result = await response;

        console.log(result);
        return result;
    },

    async loginUser(data: UserLogin) {
        let status = "authorized";
        const response = await axios
            .post(`${BASE_URL}/auth/user/login`, data)
            .catch((error) => {
                console.log(error);
                if (error.response.status === 401) {
                    console.log("unathorized user");
                    status = "unathorized";
                }
            });

        let result = await response;

        console.log(result);
        return status;
    },
};

export default ApiService;
