import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
import PropTypes from 'prop-types';

const GifGrid = ({ category }) => {
  const { data: gifs, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className='animate__animated animate__fadeIn'>{category}</h3>
      {loading && (
        <p className='animate__animated animate__flash'>Loading...</p>
      )}
      <div className='card-grid'>
        {gifs.map(gif => (
          <GifGridItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
};

export default GifGrid;
