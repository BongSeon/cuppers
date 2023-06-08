import axios from 'axios'

const axiosState = {
  baseURL: import.meta.env.VITE_BASE_API_URL,
}
const instance = axios.create(axiosState)

const getCnotes = async () => {
  const apiUrl = `cnotes/landing`
  const temp = await instance.get(apiUrl)

  const res: FetchResponse = {
    ok: temp.status === 200,
    status: temp.status,
    data: temp.data,
  }
  return res
}

const useCnotesAPI = {
  getCnotes,
}
export default useCnotesAPI
