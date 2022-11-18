import React, { useState } from 'react'
import Colorbox from './Colorbox';

function Colourgame() {
    const [color, setColor] = useState("");
    const [colorlist,setcolorlist]=useState([])
    const styles = {
        backgroundColor: color,
        fontSize: '35px'
    };
    return (
        <div>
            <div className='text-center p-4 m-4 add-color'>
            <input
                onChange={(event) => setColor(event.target.value)}
                type="text"
                style={styles}

                value={color}
                placeholder="Enter a colour"
            />
            <button class="btn btn-primary" onClick={()=>setcolorlist([...colorlist,color])} >Addcolor</button>
           </div>    
            {
                colorlist.map((clr)=>{
                    return(
                    <Colorbox color={clr}/>
                    )
                })
            }
            
        </div>
       
    )
}

export default Colourgame