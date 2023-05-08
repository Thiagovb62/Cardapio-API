
import './App.css'
import {Card} from "./Components/Cards/card.tsx";
import {FoodData} from "./Interface/FoodData.tsx";

function App() {
    const data:FoodData[] = []

    return (

    <div className="Container">
        <h1>Cardapio</h1>
        <div className="card-grid">
            {data.map(item =>
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
