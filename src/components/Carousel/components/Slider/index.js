/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 30px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;


const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: true,
      infinite: false,
      speed: 500,
      centerMode: false,
      adaptiveHeight: true,
      slidesToShow: 4,
      slidesToScroll: 1,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);
Slider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Slider;
