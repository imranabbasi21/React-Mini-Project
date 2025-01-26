import React, { useState, useEffect } from 'react';
import './Banner.css';

function Banner() {
  const videos = [
      "https://www.toyota.com/content/dam/toyota/vehicles/2025/camry/mlp/welcome-mat/CAM_MY25_Desktop.mp4?wid=1920", 
    // "https://www.toyota.com/content/dam/toyota/homepage/marquee/2025/RAV_MY25_NA-CAMP_Welcome_Mat_TCOM_Desktop_New_ENG_1920x796_TYTW2739000H.mp4?wid=1920", 
    // "https://videocdn.cdnpk.net/videos/64c7fb4f-10f8-4c58-9e32-be875cb0b832/horizontal/previews/watermarked/large.mp4",
  ];

  const images = [
    "https://cdn.carhp.com/images/news/featured_2024-kia-sorento-gets-striking-design-and-innovative-features-with-x-pro-trim_1707107679.png?mode=crop&amp;overlay=https://cdn.carhp.com/images/carhp_logo_white.png&amp;overlay_top=10&amp;overlay_left=10&amp;overlay_width_pct=0.1&amp;width=1260&amp;height=630",
    "https://avatars.dzeninfra.ru/get-zen_doc/3514290/pub_616d394c9cf9e4251b5e0906_6183c68ee588c64ad298018b/scale_1200",
    "https://avatars.mds.yandex.net/get-mpic/4355034/img_id7534343570147462297.jpeg/orig",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoFinished, setVideoFinished] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };


  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };


  const handleVideoEnd = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1); 
    } else {
      setVideoFinished(true); 
    }
  };


  useEffect(() => {
    if (videoFinished) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [videoFinished]);

  useEffect(() => {

    const timer = setTimeout(() => {
      if (currentVideoIndex < videos.length - 1) {
        setCurrentVideoIndex(currentVideoIndex + 1); 
      } else {
        setVideoFinished(true); 
      }
    }, 45000); 

    return () => clearTimeout(timer);
  }, [currentVideoIndex]);

  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Welcome to My Car Website</h1>
        <p>We will teach you to drive</p>
        <a href="#" className="btnExplore">
          You To Drive
        </a>
      </div>

      <div className="carImg">
        {videoFinished ? (
          <div className="slider">
            <img
              src={images[currentIndex]}
              alt="Car"
              className="slider-image"
            />
          </div>
        ) : (
          <div className="video-container">
            <video
              className="banner-video"
              autoPlay
              muted
              onEnded={handleVideoEnd}
            >
              <source
                src={videos[currentVideoIndex]} 
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        <div className="ArrowsDv">
          <button className="prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}




export default Banner;
