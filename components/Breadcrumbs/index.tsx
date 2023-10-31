import Image from "next/image";
import React, { Children, ReactNode } from "react";
import rightArrowSmall from "../../public/images/chevron-right-small.svg";
import "./style.css";

const ArrowImage = () => <Image alt="rightArrowSmall" src={rightArrowSmall} />;

const Breadcrumbs = ({ children }: { children: ReactNode }) => {
  const arrayChildren = Children.toArray(children);
  return (
    <div className="breadcrumbs flex items-start">
      {Children.map(arrayChildren, (childEl, index) => {
        const isLast = index === arrayChildren.length - 1;

        if (!isLast) {
          return (
            <>
              {childEl}
              <ArrowImage />
            </>
          );
        }

        return <>{childEl}</>;
      })}
    </div>
  );
};

export default Breadcrumbs;
