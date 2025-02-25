import axios from "axios"

interface LoginModel {
    username: string;
    password: string;
}

class Auth {
    async login(login: LoginModel): Promise<string> {
        const response = await axios.post<{ jwt: string }>(
            `${import.meta.env.VITE_REST_SERVER_URL}/login`,
            login
        )
        return response.data.jwt
    }
}

const auth = new Auth()
export default auth