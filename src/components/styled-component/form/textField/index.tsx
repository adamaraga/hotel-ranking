import { Children } from "../../../../types";
import { ErrorMessage, Input, Select } from "./styles";

interface TextFieldType {
  inputError: string | number | undefined;
  name: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  type?: string;
}

export const TextField = ({
  inputError,
  name,
  label,
  value,
  onChange,
  type,
}: TextFieldType) => {
  return (
    <div className="creatHotel__main__inputCon">
      <label style={{ fontSize: "1.4rem" }} htmlFor={name}>
        {label}
      </label>
      <br />
      <Input
        error={inputError ? true : false}
        value={value}
        type={type}
        id={name}
        onChange={onChange}
      />
      <br />
      <ErrorMessage show={inputError ? true : false}>{inputError}</ErrorMessage>
    </div>
  );
};

type NewTextFieldType = Omit<TextFieldType, "onChange">;

interface SelectFieldType extends NewTextFieldType, Children {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
}

export const SelectField = ({
  inputError,
  name,
  label,
  value,
  onChange,
  children,
  disabled,
}: SelectFieldType) => {
  return (
    <div className="creatHotel__main__inputCon">
      <label style={{ fontSize: "1.4rem" }} htmlFor={name}>
        {label}
      </label>
      <br />
      <Select
        error={inputError ? true : false}
        value={value}
        id={name}
        onChange={onChange}
        disabled={disabled}
      >
        {children}
      </Select>
      <br />
      <ErrorMessage show={inputError ? true : false}>{inputError}</ErrorMessage>
    </div>
  );
};
