interface InputProps {
    label: string;
    value: string | number;
    updateValue: (value: string | number) => void;
}
const Input = ({label,value,updateValue}:InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal() {
    return (
        <div className="modal-overlay">
            <div className="modal=body">
                <h2>Adicionar novo item</h2>
                <form className="input-container">
                    <input type="text" placeholder="Nome do item"/>
                    <input type="text" placeholder="Valor do item"/>
                    <input type="text" placeholder="URL da imagem"/>
                    <button type="submit">Adicionar</button>
                </form>
            </div>
        </div>
    )
}