import HomeBanner from "../../Components/HomeBanner";
import React from "react";
import banner1 from '../../assets/images/banner1.png';
import { Button } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";

   const Home =()=>{
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
                        </div>
                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">BEST SELLERS</h3>
                                    <p className="text-light text-sml mb-0">Do not miss the current offer. Open, untill the end of March</p>
                                </div>
                                <Button className="viewAllBtn ml-auto">View All<IoIosArrowRoundForward/></Button>

                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </>
    );
   }

   export default Home;