import styled from 'styled-components';

export const Title = styled.h3`
  height: 60px;
  width: 250px;
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 50px;
  display: inline-block;
  text-align: center;
  padding: 15px;
  background: red;
  border-radius: 4px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  margin-bottom: 50px;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  li {
    margin-right: 6%;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 3%;
  margin-bottom: 16px;
`;
