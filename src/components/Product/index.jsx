import React from "react";

import { Img, Text } from "components";

const Product = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[238px] sm:h-auto md:ml-[0] ml-[3px] mt-2.5 object-cover w-[99%] md:w-full"
          src="images/img_unsplashui3zmjpmrmm.png"
          alt="unsplashui3zmjp"
        />
        <Text
          className="mt-[17px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
          size="txtHindVadodaraBold24"
        >
          Electronics and Gadgets
        </Text>
        <div className="h-6 md:h-[33px] md:ml-[0] ml-[194px] mt-2.5 relative w-[32%]">
          <Text
            className="absolute left-[13%] text-blue_gray-900 text-sm top-[0]"
            size="txtHindVadodaraMedium14"
          >
            Show All
          </Text>
          <Img
            className="absolute bottom-[0] h-[23px] inset-x-[0] mx-auto"
            src="images/img_megaphone.svg"
            alt="megaphone"
          />
        </div>
      </div>
    </>
  );
};

Product.defaultProps = {};

export default Product;
