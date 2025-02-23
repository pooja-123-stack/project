import React, { useState } from 'react';

function Home() {
  const [content, setContent] = useState('');

  const updateContent = (event) => {
    const selectedValue = event.target.value;
    let newContent = '';

    switch (selectedValue) {
      case '1':
        newContent = "<h3>Maharastrian Cuisine</h3><p>Delicious dishes like Pav Bhaji, Vada Pav, and more!</p>";
        break;
      case '2':
        newContent = "<h3>South Indian Cuisine</h3><p>Enjoy dishes like Dosa, Idli, and Sambar!</p>";
        break;
      case '3':
        newContent = "<h3>Chinese Cuisine</h3><p>Popular dishes like Fried Rice, Manchurian, and more!</p>";
        break;
      case '4':
        newContent = "<h3>Rajasthani Cuisine</h3><p>Taste rich dishes like Dal Baati Churma and Gatte ki Sabzi!</p>";
        break;
      case '5':
        newContent = "<h3>Gujarati Cuisine</h3><p>Savor Dhokla, Khandvi, and other savory treats!</p>";
        break;
      default:
        newContent = "<p>Please select a cuisine.</p>";
    }

    setContent(newContent);
  };

  return (
    <div>
      <select className="form-select" aria-label="Default select example" onChange={updateContent}>
        <option selected>Most Popular items</option>
        <option value="1">Maharastrian</option>
        <option value="2">South Indian</option>
        <option value="3">Chinese</option>
        <option value="4">Rajasthani</option>
        <option value="5">Gujarati</option>
      </select>

      {/* Dynamically rendered content */}
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
}

export default Home;
