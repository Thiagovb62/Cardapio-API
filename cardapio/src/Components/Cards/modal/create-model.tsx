import {useEffect, useState} from "react";
import {useFoodDataMutate} from "../../../Hooks/useFoodDataMutate.ts";
import {FoodData} from "../../../Interface/FoodData.tsx";
import "./modal.css"

interface InputProps {
    label: string;
    value: string | number;
    updateValue: (value: any) => void;
}

interface ModalProps {
    closeModal(): void;
}
const Input = ({label,value,updateValue}:InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({closeModal}: ModalProps) {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const {mutate,isSuccess} = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            title,
            price,
            image
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        mutate(foodData);
    }

    useEffect(() => {
        if (isSuccess) {
            closeModal();
        }
    }), [isSuccess];


    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Adicionar novo item</h2>
                <form className="input-container">
                    <Input label="title" value={title} updateValue={setTitle}></Input>
                    <Input label="price" value={price} updateValue={setPrice}></Input>
                    <Input label="image" value={image} updateValue={setImage}></Input>
                </form>
                <button onClick={submit} className="btn-secondary">Adicionar</button>
            </div>
        </div>
    )
}