import axios, {AxiosPromise} from "axios";
import {useQuery} from "@tanstack/react-query";
import {FoodData} from "../Interface/FoodData.tsx";

const API_URL = "http://localhost:8080";
const fetchData = async ():AxiosPromise<FoodData[]> => {
    const res = axios.get( API_URL + "/foods/" )
    return res;
}

export function useFoodData(){
    const query = useQuery({
        queryFn: fetchData, //funcao para fazer o fetch dos dados
        queryKey: ["food-data"], //chave para identificar o dado
        retry: 2, //numero de tentativas
    });
    return {
        ...query,
        data: query.data?.data,
    }

}