import React from 'react'
import PropTypes from 'prop-types'


import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

import 'animate.css'

const GifGrid = ({category}) => {
    
    const {data:images,loading} = useFetchGifs(category);

    return (
        <>
            <h2 className='animate__animated animate__zoomInUp'>{category}</h2>
            {
                loading && <h2 className='animate__animated animate__flash'>Cargando...</h2>
            }
            <div className="card-grid">
                {
                    images.map(({id,title,url}) => (
                        <GifGridItem key={id} id={id} title={title} url={url}/>
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid
