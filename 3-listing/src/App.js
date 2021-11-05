import './App.css';
import Listing from "./components/Listing";
import data from './data/etsy.json';


function App() {
    let items = data;
    let removed = items.splice(22,1);

  return (

      <div>
        <Listing items={items}/>
      </div>
  )
}

export default App;
