import React from "react";

import { Button, Img, Text } from "components";

const Aboutus = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[574px] md:h-auto object-cover"
          src="images/img_unsplashtitu0k1e0ue.png"
          alt="unsplashtitu0kOne"
        />
        <div className="flex flex-col items-start justify-start md:mt-0 mt-[61px]">
          <Text
            className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 tracking-[-0.48px]"
            size="txtHindVadodaraBold48"
          >
            About Us
          </Text>
          <Img
            className="h-[7px] ml-40 md:ml-[0] mt-[9px]"
            src="images/img_settings.svg"
            alt="settings"
          />
          <Text
            className="leading-[146.30%] ml-1 md:ml-[0] mt-[22px] text-[17px] text-blue_gray-900_a8 tracking-[0.34px] w-full"
            size="txtHindVadodaraRegular17"
          >
            <>
              Your ultimate destination for convenient, cost-effective, and
              quality-driven shopping. Experience seamless browsing through our
              diverse range of products, all curated for your satisfaction. With
              unbeatable prices, exceptional customer service, and a commitment
              to constant improvement, we&#39;re here to redefine your shopping
              experience.
            </>
          </Text>
          <Button
            className="cursor-pointer font-bold font-hindvadodara min-w-[207px] ml-0.5 md:ml-[0] mt-32 text-[17px] text-center tracking-[0.34px] uppercase"
            shape="round"
            color="blue_gray_900"
            size="sm"
            variant="fill"
          >
            Explore More and more 
          </Button>
        </div>
      </div>
      <div>Hello</div>
    </>
  );
};

Aboutus.defaultProps = {};

export default Aboutus;
