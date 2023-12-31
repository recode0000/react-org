import { useQuery } from 'react-query'
import axios from 'axios'
import delay from '../utils/fetchDelay'

const getComments = async () => {
  const { data } = await axios
    .get('https://jsonplaceholder.typicode.com/comments?_limit=3')
    .then(await delay(1000))
  return data
}

const useQueryComments = () => {
  return useQuery({
    queryKey: ['comments'],
    queryFn: getComments,
  })
}

export default useQueryComments
