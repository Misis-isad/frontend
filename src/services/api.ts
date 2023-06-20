import axios from "axios";
//

interface VideoFormData {
    url: string;
}

const BASE_URL = "http://127.0.0.1:8000";

const ApiService = {
    async getAllItems() {
        // make api call to get all data about Items
        const response = await axios.get(`${BASE_URL}/items/`);
        return await response.data;
    },
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
};

export default ApiService;
