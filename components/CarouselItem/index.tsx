import { Product } from "@/app/page";
import Image from "next/image";
import React from "react";
import favouriteIcon from "../../public/images/favourite.svg";
import Link from "next/link";

const CarouselItem = (props: Product) => {

  return (
    <div className="carouselItem pt-5 pr-5">
      <Image
        width={1000}
        height={1000}
        className="w-[230px] h-[230px] object-cover rounded-lg"
        alt="item-thumbnail"
        src={props.images[0]}
      />
      <div className="flex justify-between items-start mt-2">
        <Link href={`/item/${props.id}`}>
        <article>
          <p>{props.brand}</p>
          <span className="mt-2">{props.title}</span>
          <p className=" mt-2">${props.price}</p>
        </article>
        </Link>
        <Image className="cursor-pointer" alt="favouriteIcon" src={favouriteIcon} />
      </div>
    </div>
  );
};

export default CarouselItem;
