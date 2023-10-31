"use client";

import React, { useEffect, useState } from "react";
import EmergencyBanner from "@/components/EmergencyBanner";
import Jumbotron from "@/components/Jumbotron";
import CarouselItem from "@/components/CarouselItem";
import { getProducts } from "@/utils/getData";
import Slider from "react-slick";
import rightArrow from "../public/images/chevron-right.svg";
import Image from "next/image";

export interface Product {
  id: number;
  price: number;
  title: string;
  quantity: number;
  category : string;
  brand: string;
  thumbnail: string;
  description : string;
  rating : number;
  stock : number;
  discountPercentage : number;
  images: Array<string>;
}

export default function Home() {
  const [products, setProducts] = useState([]);
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    swipeToSlide: true,
    centerPadding: "100px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  useEffect(() => {
    getProducts()
      .then((data: any) => {
        // Do something with the products here
        setProducts(data.products);
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  }, []);

  return (
    <div className="w-full">
      <EmergencyBanner />
      <div className="flex m-5 flex-col lg:items-center lg:justify-between">
        <Jumbotron />

        <section className="w-full mt-16 items-start ">
          <div className="flex justify-between">
            <h3 >New Arrivals</h3>
            <div className="flex items-center cursor-pointer">
              <span className="font-semibold">View All</span>
              <Image alt="rightArrow" src={rightArrow}/>
            </div>
          </div>
          <div>
            <Slider {...carouselSettings}>
              {products.length &&
                products.map((product: Product) => {
                  return <CarouselItem key={product.id} {...product} />;
                })}
            </Slider>
          </div>
        </section>
      </div>
    </div>
  );
}
