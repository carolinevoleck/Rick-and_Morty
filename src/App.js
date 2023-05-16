import { GlobalStyle } from './GlobalStyle'; 
import { HomePage } from './pages/HomePage/HomePage';
import {results} from './data/data'
import { useState } from 'react';

function App() {

    const [characters, setCharacters] = useState(results)
    const [image,setImage] = useState("")
    const [name,setName] = useState("")
    const [species,setSpecies] = useState("")
    const [query, setQuery] = useState("")
    const [orderParam, setOrderParam] = useState ("")

    const handleInputImage = (event) => setImage(event.target.value)
    const handleInputName = (event) => setName(event.target.value)
    const handleInputSpecies = (event) => setSpecies(event.target.value)
    const handleInputQuery = (event) =>setQuery(event.target.value)
    const handleInputOrderParam = (event) => setOrderParam(event.target.value)

    const addCharacter  = (event) => {
        event.preventDefault()

        const newCharacter = {
            
                id: Date.now(),
                name,
                species,
                origin:{
                    name: "Earth"
                },
               image
            }
        
        
        const newCharactersList = [...characters, newCharacter]
        setCharacters(newCharactersList)

        setImage("")
        setName("")
        setSpecies("")
    }

    const removeCharacter = (id) => {
        const filteredList = characters.filter(char =>{
            return char.id !== id

    })

    setCharacters(filteredList)

}

  return (
    <div>
    <GlobalStyle/>
    <HomePage characters = {characters} 
    states={{image,name,species, query, orderParam}} 
    handlers={{handleInputImage, handleInputName, handleInputSpecies, handleInputQuery, handleInputOrderParam}}
    addCharacter={addCharacter}
    removeCharacter={removeCharacter}
    />
   
    {/* <DetailsPage/> */} 
    </div>
  );
}

export default App