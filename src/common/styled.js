import styled from "styled-components";

import { Colors } from "./constants";

export const Container = styled.div`
  background: ${Colors.White};
  width: 100.95%;
  height: 100%;
  margin-left: -10px;
`;

export const ContainerHeader = styled.div`
  background-image: linear-gradient(
    to right,
    ${Colors.CrimsonGlory},
    ${Colors.ImperialPurple}
  );
  margin-top: -2.5vh;
  height: 45px;
`;

export const ContentBlock = styled.div`
  margin: 5vh;
  box-shadow: 0px 5px 10px 1px #888888;
`;

export const Footer = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;
  padding-left: 15px;
`;

export const RowStyle = styled.div`
  display: grid;
  grid-template-columns: 85% 15%;
  height: 4.5vh;
  padding: 5px 10px 10px 10px;
  background: ${(props) => props.color};
  &: hover {
    ${(props) =>
      props.isHeader
        ? `
          background-color: ${Colors.White}
          `
        : `
          background-color: ${Colors.SonicSilver}
          `};
  }
`;

export const Heading1 = styled.h1`
  color: ${(props) => props.color || Colors.White};
  padding-left: ${(props) => props.paddingLeft || "0px"};
  padding-top: ${(props) => props.paddingTop || "0px"};
`;

export const Heading2 = styled.h2`
  color: ${(props) => props.color || Colors.White};
  padding-left: ${(props) => props.paddingLeft || "0px"};
  padding-top: ${(props) => props.paddingTop || "0px"};
`;

export const Space = styled.div`
  height: ${(props) => props.height};
  border-bottom-width: ${(props) => props.width || "0px"};
  border-bottom-style: solid;
  border-bottom-color: ${Colors.AntiFlashWhite};
`;

export const Text = styled.p`
  color: Black;
  padding-bottom: 45px;
  font-size: ${(props) => props.size || "18px"};
  font-weight: ${(props) => props.weight || "normal"};
`;

export const TextDiv = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  height: 45px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  margin-top: 10px;
  border-radius: 5px;
  height: 30px;
  width: 120px;

  ${(props) =>
    props.enabled
      ? `
          border-width: 1px;
          border-color: ${Colors.AntiFlashWhite};
          color: ${Colors.SonicSilver};
          background-color: ${Colors.White};
        `
      : `
          border: none;
          color: ${Colors.White};
          background-color: ${Colors.Apple};
        `}
`;

// export const abc = styled.`
// `;
