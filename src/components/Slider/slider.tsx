// WORK IN PROGRESS

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const slider = () => {
  const slider = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel responsive={slider}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>
  )
}


{/* <div id="carouselExample" className="carousel slide">
   <div className="carousel-inner">
     <div className="carousel-item active">
       <img src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8I37NtDffNV7AZlDa7uDvvqhovU.jpg" className="d-block w-100" alt="first" />
     </div>
     <div className="carousel-item">
       <img src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg" className="d-block w-100" alt="second" />
     </div>
     <div className="carousel-item">
       <img src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg" className="d-block w-100" alt="third" />
     </div>
   </div>
   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
     <span className="visually-hidden">Previous</span>
   </button>
   <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
     <span className="carousel-control-next-icon" aria-hidden="true"></span>
     <span className="visually-hidden">Next</span>
  </button>
 </div></> */}