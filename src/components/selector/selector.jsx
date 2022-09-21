import './selector.css';
import { useState } from 'react';
import { CompactPicker } from "react-color";

function Selector({ savedscheme, setSavedscheme }) {
    
    const defaultColor = `linear-gradient(130.53deg, #404040 17.47%, #404040 27.71%, #B0B0B0 27.72%, #B0B0B0 36.75%, #404040 36.76%, #404040 45.49%, #B0B0B0 45.5%, #B0B0B0 54.23%, #404040 54.24%, #404040 63.27%, #B0B0B0 63.27%, #B0B0B0 71.71%, #404040 71.71%)`

    const [color1, setColor1] = useState({backgroundImage: defaultColor});
    const [color2, setColor2] = useState({backgroundImage: defaultColor});
    const [color3, setColor3] = useState({backgroundImage: defaultColor});
    const [color4, setColor4] = useState({backgroundImage: defaultColor});
    const [color5, setColor5] = useState({backgroundImage: defaultColor});

    const [scheme, setScheme] = useState([]);
    const [schemename, setSchemename] = useState(''); 
    const [circleselected, setCircleselected] = useState(1);
    const [colorselected, setColorselected] = useState();

    const handleChange = color => {
        setColorselected(color);
        console.log (color);
        if (circleselected === 1) {
            setColor1({backgroundColor: color.hex});
            scheme.splice(0, 1, color.hex); 
            setScheme([...scheme]);
        } else if (circleselected === 2) {
            setColor2({backgroundColor: color.hex});
            scheme.splice(1, 1, color.hex);
            setScheme([...scheme]);
        } else if (circleselected === 3) {
            setColor3({backgroundColor: color.hex});
            scheme.splice(2, 1, color.hex);
            setScheme([...scheme]);
        } else if (circleselected === 4) {
            setColor4({backgroundColor: color.hex});
            scheme.splice(3, 1, color.hex);
            setScheme([...scheme]);
        } else if (circleselected === 5) {
            setColor5({backgroundColor: color.hex});
            scheme.splice(4, 1, color.hex);
            setScheme([...scheme]);
        }
    }

    const handleSchemename = (e) => {
        e.preventDefault();
        setSchemename(e.target.value);
    }

    const handleSave = () => {
        if (schemename) {
            const tosave = {'name': schemename, 'colors': scheme};
            console.log(tosave);
            const newsaved = [...savedscheme, tosave]
            setSavedscheme(newsaved)
            localStorage.setItem('savedscheme', JSON.stringify(newsaved));
            console.log("savedscheme")
        } else {
            alert('Por favor ingresa un nombre al scheme')
        }
    }

    const handleDelete = (index) => {
        savedscheme.splice (index, 1)
        setSavedscheme([...savedscheme])
        localStorage.setItem ('saved', JSON.stringify(savedscheme));
    }


  return (
    <div className="Selector">
        <div className="Color-container">
            <div className={circleselected === 1 ? "colorcircle circlelarge" : "colorcircle"} style={color1} onClick={() => setCircleselected(1)} />
            <div className={circleselected === 2 ? "colorcircle circlelarge" : "colorcircle"} style={color2} onClick={() => setCircleselected(2)} />
            <div className={circleselected === 3 ? "colorcircle circlelarge" : "colorcircle"} style={color3} onClick={() => setCircleselected(3)} />
            <div className={circleselected === 4 ? "colorcircle circlelarge" : "colorcircle"} style={color4} onClick={() => setCircleselected(4)} />
            <div className={circleselected === 5 ? "colorcircle circlelarge" : "colorcircle"} style={color5} onClick={() => setCircleselected(5)} />
        </div>

        <div className="Selector-container">
            <CompactPicker color={colorselected} onChangeComplete={handleChange} />

            <div className="inputbox" >
                <h2 className="inputtitle">Name</h2>

                <div className="inputname" >
                    <input type="text" value={schemename} placeholder="Website color scheme" onChange={handleSchemename}/>
                    <div className="inputbutton" onClick={handleSave}>
                        <img src="icons/plus.svg" alt="plus" />
                    </div>
                </div>
            </div>
        </div>
        <div className="saved-container">
            {savedscheme && savedscheme.map ((item, index) => (
                <div key={index} className="saveditem">
                    <div className='saveditemcontainer'>
                        <h2 className="saveditem-text">{item.name}</h2>
                        <img src='icons/delete.svg' alt='Delete icon' onClick={()=>handleDelete(index)} />
                    </div>
                    
                    <div className='pallete-saved'>
                        {item.colors.map ((item, index) => (
                            <div key={index} className="colorcircle" style={{backgroundColor: item }}  />
                        ))}
                    </div>
                </div> 
            ))}
        </div>
    </div>
    );
}

export default Selector;
