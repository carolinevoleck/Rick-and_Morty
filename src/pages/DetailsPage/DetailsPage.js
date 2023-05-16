import { Header } from "../../components/Header/Header"
import { Container } from "./styles"

export function DetailsPage (props) {

    const {characters, id} = props
    const {changePage} = props
    const [character] = characters.filter (char => char.id === id )
    return(
        <>
          
            <Header/>
            <Container>
                <h2>{character.name}</h2>
                <img src={character.image} alt=""/>
                <p>{character.species}</p>
                <button onClick={() => changePage("homepage")}>Voltar</button>
            </Container>
        
        </>
    )
}