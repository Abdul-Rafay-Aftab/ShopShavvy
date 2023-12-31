import React from "react";

const sizeClasses = {
  txtHindVadodaraMedium14: "font-hindvadodara font-medium",
  txtCalibriLight14: "font-calibri font-light",
  txtHindVadodaraSemiBold87: "font-hindvadodara font-semibold",
  txtHindVadodaraBold16: "font-bold font-hindvadodara",
  txtHindVadodaraBold48: "font-bold font-hindvadodara",
  txtHindVadodaraBold24: "font-bold font-hindvadodara",
  txtPlayfairDisplayRomanBold24: "font-bold font-playfairdisplay",
  txtHindVadodaraBold17: "font-bold font-hindvadodara",
  txtHindVadodaraSemiBold16WhiteA700: "font-hindvadodara font-semibold",
  txtHindVadodaraRegular17: "font-hindvadodara font-normal",
  txtHindVadodaraLight15: "font-hindvadodara font-light",
  txtHindVadodaraRegular16: "font-hindvadodara font-normal",
  txtPlayfairDisplayRomanRegular36: "font-normal font-playfairdisplay",
  txtHindVadodaraRegular14: "font-hindvadodara font-normal",
  txtHindVadodaraSemiBold16: "font-hindvadodara font-semibold",
  txtHindVadodaraRegular16Gray800: "font-hindvadodara font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
