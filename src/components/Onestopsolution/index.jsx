import React from "react";

import { Button, Img, Text } from "components";

const Onestopsolution = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[65px] items-center justify-start md:mt-0 mt-[70px] w-[41%] md:w-full">
          <Text
            className="leading-[99.80%] md:text-5xl text-[87px] text-blue_gray-900 tracking-[-0.87px] w-[97%] sm:w-full"
            size="txtHindVadodaraSemiBold87"
          >
            One Stop Solution...
          </Text>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="bg-amber-400 h-5 ml-0.5 md:ml-[0] w-[57%]"></div>
            <Text
              className="leading-[146.30%] ml-0.5 md:ml-[0] mt-6 text-[17px] text-blue_gray-900_a8 tracking-[0.34px] w-full"
              size="txtHindVadodaraRegular17"
            >
              We are capatilizing on growing digital transformation in the
              retail industry and create a one-stop solution for consumers
              seeking convenience, cost-effectiveness and personalized shopping
              experiences.
            </Text>
            <div className="h-[66px] md:h-[79px] mt-[13px] relative w-[41%]">
              <Text
                className="m-auto text-[17px] text-white-A700 tracking-[0.34px] uppercase"
                size="txtHindVadodaraBold17"
              >
                Get Started
              </Text>
              <Button
                className="absolute cursor-pointer font-bold font-hindvadodara h-full inset-[0] justify-center m-auto min-w-[207px] text-[17px] text-center tracking-[0.34px] uppercase"
                shape="round"
                color="blue_gray_900"
                size="sm"
                variant="fill"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[663px] items-center justify-start p-[43px] md:px-10 sm:px-5 w-[55%] md:w-full"
          style={{ backgroundImage: "url('images/img_group21.svg')" }}
        >
          <Img
            className="h-[574px] md:h-auto object-cover rounded-[287px] w-full"
            src="images/img_unsplashflpc9vocj4.png"
            alt="unsplashflpc9vo"
          />
        </div>
      </div>
    </>
  );
};

Onestopsolution.defaultProps = {};

export default Onestopsolution;
