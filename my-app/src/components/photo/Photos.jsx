import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

// https://picsum.photos/v2/list
// https://picsum.photos/v2/list?page=2&limit=100

const getRandomPhotos = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const Photos = () => {
  // useEffect(callback,[dependencies]);
  // useEffect(function callback() {
  //   // side-effect
  const [randomPhotos, setRandomPhoto] = useState([]);
  const [nextPage, setNextPage] = useState(1);

  const handleLoadMorePhotos = useRef({});

  handleLoadMorePhotos.current = async () => {
    const images = await getRandomPhotos(nextPage);
    const newPhotos = [...randomPhotos, ...images];
    setRandomPhoto(newPhotos);
    setNextPage(nextPage + 1);
  };

  useEffect(() => {
    // side-effect
    handleLoadMorePhotos.current();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => (
            <div
              key={item.download_url}
              className="p-3 bg-white shadow-md rounded-lg h-[300px] "
            >
              <img
                className="w-full h-full object-cover rounded-lg"
                src={item.download_url}
                alt={item.author}
              />
            </div>
          ))}
      </div>
      <div className="text-center my-4">
        <button
          onClick={handleLoadMorePhotos.current}
          className="inline-block px-8 py-4 bg-purple-500 text-white rounded-lg"
        >
          Load-More
        </button>
      </div>
    </div>
  );
};

export default Photos;
