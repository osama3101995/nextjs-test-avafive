import Image from "next/image";
import React from "react";
import jumbotronPng from "../../public/images/jumbotron.png";
import arrowIcon from "../../public/images/arrow.svg";
import Button from "../Button";

const Jumbotron = () => {
  return (
    <section className="h-[25rem] overflow-hidden rounded-3xl relative">
      <div className="absolute w-full h-full flex items-center justify-end">
        <div className="bg-[#DEDEDEB2] px-11 pt-6 pb-14 rounded-l-3xl">
          <div className="sm:w-3/4">
            <h1 className="font-bold text-[--md-blue]">Carry your Funk</h1>
            <h3 className="font-medium mt-5 text-[--md-blue]">
              Trendy handbags collection for your party animal
            </h3>

            <div className="mt-8">
              <Button>
                <Image alt="arrowIcon" src={arrowIcon} />
                <span className="ml-2 text-[#fff]">See more</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Image alt="jumbotronPng" src={jumbotronPng} />
    </section>
  );
};

export default Jumbotron;
