import './App.css';
import Hex2Rgb from "./components/Hex2Rgb";
import React from "react";

function App() {
    const [rgb, setRgb] = React.useState('');
    let hexSymbols = ['F', 'B', 'C', 'D', 'E', '#', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A']

    const onChange = (evt) => {
        let inputLine = evt.target.value
        if (inputLine.length === 7) {
            for (let i = 0; i < inputLine.length; i++) {
                let isCurrentInputSymbolHex = hexSymbols.filter(hexSymbol => hexSymbol === inputLine[i]).length > 0;
                if (isCurrentInputSymbolHex) {
                    setRgb(inputLine.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
                        , (m, r, g, b) => '#' + r + r + g + g + b + b)
                        .substring(1).match(/.{2}/g)
                        .map(x => parseInt(x, 16))
                    )
                } else {
                    setRgb('Ошибка!')
                    break
                }
            }
        }

    }
    return (
        <Hex2Rgb onChange={onChange} rgb={rgb}/>
    );
}

export default App;
