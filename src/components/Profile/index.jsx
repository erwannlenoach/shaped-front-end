import React from 'react'
import img from 'assets/surfboard.jpg'
import './style.scss'



const Cards = () => {

    const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    const paragraph2 = 'Quisque id turpis pharetra, aliquam quam ullamcorper, eleifend magna. Donec mollis lobortis augue vitae euismod. Nullam quis velit vestibulum, faucibus velit sit amet, egestas sapien. Mauris est felis, lobortis eu sapien nec, sodales volutpat ligula. Integer laoreet aliquam nibh, ac aliquet orci tristique eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a suscipit mi, ut dignissim magna. Nulla facilisi. Phasellus eleifend convallis enim, porttitor dignissim ligula porta vel. Maecenas sit amet tortor quis justo vulputate tristique. Aliquam tempus odio eu neque posuere, malesuada tristique diam consectetur. Mauris accumsan tortor urna, id sagittis tellus facilisis vel. Phasellus vel imperdiet leo. Donec euismod tellus nec metus pretium elementum. Nulla dictum, risus eu auctor fermentum, neque quam finibus libero, ut aliquam diam dui sed nisl.'


    return (

        <div class='container-grid'>
            <h2>Mon Profile</h2>
            <div class="card-detailed">
                <div class="img-card">
                    <img class="img-item" src={img} />
                </div>
                <div class="card-text">
                    <h3 id="title-card">Name</h3>
                    <p id="paragraph-card">Information</p>
                    <p id="paragraph-card">Telephone</p>

                </div>
            </div>

        </div>




    )

}

export default Cards