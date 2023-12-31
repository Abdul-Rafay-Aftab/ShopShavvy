import React from "react";

import { Img, Text } from "components";

const NavBar = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="md:h-11 h-6 md:mt-0 my-5 relative w-[30%] md:w-full">
          <div className="absolute bg-amber-400 bottom-[0] h-0.5 left-[0] w-[6%]"></div>
          <Text
            className="absolute h-full inset-[0] justify-center m-auto text-base text-blue_gray-900 tracking-[0.16px] w-max"
            size="txtHindVadodaraRegular16"
          >
            Home About Us All Products Contact Us
          </Text>
        </div>
        <Text
          className="mb-[13px] md:ml-[0] ml-[190px] md:mt-0 mt-[19px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl tracking-[0.24px]"
          size="txtPlayfairDisplayRomanBold24"
        >
          ShopSavvy+
        </Text>
        <div className="flex md:ml-[0] ml-[420px] relative w-[14%] md:w-full">
          <div className="flex my-auto w-[67%]">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-16 items-center justify-start my-auto p-[22px] sm:px-5 w-[52%]"
              style={{ backgroundImage: "url('images/img_group17.svg')" }}
            >
              <div className="flex flex-col items-center justify-start w-[56%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-5"
                        src="images/img_facebook.svg"
                        alt="facebook"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-16 items-center justify-start ml-[-3.76px] my-auto p-[21px] sm:px-5 w-[52%] z-[1]"
              style={{ backgroundImage: "url('images/img_group17.svg')" }}
            >
              <div className="flex flex-col h-[18px] items-center justify-start w-[18px]">
                <div className="flex flex-col h-[18px] items-center justify-start w-[18px]">
                  <div className="flex flex-col h-[18px] items-center justify-start w-[18px]">
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_link.svg"
                      alt="link"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat flex flex-col h-16 items-center justify-start ml-[-1.76px] my-auto p-[18px] w-[35%] z-[1]"
            style={{ backgroundImage: "url('images/img_group17.svg')" }}
          >
            <Img
              className="h-6 w-6"
              src="images/img_16304616191553750378.svg"
              alt="163046161915537"
            />
          </div>
        </div>
      </header>
    </>
  );
};

NavBar.defaultProps = {};

export default NavBar;
