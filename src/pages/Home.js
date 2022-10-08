import React from 'react'
import { Link } from 'react-router-dom'



function Home() {
    return (
        <>
            <div className="container">
                <div id="header">
                    <h3>RELINCE</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div id="content1">
                            <h4 className="heading">WELCOME!!!</h4>
                            <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam quam eius eligendi, modi dolore, harum totam ipsa reiciendis in aperiam doloremque incidunt exercitationem minima ea excepturi natus sequi? Nam!</p>
                            <button className="btn">READ MORE...</button></div>
                    </div>
                    <div className="col-lg-4">
                        <div id="content2">
                            <h4 className="heading">WELCOME!!!</h4>
                            <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam quam eius eligendi, modi dolore, harum totam ipsa reiciendis in aperiam doloremque incidunt exercitationem minima ea excepturi natus sequi? Nam!</p>
                            <button className="btn">READ MORE...</button></div>
                    </div>
                    <div className="col-lg-4">
                        <div id="content3">
                            <h4 className="heading">WELCOME!!!</h4>
                            <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laboriosam quam eius eligendi, modi dolore, harum totam ipsa reiciendis in aperiam doloremque incidunt exercitationem minima ea excepturi natus sequi? Nam!</p>
                            <button className="btn">READ MORE...</button></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div id="bottom1">
                            <h3>MY SAMPLE WEBSITE</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. aspernatur ab voluptatibus laboriosam deleniti impedit ducimus, dicta nostrum laborum modi Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, laudantium quia consequatur reprehenderit, vel quis dignissimos minus quam consequuntur necessitatibus impedit minima illum magni nam qui blanditiis et quo hic. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <h3>MY SAMPLE WEBSITE</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. dicta nostrum laborum modi Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, laudantium quia consequatur reprehenderit, vel quis dignissimos minus quam consequuntur necessitatibus impedit minima illum magni nam qui blanditiis et quo hic. Lorem ipsum dolor sit amet consectetur </p>
                            <Link to={'#'}>Read More..</Link>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div id="bottom2">
                            <h2>My Sample WEBSITE</h2>
                            <img src="https://rukminim1.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=70" alt="img1" />

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div id="footer">

                            <p>@copyright-2022</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
