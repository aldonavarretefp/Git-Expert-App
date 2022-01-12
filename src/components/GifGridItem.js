import React from 'react'
import PropTypes from 'prop-types'

import 'animate.css';

const GifGridItem = ({title,id,url}) => {

    return (
        <div className='card animate__animated animate__bounceInLeft' >
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {

}

export default GifGridItem
