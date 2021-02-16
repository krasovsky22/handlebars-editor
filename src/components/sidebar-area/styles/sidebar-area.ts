import styled from "styled-components/macro";

export const Container = styled.div`
  box-shadow: none;
  background-color: white;
  z-index: 4;
  position: relative;
  width: 6rem;
  display: flex;
  flex-direction: column;
`;

export const Inner = styled.div`
  width: 6rem;
  flex-grow: 1;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  cursor: pointer;
`;

export const ButtonContent = styled.div`
  padding-top: 12px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  gap: 5px;
  background-color: white;

  &:hover {
    color: rgb(246, 96, 53);
  }
`;
export const ButtonIcon = styled.span`
  font-size: 17px;
  flex: 0 0 17px;
`;
export const ButtonTitle = styled.p`
  font-size: 17px;
  margin: 0;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 500;
  font-family: Roboto;
`;

export const ButtonArrow = styled.span`
  height: 0;
  position: relative;
  overflow: visible;
  align-self: flex-end;
  right: 2px;
  position: absolute;
  top: 50%;

  span {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    box-sizing: border-box;
    border: 7px solid black;
    border-color: transparent transparent white white;
    transform-origin: 0 0;
    transform: rotate(-135deg) skewY(0) skewX(0);
    box-shadow: -3px 1px 1px -1px rgb(0 0 0 / 32%);
    bottom: -24px;
    z-index: 101;
  }
`;

export const OpenedArea = styled.div``;

type OpenedAreaType = {
  left: string;
};
export const OpenedAreaContent = styled.div<OpenedAreaType>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ left }) => left};
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  font-family: Source Sans Pro;
  padding: 0 20px;
  min-width: 10rem;
  box-sizing: border-box;
  box-shadow: 1px 1px 6px rgb(0 0 0 / 30%);
  z-index: -1;

  transition: all 0.25s linear;
`;

export const OpenedAreaInner = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OpenedAreaBody = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 300px;
  padding: 10px;
`;

export const OpenedTitle = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  line-height: 10px;

  p {
    font-family: Roboto Condensed;
    font-weight: 400;
    font-size: 20px;
    flex-grow: 1;
  }

  div {
    margin: auto 0;
    cursor: pointer;
  }
`;

export const OpenedAreaButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  div {
    flex: 0 0 30%;
  }
`;
export const OpenedAreaButton = styled.div`
  position: relative;
`;
export const OpenedAreaButtonInner = styled.div`
  width: 86px;
  height: 85px;
  box-sizing: border-box;
  color: #617379;
  display: flex;
  flex-direction: column;
  transition: all 0.1s ease-in-out;
  box-shadow: 1px 1px 2px 0px rgb(64 65 71 / 18%);
  align-items: center;
  flex-wrap: nowrap;

  &:hover {
    color: #f66035;
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 10px 0 rgb(0 0 0 / 20%);
  }
`;
export const OpenedAreaButtonIcon = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 50px;
    height: 50px;
  }
`;
export const OpenedAreaButtonTitle = styled.div`
  text-align: center;
  font-size: 15px;
`;

export const HistoryButtonsGroup = styled.div`
  display: flex;
`;

export const HistoryButtonsInner = styled.div`
  flex-flow: row wrap;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;

type HistoryButtonType = {
  disabled: boolean;
};
export const HistoryButton = styled.div<HistoryButtonType>`
  cursor: pointer;
  width: 22px;
  height: 22px;
  ${({ disabled }) => disabled && `opacity: 0.5; cursor: not-allowed`}
`;
