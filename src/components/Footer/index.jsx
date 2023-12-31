import React from "react";

import { Button, Img, Input, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_group514.svg')" }}
      >
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[54px] mt-[23px] w-[92%] md:w-full">
          <div className="flex flex-col items-center justify-start md:mt-0 mt-1 w-[36%] md:w-full">
            <div className="flex flex-col gap-[21px] justify-start w-full">
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[26px] w-[67%] md:w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[0.36px]"
                  size="txtPlayfairDisplayRomanRegular36"
                >
                  ShopSavvy+
                </Text>
                <Text
                  className="mt-[9px] text-base text-white-A700 tracking-[0.32px] uppercase"
                  size="txtHindVadodaraSemiBold16WhiteA700"
                >
                  Get In Touch
                </Text>
                <div className="flex flex-col items-start justify-start mt-[15px] w-full">
                  <div className="flex flex-row gap-5 items-start justify-start w-[48%] md:w-full">
                    <Img
                      className="h-[25px] w-6"
                      src="images/img_icroundmail.svg"
                      alt="icroundmail"
                    />
                    <Text
                      className="mt-1 text-sm text-white-A700"
                      size="txtCalibriLight14"
                    >
                      shopsavvy+@gmail.com
                    </Text>
                  </div>
                  <div className="flex flex-row gap-5 items-center justify-start mt-[15px] w-[46%] md:w-full">
                    <Img
                      className="h-[25px] w-6"
                      src="images/img_icroundcall.svg"
                      alt="icroundcall"
                    />
                    <Text
                      className="text-sm text-white-A700"
                      size="txtCalibriLight14"
                    >
                      (303) 555-0123
                    </Text>
                  </div>
                  <div className="flex flex-row gap-5 items-center justify-start mt-[17px] w-full">
                    <Img
                      className="h-[25px] w-6"
                      src="images/img_icroundlocationon.svg"
                      alt="icroundlocation"
                    />
                    <Text
                      className="text-sm text-white-A700"
                      size="txtCalibriLight14"
                    >
                      2715 Ash Dr. San Jose, South Dakota 83475
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                <Input
                  name="language_Two"
                  placeholder="Enter Your Email to  subscribe"
                  className="font-hindvadodara p-0 placeholder:text-white-A700 text-base text-left tracking-[0.32px] uppercase w-full"
                  wrapClassName="sm:flex-1 w-[67%] sm:w-full"
                  type="email"
                  shape="square"
                  color="white_A700"
                  size="xs"
                  variant="outline"
                ></Input>
                <Button
                  className="border border-solid border-white-A700 cursor-pointer font-hindvadodara font-semibold min-w-[143px] text-base text-center tracking-[0.32px] uppercase"
                  shape="square"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                >
                  Send{" "}
                </Button>
              </div>
            </div>
          </div>
          <div className="h-[300px] relative w-2/5 md:w-full">
            <Img
              className="h-[300px] m-auto object-cover rounded-[30px] w-full"
              src="images/img_rectangle42.png"
              alt="rectangleFortyTwo"
            />
            <div className="absolute bg-white-A700 flex flex-col items-start justify-start left-[7%] p-[7px] shadow-bs2 top-[9%]">
              <Text
                className="leading-[134.80%] md:ml-[0] ml-[3px] text-base text-gray-800"
                size="txtHindVadodaraRegular16Gray800"
              >
                <span className="text-gray-800 font-roboto text-left font-bold">
                  Texas
                </span>
                <span className="text-gray-800 font-roboto text-left font-normal">
                  <>
                    <br />
                    United States
                  </>
                </span>
              </Text>
              <Text
                className="ml-1 md:ml-[0] text-blue-400 text-sm"
                size="txtHindVadodaraRegular14"
              >
                View Larger Map
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
