import "./PokemonCardWrapper.css";
import PokemonCard from "../../Components/PokemonCard/PokemonCard"

const PokemonCardWrapper = (props) => {
    return (
        <section className="PokemonCardWrapper">
            <PokemonCard 
            name="Whooper"
            type={["water", "ground"]}
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png"
            HP="55"
            updateCounter={props.updateCounter}
            />
            <PokemonCard 
            name="Piplup"
            type={["water"]}
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png"
            HP="53"
            updateCounter={props.updateCounter}
            />
            <PokemonCard 
            name="Mimikyu"
            type={["ghost", "fairy"]}
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png"
            HP="55"
            updateCounter={props.updateCounter}
            />
            <PokemonCard 
            name="Whooper"
            type={["psychic", "fairy"]}
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png"
            HP="40"
            updateCounter={props.updateCounter}
            />
        </section>
    )
};

export default PokemonCardWrapper;