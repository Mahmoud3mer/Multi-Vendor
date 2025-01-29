import { useQuery } from "@tanstack/react-query"
import axiosInstance from "../axiosInstance/axiosInstance"

const useGetAboutSection = () => {
    const {data, isLoading, error, refetch} = useQuery({
        queryKey: ['about_section'],
        queryFn: async () => {
            const res = await axiosInstance('/about-mokabat');
            return res?.data?.data
        },
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false
    })

    return {data, isLoading, error, refetch};
}

export default useGetAboutSection;