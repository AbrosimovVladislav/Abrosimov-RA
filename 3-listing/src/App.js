import './App.css';
import Listing from "./components/Listing";
import data from './data/etsy.json';


function App() {
    let items = data;
    let removed = items.splice(22,1);

    // items.splice(22,1);


       // console.log(item[1].MainImage.url_570xN)
       // console.log(item[1].listing_id)
       // console.log(item)
       // items.forEach((item) =>  console.log(item.MainImage))
    // console.log(items[21].MainImage.url_570xN)
    //    items.map((o) =>  console.log(o.MainImage.url_570xN))

  return (

      <div>
        <Listing items={items}/>
      </div>
  )
}

export default App;
