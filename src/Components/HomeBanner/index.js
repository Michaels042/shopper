import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HomeBanner = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
    };

  return (
        <div className="homeBannerSection">
            <Slider {...settings}>
               
                <div className="item">
                    <img src="https://www.anitadongre.com/on/demandware.static/-/Sites-AD-INDIA-Library/default/dw0dc2944c/images/Home%20page/Feb_2025/Edit_Edit_WEB_18_Feb_2025.jpg" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://www.anitadongre.com/on/demandware.static/-/Sites-AD-INDIA-Library/default/dwc47f147c/images/Home%20page/Feb_2025/Desktop_Priyanka_Banner_14_Feb_2025.jpg" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://www.anitadongre.com/on/demandware.static/-/Sites-AD-INDIA-Library/default/dw757e1c54/images/Home%20page/Jan_2025/Ready_to_ship_WEB.jpg" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://www.anitadongre.com/on/demandware.static/-/Sites-AD-INDIA-Library/default/dwc47f147c/images/Home%20page/Feb_2025/Desktop_Priyanka_Banner_14_Feb_2025.jpg" className="w-100"/>
                </div>
                
            </Slider> 
        </div> 
  );
}

export default HomeBanner;