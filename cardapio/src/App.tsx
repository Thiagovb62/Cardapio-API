
import './App.css'
import {Card} from "./Components/Cards/card.tsx";
import {useFoodData} from "./Hooks/useFoodData.ts";
import  {useState} from "react";
import {CreateModal} from "./Components/Cards/modal/create-model.tsx";

function App() {
    const {data} = useFoodData();
    const [isModelOpen, setIsModelOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModelOpen(prev => !prev)
    }
    return (

    <div className="container">
        <h1>Cardapio</h1>
        <div className="card-grid">
            {data?.map(item =>
                <Card
                    image={item.image}
                    price={item.price}
                    title={item.title}
                />
            )}
        </div>
        {isModelOpen && <CreateModal closeModal={handleOpenModal}/>}
    <button onClick={handleOpenModal} >Adicionar</button>
    </div>
  )
}

export default App
