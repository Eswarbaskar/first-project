import React, { useState } from 'react'
import Cart from '../store/Cart'
import CartItem from '../store/CartItem'
import './Store.css'


function Store() {
  let products = [
    {
      id: 1,
      title: "IPHONE",
      img: "https://rukminim1.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=70",
      price: 100000
    },
    {
      id: 2,
      title: "SAMSUNG",
      img: "https://rukminim1.flixcart.com/image/312/312/kqqykcw0/mobile/p/y/u/galaxy-f22-sm-e225fzkhins-samsung-original-imag4z99fagskjxd.jpeg?q=70",
      price: 25000
    },
    {
      id: 3,
      title: "REALME",
      img: "https://rukminim1.flixcart.com/image/312/312/kqjtd3k0/mobile/s/b/8/c11-2021-rmx3231-realme-original-imag4j4xkqchhfxk.jpeg?q=70",
      price: 20000
    },
    {
      id: 4,
      title: "POCO",
      img: "https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg?q=70",
      price: 30000
    },
    {
      id: 5,
      title: "REDMI",
      img: "https://rukminim1.flixcart.com/image/312/312/l3dcl8w0/mobile/y/f/b/-original-imageg2qrjbhfqyb.jpeg?q=70",
      price: 10500
    },

  ]
  const [carditem, setcarditem] = useState([])
  const [total, setTotal] = useState(0)
  let handlecard = (item) => {
    setcarditem([...carditem, item])
    setTotal(total + item.price)
  }
  let handleRemove = (item) => {
    let remove = carditem.findIndex(obj => item.id === obj.id);
    carditem.splice(remove,1)
    setcarditem([...carditem])
    setTotal(total - item.price)
  }
  return (

    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 ">
            <h1>STORE</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10">
            <div className="row">

              {
                products.map((product) => {
                  return <Cart product={product} handlecard={handlecard} />

                })
              }
            </div>

          </div>
          <div className="col-lg-2">
            <div className="row text-center">
              <div className="col-12">
                <h2>CART</h2>

              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <ol className="list-group list-group-numbered">
                  {
                    carditem.map((item) => {
                      return <CartItem item={item} handleRemove={handleRemove} />
                    })
                  }
                </ol>

              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h3>TOTAL:RS.{total}</h3>

              </div>
            </div>
          </div>



        </div>


      </div>





    </>

  )
}

export default Store