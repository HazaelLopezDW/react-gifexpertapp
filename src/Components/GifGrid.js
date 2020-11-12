import React from 'react';
import useFetchGifs from '../Hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

 const GifGrid = ({category}) => {

    const {data:images, loading } = useFetchGifs( category );

    return (
        <React.Fragment>
            <h3 className='animate__animated animate__zoomIn'>{category}</h3>
            {loading && <p className='animate__animated animate__fadeIn'>Loading</p>}
            <div className='card-grid'>
                {
                    images.map( img => (
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
                </div>    
        </React.Fragment>
    )
}

export default GifGrid;