import Card from "./Card";
import "./App.css";
const App = () => {

    
    const click = () => {
        console.log("Ik ben geklikt");
    }
    const random = () => {
        console.log(Math.random());
    }
    const sum = () => {
        console.log(162535 + 234234);
    }
    return (
        <>
            <Card mouseclick={click}  title="Eerste kaart!" />
            <Card mouseclick={random}  text="Hier is wat text" />
            <Card mouseclick={sum}  title="Derde kaart!" text="Dit is het derde kaartje" />
            
        </>
    );
}

export default App;