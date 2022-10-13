import styled from "styled-components";
import { colorTheme } from "../../../assets/colors";
import { ButtonType } from "../../../types";

export const Button = styled.button<ButtonType>`
  /* Adapt the colors based on primary prop */
  background: ${(props) =>
    props?.fill === "true" ? colorTheme.primary : "white"};
  color: ${(props) => (props.fill ? "white" : colorTheme.primary)};
  width: ${(props) =>
    props.width ? props?.width : props?.small === "true" ? "8rem" : "15rem"};
  height: ${(props) =>
    props.height
      ? props?.width
      : props?.small === "true"
      ? "2.5rem"
      : "3.5rem"};
  border: ${(props) =>
    props?.fill
      ? `2px solid ${colorTheme.primary}`
      : `2px solid ${colorTheme.lightGray}`};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  font-weight: 600;
  gap: 1rem;
  font-size: ${(props) => (props.small === "true" ? "1.2rem" : "1.6rem")};
  cursor: pointer;
`;
