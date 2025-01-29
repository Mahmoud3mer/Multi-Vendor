import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance/axiosInstance"
import { useQuery } from "@tanstack/react-query";

const useGetHeroSection = () => {
    const {data, isLoading, error, refetch} = useQuery({
        queryKey: ['banner'],
        queryFn: async() => {
            const res = await axiosInstance.get('banner');
            return res.data.data;
        },

        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false
    })

    return {data, isLoading, error, refetch};
    // const [data, setData] = useState();
    // useEffect(() => {
    //     const getData = async () => {
    //         const res = await axiosInstance.get('/banner');
    //         setData(res?.data?.data);
    //     }

    //     getData();
    // },[])


    
    // return {data}
}

export default useGetHeroSection