import React from 'react'

function Cart(props) {
    return (
        <div className="col-lg-6 text-center">
            <div className="card" style={{ width: "18rem"}}>
                <img style={{ width: "60%",height:"150px",paddingLeft:'50px'}}src={props.product.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.product.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bukl</p>
                    <p className='text-info fw-bold'>Price:RS{props.product.price}</p>
                    <button className="btn btn-primary" onClick={()=>{props.handlecard(props.product)}}>Add Cart</button>
                </div>
            </div>
        </div>
    
        
    )
}


       
        
       

        
    

    
export default Cart