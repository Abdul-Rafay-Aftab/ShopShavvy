import React from "react";

import { Img, List, Text } from "components";

const Clients = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[58px] items-center justify-start w-full">
          <div className="md:h-[106px] h-[107px] relative w-[59%] sm:w-full">
            <div className="absolute bg-yellow-700 bottom-[0] h-2.5 right-[1%] w-[22%]"></div>
            <Text
              className="absolute h-max inset-[0] justify-center leading-[110.80%] m-auto text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center tracking-[-0.48px]"
              size="txtHindVadodaraBold48"
            >
              <span className="text-blue_gray-900 font-hindvadodara font-bold">
                <>
                  Happy Buyers
                  <br />
                </>
              </span>
              <span className="text-blue_gray-900 font-hindvadodara font-light">
                What Our Clients Are Saying
              </span>
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-[69px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
            orientation="horizontal"
          >
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[19px] shadow-bs1 w-full">
              <div className="flex flex-col gap-[18px] justify-start mb-[19px] mt-[5px] w-[97%] md:w-full">
                <Img
                  className="h-16 w-16"
                  src="images/img_19399522241579780463.svg"
                  alt="193995222415797"
                />
                <div className="flex flex-col gap-[5px] items-start justify-start ml-2.5 md:ml-[0] w-[98%] md:w-full">
                  <Text
                    className="leading-[159.30%] text-base text-blue_gray-900 tracking-[0.32px] w-full"
                    size="txtHindVadodaraRegular16"
                  >
                    Home and Living section impresses with high-quality
                    furniture, decor, and kitchen essentials. Customers love the
                    reasonable prices, quick delivery, and easy browsing
                    experience, crediting the site for transforming their living
                    spaces.
                  </Text>
                  <div className="flex flex-row gap-[7px] items-center justify-start w-[15%] md:w-full">
                    <div className="bg-amber-400 h-[3px] my-2.5 w-1/5"></div>
                    <Text
                      className="text-base text-black-900 tracking-[0.32px]"
                      size="txtHindVadodaraSemiBold16"
                    >
                      Allen
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[19px] shadow-bs1 w-full">
              <div className="flex flex-col gap-[18px] justify-start mb-[19px] mt-[5px] w-[97%] md:w-full">
                <Img
                  className="h-16 w-16"
                  src="images/img_19399522241579780463.svg"
                  alt="193995222415797"
                />
                <div className="flex flex-col gap-[5px] items-start justify-start ml-2.5 md:ml-[0] w-[98%] md:w-full">
                  <Text
                    className="leading-[159.30%] text-base text-blue_gray-900 tracking-[0.32px] w-full"
                    size="txtHindVadodaraRegular16"
                  >
                    Shopping for electronics was a fantastic experience. The
                    range of products, from smartphones to gaming consoles, is
                    unparalleled. Competitive prices, combined with top-notch
                    quality, made my purchase satisfying.
                  </Text>
                  <div className="flex flex-row gap-[7px] items-center justify-start w-[14%] md:w-full">
                    <div className="bg-amber-400 h-[3px] my-2.5 w-[21%]"></div>
                    <Text
                      className="text-base text-black-900 tracking-[0.32px]"
                      size="txtHindVadodaraSemiBold16"
                    >
                      Jhon
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

Clients.defaultProps = {};

export default Clients;
