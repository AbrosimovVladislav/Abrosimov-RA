import React from "react";

export default function Hex2Rgb() {

    const [form, setForm] = React.useState({hex: '', rgb: ''});

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(form.hex)
    }

    const handleHexChange = (evt) => {
        setForm(prevForm => ({...prevForm, hex: evt.target.value}));
        if (form.hex.length === 6 && form.hex.search('#') === 0) {
            console.log("InsideSetting")
            let rgbValues = hexToRgb(form.hex);
            let colorValue = "rgb(" + rgbValues.r + ", " + rgbValues.g + ", " + rgbValues.b + ")";
            setForm(prevForm => ({...prevForm, rgb: colorValue}));
        } else {
            setForm(prevForm => ({...prevForm, rgb: "Ошибка!"}))
        }
    }

    function hexToRgb(color) {
        if (color.substring(0, 1) == '#') {
            color = color.substring(1);
        }
        var rgbColor = {};
        rgbColor.r = parseInt(color.substring(0, 2), 16);
        rgbColor.g = parseInt(color.substring(2, 4), 16);
        rgbColor.b = parseInt(color.substring(4), 16);
        return rgbColor;
    }

    return (
        <div style={{background: form.rgb}}>
            <form onSubmit={handleSubmit}>
                <input id="hex" name="hex" value={form.hex} onChange={handleHexChange}/>
                <label>{form.rgb}</label>
            </form>
        </div>
    )
}
