import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css'; 
import car1 from '../images/imghp.png'
import car2 from '../images/car2.png'
import car3 from '../images/car3.png'
import Navbar from '../Components/NavBar';


const images = [
    car1, // Thay thế bằng URL hình ảnh thực tế của bạn
    car2,
    car3,
    // Thêm các hình ảnh ô tô khác nếu cần
  ];
const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000); // Thay đổi mỗi 2 giây
  
      return () => clearInterval(intervalId); // Dọn dẹp interval khi component unmount
    }, []);
  
    return (
      <div className="carousel">
        <img src={images[currentIndex]} alt="Car" className="carousel-image" />
        {/* <Navbar></Navbar> */}
        <div className="carousel-indicator">
          {images.map((_, index) => (
            <span
              key={index}
              className={`indicator-dot ${
                index === currentIndex ? 'active' : ''
              }`}
            ></span>
          ))}
        </div>
      </div>
    );
  };

  export default Carousel