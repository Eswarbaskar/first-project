import React from 'react'

function Colorbox({color}) {
    let styles = {
        backgroundColor:color,
        height:"35px",
        width:"300px",
        margin:"2px"

    }
  return (
    <div style={styles}></div>
  )
}

export default Colorbox