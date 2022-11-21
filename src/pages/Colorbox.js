import React from 'react'

function Colorbox({color}) {
    let styles = {
        backgroundColor:color,
        height:"30px",
        // width:"500px",
        // margin:"2px",

    }
  return (
    <div className="container m-0">
      <div className="row justify-content-center">
        <div className="col-lg-10">
        
        <div style={styles} className="border border-2"></div>

        </div>
      </div>
    </div>
  )
}

export default Colorbox