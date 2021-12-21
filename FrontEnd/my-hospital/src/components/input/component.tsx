import { InputUnstyled, InputUnstyledOwnProps } from "@mui/base";
import { styled } from "@mui/system";
import { FC } from "react";


const StyledInputElement = styled("input")`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 600;
  background: transparent;
  border: none;
  height: 5rem;
  color: black;
  width: 90%;
  font-size: 1.5rem;
  padding-right: 5%;
  padding-left: 5%;

  &:focus {
    outline: none;
  }
`;

export interface InputCustom{
  ErrorComponent?: JSX.Element;
}

const Input: FC<InputCustom & InputUnstyledOwnProps> = ({
  ErrorComponent,
  ...props
}) => {
  return (
    <>
      <InputUnstyled components={{ Input: StyledInputElement }} {...props} />
      {ErrorComponent}
    </>
  );
};
export default Input;