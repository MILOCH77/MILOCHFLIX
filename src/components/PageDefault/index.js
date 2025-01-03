import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 50px;
  ${({ paddingAll }) => css`
    padding: ${paddingAll};
  `}
`;

function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
        <Main paddingAll={paddingAll}>
          {children}
        </Main>
      <Footer />
    </>
  );
}
PageDefault.propTypes = {
  children: PropTypes.node.isRequired,
  paddingAll: PropTypes.string,
};

export default PageDefault;
