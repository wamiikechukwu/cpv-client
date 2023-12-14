// const axios = require('axios')

async function httpReq(url, body) {

    const fetch = await axios.get(url, body)


}

export default function sendHttpReq(url, body) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    setIsLoading(true)
    try {
        const resData = httpReq(url, body)
        setData(resData)
    } catch (error) {
        setError(error.message || 'something went wrong')
    }
    setIsLoading(false)

    return{
        data,
        isLoading,
        error
    }
}