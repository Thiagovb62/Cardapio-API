
import './App.css'
import {Card} from "./Components/Cards/card.tsx";
import {useFoodData} from "./Hooks/useFoodData.ts";

function App() {
    const {data} = useFoodData();


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

    </div>
  )
}

export default App
