import './App.css';
import Card from "./components/Card";
import pic from "./assets/qwe.jpeg"

function App() {

    const card1 = {
        title: "Card title",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        link: "https://www.google.com/"
    }

    return (
        <div>
            <Card {...card1}>
                <img src={pic} className="card-img-top" alt="..."/>
            </Card>
            <Card {...card1}
                  title="Special title treatment"
                  text="With supporting text below as a natural lead-in to additional content.">
                <img src={pic} className="card-img-top" alt="..."/>
            </Card>
        </div>
    )
}

export default App;
