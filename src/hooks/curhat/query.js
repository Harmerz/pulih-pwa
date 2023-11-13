'use client'

import { useQuery } from '@tanstack/react-query'

import { useAccessToken } from '@/hooks/auth'
import { axios } from '@/lib/axios'

export const useGetCurhat = () => {
  const { accessToken, headers } = useAccessToken()
  return useQuery({
    queryKey: ['curhat'],
    queryFn: async () => {
      const res = await axios.get('/api/curhat', {
        headers,
      })
      return res.data
    },
    staleTime: 15 * 60 * 1000,
    enabled: !!accessToken,
  })
}

export default useGetCurhat
