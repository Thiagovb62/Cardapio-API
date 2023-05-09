import "./card.css"
interface CardProps {
    price : number;
    title : string;
    image : string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-ts-comment
// @ts-ignore
export function Card({price,title,image}: CardProps) {
    return (
        <div className="card">
            <img src={image}/>
            <h2>{title}</h2>
            <p><b>Valor:</b>{price}</p>
        </div>
    )
}