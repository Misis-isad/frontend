import axios from "axios";

interface SettingFromData {
    annotation_length: number;
    article_length: number;
    screenshot_timing: number;
    start_timecode: string;
    end_timecode: string;
}

interface VideoFormData {
    settings: SettingFromData;
    video_link: string;
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

interface RecordDto {
    id: number;
    title: string;
    video_link: string;
    annotation_length: number;
    article_length: number;
    start_timecode: string;
    end_timecode: string;
    preview_picture: string;
    published: boolean;
    screenshot_timing: number;
}

let token;
// localStorage.getItem("token");
// interface AxiosAuthenticateHeader {
//     headers: TokenAuthenticated;
// };

// interface TokenAuthenticated {
//     Authorization: string;
// }

interface AllRecords {
    limit: number;
    offset: number;
}

interface PublishedStatus {
    record_id: number;
    published: boolean;
}

function getToken() {
    const token = localStorage.getItem("token");
    if (token) {
        return token;
    }
    else {
        setAuthorization(false);
    }
}

function getAuthorization() {
    return localStorage.getItem("isAuthorized");
}

function setToken(token: string) {
    console.log(token);
    setAuthorization(true);
    return localStorage.setItem("token", token);
}
function setAuthorization(isAuthorized: boolean) {
    localStorage.setItem('isAuthorized', JSON.stringify(isAuthorized));
}

// const bodyParameters = {
//    key: "value"
// };

// axios.post( 
//   'http://localhost:8000/api/v1/get_token_payloads',
//   bodyParameters,
//   config
// ).then(console.log).catch(console.log);
// function handleError(event: any){
//     if (event.response.status === 401) {
//         console.log("unathorized user");
//         setAuthorization(false);
//     }
// }


const BASE_URL = "http://larek.itatmisis.ru:9999";

const ApiService = {
    async createRecord(data: VideoFormData) {
        // let status = "video added";
        let config = {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        }
        console.log(getToken());
        const response = await axios
            .post(`${BASE_URL}/api/v1/record/create`, data, config)
        // .catch(handleError);
        let result = await response;
        console.log(result);
        console.log(result.data.id);
        return result;
    },


    async setPublishedStatus(data: PublishedStatus) {
        // let status = "video added";
        let config = {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        }
        console.log(getToken());
        const response = await axios 
            .post(`${BASE_URL}/api/v1/record/${data.record_id}/published_status?published=${data.published}`,null,  config)
        // .catch(handleError);
        //тут токен не отправляется почему-то
        let result = await response;
        console.log(result);
        console.log(result.data.id);
        return result;
    },

    async getArticle(data: number) {
        let config = {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        }
        const response = await axios.get(`${BASE_URL}/api/v1/article/${data}/main`, config);
        let result = await response;
        console.log('were here', result.data.body);
        return result;
    },

    async getAllRecords(data: AllRecords): Promise<RecordDto[]> {
        let config = {
            headers: {
                Authorization: `Bearer ${getToken()}`
            },
            params: data
        }
        // console.log(getToken());
        const response = await axios.get(`${BASE_URL}/api/v1/record/all`, config);
        //create result type RecordDto[] from response.data
        let result = await response;
        // define type of result
        // let result: <RecordDto[]> = await response.data;
        console.log('all records in api', result);
        // convert result.data to RecordDto

        return result.data;
    },

    async getPublishedRecords(data: AllRecords): Promise<RecordDto[]> {
        let config = {
            headers: {
                Authorization: `Bearer ${getToken()}`
            },
            params: data
        }
        // console.log(getToken());
        const response = await axios.get(`${BASE_URL}/api/v1/record/published`, config);
        //create result type RecordDto[] from response.data
        let result = await response;
        // define type of result
        // let result: <RecordDto[]> = await response.data;
        console.log('all published records in api', result);
        // convert result.data to RecordDto

        return result.data;
    },

    async createUser(data: UserCreate) {
        const response = await axios
            .post(`${BASE_URL}/auth/user/create`, data)
        // .catch((error) => {
        //     console.log(error);
        // });
        let result = await response;
        token = result.data.token;
        setToken(token);
        setAuthorization(true);
        // console.log("Токен был добавлен в локальное хранилище.");
        // console.log(result.data.token);
        return result;
    },

    async loginUser(data: UserLogin) {
        let status = "authorized";
        let config = {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        }
        const response = await axios
            .post(`${BASE_URL}/auth/user/login`, data, config)
        // .catch((error) => {
        //     console.log(error);
        //     if (error.response.status === 401) {
        //         console.log("unathorized user");
        //         status = "unathorized";
        //     }
        // });

        let result = await response;
        // if(result) setAuthorization(true);
        token = result.data.token;
        setToken(token);
        setAuthorization(true);
        console.log(result, getAuthorization());
        return status;
    },
};
export default ApiService;
