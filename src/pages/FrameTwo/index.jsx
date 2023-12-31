import React from "react";

import { Button, Img, Input, List, Text } from "components";
import Aboutus from "components/Aboutus";
import Clients from "components/Clients";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import Onestopsolution from "components/Onestopsolution";
import Product from "components/Product";

const FrameTwoPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-hindvadodara items-center justify-end mx-auto sm:pr-5 pr-[23px] pt-[23px] w-full">
        <div className="flex flex-col md:gap-10 gap-[77px] items-center justify-start max-w-[1309px] mt-[3px] mx-auto md:px-5 w-full">
          <NavBar className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
          <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
            <Onestopsolution className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full" />
          </div>
        </div>
        <div className="flex flex-col justify-end max-w-[1438px] mx-auto md:px-5 w-full">
          <div className="sm:h-[575px] h-[578px] md:h-[825px] mr-[167px] relative w-[89%] md:w-full">
            <div className="absolute bg-blue-50 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[59px] md:px-10 sm:px-5 rounded-tr-[400px] w-[99%]">
              <div className="flex flex-col justify-start md:ml-[0] ml-[206px] mt-[50px] w-[59%] md:w-full">
                <Text
                  className="leading-[106.30%] md:ml-[0] ml-[325px] text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 text-center tracking-[-0.48px]"
                  size="txtHindVadodaraBold48"
                >
                  <span className="text-blue_gray-900 font-hindvadodara font-bold">
                    <>
                      What Best
                      <br />
                    </>
                  </span>
                  <span className="text-blue_gray-900 font-hindvadodara font-light">
                    For You{" "}
                  </span>
                </Text>
                <div className="bg-amber-400 h-2.5 md:ml-[0] ml-[466px] mr-[34px] mt-[13px] w-1/4"></div>
                <List
                  className="sm:flex-col flex-row gap-[39px] grid md:grid-cols-1 grid-cols-2 justify-center mt-[71px] w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 flex flex-1 flex-col items-start justify-center p-[17px] rounded-[10px] shadow-bs w-full">
                    <div className="bg-red-100 flex flex-col items-center justify-start ml-0.5 md:ml-[0] p-[9px] rounded-[10px] w-[19%] md:w-full">
                      <Img
                        className="h-[30px] w-[30px]"
                        src="images/img_website49431.svg"
                        alt="website49431"
                      />
                    </div>
                    <Text
                      className="ml-0.5 md:ml-[0] mt-3 text-base text-blue_gray-900 tracking-[0.88px] uppercase"
                      size="txtHindVadodaraBold16"
                    >
                      Advanced Technologies
                    </Text>
                    <Text
                      className="leading-[145.30%] mb-[7px] mt-1 text-[15px] text-blue_gray-900_a8 tracking-[0.30px] w-full"
                      size="txtHindVadodaraLight15"
                    >
                      {" "}
                      Augmented Reality, Machine Learning and Artificial
                      intelligence helps revolutionized shopping experience
                    </Text>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-start justify-center p-[13px] rounded-[10px] shadow-bs w-full">
                    <div className="bg-orange-50 flex flex-col items-center justify-end md:ml-[0] ml-[11px] mt-[5px] p-[5px] rounded-[10px] w-[19%] md:w-full">
                      <Img
                        className="h-[34px] mt-1 w-[34px]"
                        src="images/img_computer.svg"
                        alt="computer"
                      />
                    </div>
                    <Text
                      className="md:ml-[0] ml-[11px] mt-3 text-base text-blue_gray-900 tracking-[0.88px] uppercase"
                      size="txtHindVadodaraBold16"
                    >
                      Convenience
                    </Text>
                    <Text
                      className="leading-[145.30%] mb-[11px] md:ml-[0] ml-[9px] mt-1 text-[15px] text-blue_gray-900_a8 tracking-[0.30px] w-[97%] sm:w-full"
                      size="txtHindVadodaraLight15"
                    >
                      Seamless shopping, where convenience meets choice at your
                      fingertips.
                    </Text>
                  </div>
                </List>
              </div>
            </div>
            <div className="absolute bg-white-A700 bottom-[10%] flex flex-col items-start justify-center p-[17px] right-[0] rounded-[10px] shadow-bs w-1/4">
              <div className="bg-light_blue-50 flex flex-col items-end justify-end ml-0.5 md:ml-[0] p-[5px] rounded-[10px] w-[19%] md:w-full">
                <Img
                  className="h-9 mt-0.5 w-9"
                  src="images/img_mobilephone1164.svg"
                  alt="mobilephone1164"
                />
              </div>
              <Text
                className="ml-0.5 md:ml-[0] mt-3 text-base text-blue_gray-900 tracking-[0.88px] uppercase"
                size="txtHindVadodaraBold16"
              >
                Cost-Effectiveness
              </Text>
              <Text
                className="leading-[145.30%] mb-[7px] mt-1 text-[15px] text-blue_gray-900_a8 tracking-[0.30px] w-full"
                size="txtHindVadodaraLight15"
              >
                Quality products, unbeatable prices – your gateway to smart and
                cost-effective shopping
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[47px] mr-[97px] mt-[241px] w-[90%] md:w-full">
            <Aboutus className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full" />
          </div>
          <div className="bg-red-100_4c flex flex-col justify-start md:ml-[0] ml-[194px] mt-[89px] p-[51px] md:px-10 sm:px-5 rounded-tr-[400px] w-[87%] md:w-full">
            <Text
              className="md:ml-[0] ml-[537px] text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 tracking-[-0.48px]"
              size="txtHindVadodaraBold48"
            >
              Our Products
            </Text>
            <Img
              className="h-[7px] md:ml-[0] ml-[724px] mt-[7px]"
              src="images/img_vector11.svg"
              alt="vectorEleven"
            />
            <div className="md:h-[1270px] h-[365px] sm:h-[483px] mb-[21px] md:ml-[0] ml-[22px] mr-[97px] mt-[97px] relative w-[90%] md:w-full">
              <div className="bg-white-A700 flex flex-col h-full items-center justify-start my-auto p-3.5 rounded-[10px] shadow-bs w-[32%]">
                <div className="flex flex-col gap-9 items-end justify-start mb-4 mt-2.5 w-[99%] md:w-full">
                  <div className="flex flex-col items-center justify-start rounded-bl-[10px] rounded-br-[10px] shadow-bs2 w-full">
                    <Img
                      className="h-[238px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                      src="images/img_screencaptureu.png"
                      alt="screencaptureu"
                    />
                  </div>
                  <div className="flex flex-row gap-[94px] items-end justify-end w-[95%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                      size="txtHindVadodaraBold24"
                    >
                      UI Soup
                    </Text>
                    <div className="h-[23px] md:h-[35px] mb-1 mt-2 relative w-[35%]">
                      <Text
                        className="absolute inset-x-[0] mx-auto text-blue_gray-900 text-sm top-[0] w-max"
                        size="txtHindVadodaraMedium14"
                      >
                        View Work
                      </Text>
                      <Img
                        className="absolute h-[23px] inset-[0] justify-center m-auto"
                        src="images/img_megaphone.svg"
                        alt="megaphone"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex md:flex-col flex-row gap-[38px] h-full inset-[0] items-center justify-between m-auto w-full">
                <div className="bg-white-A700 flex md:flex-1 flex-col items-end justify-end p-3 rounded-[10px] shadow-bs w-[32%] md:w-full">
                  <Img
                    className="h-[238px] sm:h-auto mr-1 mt-3 object-cover w-[97%] md:w-full"
                    src="images/img_unsplash3q3tsj01nc.png"
                    alt="unsplash3q3tsjZero"
                  />
                  <Text
                    className="mr-[54px] mt-[17px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                    size="txtHindVadodaraBold24"
                  >
                    Fashion and Apparel
                  </Text>
                  <div className="h-[23px] md:h-[37px] mr-2 mt-3.5 relative w-[32%]">
                    <Text
                      className="absolute left-[13%] text-blue_gray-900 text-sm top-[0]"
                      size="txtHindVadodaraMedium14"
                    >
                      Show All
                    </Text>
                    <Img
                      className="absolute h-[23px] inset-[0] justify-center m-auto"
                      src="images/img_megaphone.svg"
                      alt="megaphone_One"
                    />
                  </div>
                </div>
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[26px] grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
                  orientation="horizontal"
                >
                  <Product className="bg-white-A700 flex flex-col items-start justify-end sm:ml-[0] p-3.5 rounded-[10px] shadow-bs w-full" />
                  <div className="bg-white-A700 flex flex-col justify-end sm:ml-[0] p-2.5 rounded-[10px] shadow-bs w-full">
                    <Img
                      className="h-[238px] sm:h-auto md:ml-[0] ml-[13px] mt-3.5 object-cover w-[96%] md:w-full"
                      src="images/img_unsplashotxadkuh3i.png"
                      alt="unsplashotxadku"
                    />
                    <Text
                      className="mr-[115px] mt-[25px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                      size="txtHindVadodaraBold24"
                    >
                      Home and Living
                    </Text>
                    <div className="h-[23px] md:h-[31px] md:ml-[0] ml-[198px] mr-[9px] my-1 relative w-[31%]">
                      <Text
                        className="absolute left-[13%] text-blue_gray-900 text-sm top-[0]"
                        size="txtHindVadodaraMedium14"
                      >
                        Show All
                      </Text>
                      <Img
                        className="absolute h-[23px] inset-[0] justify-center m-auto"
                        src="images/img_megaphone.svg"
                        alt="megaphone"
                      />
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <Clients className="flex flex-col items-center justify-start md:ml-[0] ml-[194px] mr-[279px] mt-[86px] w-[68%] md:w-full" />
          <Footer
            className="bg-cover bg-no-repeat flex flex-col h-[453px] items-start justify-start mr-[38px] mt-[108px] p-[38px] sm:px-5 w-[98%] md:w-full"
            style={{ backgroundImage: "url('images/img_group514.svg')" }}
          />
        </div>
      </div>
    </>
  );
};

export default FrameTwoPage;
