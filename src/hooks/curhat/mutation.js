import { useAccessToken } from '@/hooks/auth'
import { useApiMutation2 } from '@/hooks/useApiMutation'
import { axios } from '@/lib/axios'

export const useChatMutation = () => {
  const { accessToken, headers } = useAccessToken()

  return useApiMutation2({
    queryKey: ['curhat'],
    mutationFun: async (_, data) => {
      if (!accessToken) {
        return null
      }
      const res = await axios.post('/api/curhat', data, {
        headers,
      })
      return res?.data
    },
  })
}
export default useChatMutation
