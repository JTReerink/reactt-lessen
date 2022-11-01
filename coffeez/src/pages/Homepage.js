import Card from "../components/Card/Card";
import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";

const HomePage = () => {
    return (
        <>
            <Navigation />
            <Header
                bigTitle="Coffeez"
                smallTitle="Coffee that will make you smile"
                buttonText="Order now"
            />
            <Section title="Something">
                <Card image="coffeeStory.jpg" koffieText="Wat is jouw verhaal voor bij de koffie?" />
                <Card image="fallen-mug.jpg" koffieText="Hier moet ik nog wat voor verzinnen, maar dat komt nog wel" />
                <Card image="latte.jpg" koffieText="Vind hier de mooiste latte art" />
                <Card image="redMug.jpg" koffieText="Waar drink jij je koffie het liefst in?" />
            </Section>
            <Section title="Second part">
                <Card />
                <Card />
                <Card />
                <Card />
            </Section>
        </>
    )
}

export default HomePage