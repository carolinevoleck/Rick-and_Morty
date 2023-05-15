import { CardContainer } from "./styles";


function Card (props){
    const {img, name, species} = props
    return(
        <CardContainer>

            <img src={img} alt="card"></img>
            <h2>{name}</h2>
            <p>{species}</p>

        </CardContainer>
    )
}

export default Card;