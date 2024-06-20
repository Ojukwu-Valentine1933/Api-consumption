import { useState } from "react"
const BASE_URL = "https://jsonplaceholder.typicode.com"

const useHttp = () => {
    const [todos, setTodos] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const sendHttpRequest = async (endpoint, method, bodyData) => {
        setIsLoading(true)

        try {
            const response = await fetch(`${BASE_URL}/${endpoint}`, {
                method,
                body: JSON.stringify(bodyData),
            });
            const data = await response.json();

            if (!response.ok) {
                setIsLoading(false);
                return setErrorMessage("Something Went wrong");
            }

            setIsLoading(false);
            return setTodos(data)
        } catch (error) {
            setIsLoading(false)
            setErrorMessage("seomething went wrong")
        }
    }

    return [sendHttpRequest,todos, errorMessage, isLoading]
}

export default useHttp;