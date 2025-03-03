import HomeBanner from "../../Components/HomeBanner";
import React from "react";
import banner1 from '../../assets/images/banner1.png';
import banner2 from '../../assets/images/banner2.jpg';
import { Button, Rating } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import ProductItem from "../../Components/ProductItem";




   const Home = () => {

    var productSliderOptions = {
       
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
    };

    return(
        <>
            <HomeBanner/>
            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="banner">
                                <img src={banner1} className="cursor w-100"/>
                            </div>
                            <div className="banner mt-3">
                                <img src={banner2} className="cursor w-100"/>
                            </div>
                        </div>
                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">BEST SELLERS</h3>
                                    <p className="text-light text-sml mb-0">Do not miss the current offer. Open, untill the end of March</p>
                                </div>
                                <Button className="viewAllBtn ml-auto">View All<IoIosArrowRoundForward/></Button>

                            </div>

                            <div className="product_row w-100 mt-4">
                                <Swiper
                                slidesPerView={4}
                                spaceBetween={0}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Navigation]}
                                className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                
                                </Swiper>

                            </div>

                            <div className="d-flex align-items-center mt-5">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                                    <p className="text-light text-sml mb-0">New products with updated stocks.</p>
                                </div>
                                <Button className="viewAllBtn ml-auto">View All<IoIosArrowRoundForward/></Button>

                            </div>

                            <div className="product_row w-100 mt-4">
                                <Swiper
                                slidesPerView={4}
                                spaceBetween={0}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Navigation]}
                                className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                
                                </Swiper>

                            </div>
                        </div>
                        
                           
                        


                    </div>

                </div>

            </section>
        </>
    );
   }

   export default Home;