"use client";
import { Product } from "@/app/page";
import { getProduct } from "@/utils/getData";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./style.css";
import bagWhiteIcon from "../../../public/images/bag-white.svg";
import wishlistIcon from "../../../public/images/wishlist.svg";
import Image from "next/image";
import ImageSlider from "@/components/ImageSlider";
import Button from "@/components/Button";
import RatingSytem from "@/components/RatingSystem";
import { Button as AntdButton, Breadcrumb, Input, Space } from "antd";
import QuantityPicker from "@/components/QuantityPicker";
import Voucher from "@/components/Voucher";
import Slider from "react-slick";
import ProductTabSection from "@/components/ProductTabSection";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Item({ params }: { params: { itemid: number } }) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    getProduct(params.itemid)
      .then((response: any) => {
        console.log(response);
        setProduct(response);
      })
      .catch((errors) => console.log(errors));
  }, []);

  const images = product ? product.images : null;

  return (
    product && (
      <section
        className="mainPage product-section"
        style={{ minHeight: "0px", minWidth: "0px" }}
      >
        <Breadcrumbs>
          <Link href={"/"}>Home</Link>
          <Link href={`/category/${product.category}`}>{product.category}</Link>
          <Link href={`/item/${product.id}`}>{product.title}</Link>
        </Breadcrumbs>

        <section className="flex max-md:flex-col">
          <div className="slider w-full md:w-1/2">
            <ImageSlider images={images} />
          </div>

          <div className="details max-md:mt-14  w-full md:w-1/2 md:pl-6">
            <h2 className=" text-[#13101E]">{product.title}</h2>
            <h4 className=" text-[--md-gray]">{product.description}</h4>

            <RatingSytem rating={product.rating} />

            <div className="pricing flex items-center  mt-5">
              <h2 className="font-bold">${product.price}</h2>
              <s className=" text-[--light-grey]  ml-5">
                <h3 className="font-bold  text-[--light-grey]">
                  $
                  {Math.round(
                    product.price / (1 - product.discountPercentage / 100)
                  )}
                </h3>
              </s>
              <h4 className=" text-[#FF404B]  ml-5">
                {product.discountPercentage}% OFF!
              </h4>
            </div>

            <div className="flex flex-col md:flex-row mt-5 md:items-center">
              <div className="md:basis-2/5">
                <h4>Delivery Details</h4>
                <p className="text-[--md-gray]">
                  Check estimated delivery date/pickup option.
                </p>
              </div>
              <div className="max-md:mt-5 md:basis-3/5 voucherfield">
                <Space.Compact style={{ width: "100%" }}>
                  <Input
                    className="h-12"
                    size="large"
                    placeholder="Apply Valid Pincode"
                  />
                  <AntdButton
                    className="font-semibold"
                    size="large"
                    type="primary"
                  >
                    CHECK
                  </AntdButton>
                </Space.Compact>
              </div>
            </div>

            <div className="quantity mt-10 flex items-center">
              <h4 className="font-semibold">Quantity:</h4>
              <QuantityPicker min={1} max={product.stock} />
            </div>

            <div className="vouchers mt-12">
              <Slider
                  dots= {false}
                  infinite= {true}
                  speed= {500}
                  slidesToShow= {1.5}
                  swipeToSlide= {true}
                  centerPadding= {"100px"}
                responsive={[
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                    },
                  },
                ]}
              >
                <Voucher />
                <Voucher />
                <Voucher />
                <Voucher />
                <Voucher />
              </Slider>
            </div>

            <div className="cta flex mt-10">
              <Button className="basis-1/2 w-full">
                <Image alt="arrowIcon" src={bagWhiteIcon} />
                <span className="ml-2 text-[#fff]">Add to bag</span>
              </Button>
              <Button className="ml-5 basis-1/2 w-full" type={"outline"}>
                <Image alt="arrowIcon" src={wishlistIcon} />
                <span className="ml-2 text-[--md-blue]">Add To Wishlist</span>
              </Button>
            </div>
          </div>
        </section>

        <section>
          <div className="tabs mt-14">
            <ProductTabSection />
          </div>
        </section>
      </section>
    )
  );
}
