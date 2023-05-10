import axios, {AxiosPromise} from "axios";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {FoodData} from "../Interface/FoodData.tsx";

const API_URL = "http://localhost:8080";
const postData = async (data: FoodData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/foods/save', data);
    return response;
}
export function useFoodDataMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData, //funcao para fazer o fetch dos dados
        retry: 2, //numero de tentativas
        onSuccess: () => {
            queryClient.invalidateQueries(["food-data"]);
        }
    });
    return mutate;

}