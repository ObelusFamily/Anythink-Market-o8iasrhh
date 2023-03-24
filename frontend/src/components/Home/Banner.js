import React from "react";
import logo from "../../imgs/logo.png";
import Wrapper from 'styled-components';
import dark from "../../styles/theme";

const Banner = () => {
  return (
    <Wrapper theme={{dark}}>
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part">get</span>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
    </Wrapper>
  );
};

export default Banner;
