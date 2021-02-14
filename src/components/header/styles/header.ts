import styled from "styled-components/macro";
import { ImageType } from "@components/common-types";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: pink;
  justify-content: space-between;
  background: #2f373a;
  font-family: Roboto;
  font-size: 14px;
  box-shadow: 0 2px 4px rgb(64 65 71 / 30%);
  color: white;
  padding-left: 20px;
`;

export const Logo = styled.img<ImageType>`
  width: 3rem;
  height: 3rem;
`;

export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TopBarButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  cursor: pointer;
  border-inline-start: 1px solid #000000;
  box-sizing: border-box;
  height: 100%;
  padding: 10px;

  &:hover {
    background-color: #394347;
  }
`;
