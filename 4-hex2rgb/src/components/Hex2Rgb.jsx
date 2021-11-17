import React from "react";

export default function Hex2Rgb() {

    const [form, setForm] = React.useState({hex: '', rgb: '', showName: ''});

    const handleSubmit = (evt) => {
        evt.preventDefault();
    }

    const handleHexChange = (evt) => {
        setForm(prevForm => ({...prevForm, hex: evt.target.value}));
        if (form.hex.length === 6 && form.hex.search('#') === 0) {
            let rgbValues = hexToRgb(form.hex);
            if ("NaN" === rgbValues.r.toString() || "NaN" === rgbValues.g.toString() || "NaN" === rgbValues.b.toString()) {
                setForm(prevForm => ({...prevForm, showName: "Ошибка!", rgb: "rgb(255, 17, 17)"}))
            } else {
                let colorValue = "rgb(" + rgbValues.r + ", " + rgbValues.g + ", " + rgbValues.b + ")";
                setForm(prevForm => ({...prevForm, showName: colorValue, rgb: colorValue}));
            }
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
                <label>{form.showName}</label>
            </form>
        </div>
    )
}
