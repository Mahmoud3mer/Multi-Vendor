import { useQuery } from "@tanstack/react-query"
import axiosInstance from "../axiosInstance/axiosInstance"

const useGetServices = () => {
    const {data, isLoading, error, refetch} = useQuery({
        queryKey: ['get_services'],
        queryFn: async () => {
            const res = await axiosInstance.get('/services');
            return res?.data?.data
        }
    })

    return {data, isLoading, error, refetch};
}

export default useGetServices;