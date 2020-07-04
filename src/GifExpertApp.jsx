import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {
  // const [categories, setCategories] = useState(['One Punch']);
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <button>Add category</button>
      <ol>
        {categories.map(cat => (
          <GifGrid key={cat} category={cat} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
