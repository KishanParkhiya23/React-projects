import { styled } from "styled-components";

const CustomInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  color: ${({ $isInvalid }) => ($isInvalid ? "#ef4444" : "#374151")};
  background-color: ${({ $isInvalid }) => ($isInvalid ? "#fed2d2" : "#d1d5db")};
  border: 1px solid ${({ $isInvalid }) => ($isInvalid ? "#f73f3f" : "#d1d5db")};
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;
const CustomLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $isInvalid }) => ($isInvalid ? "#f87171" : "#6b7280")};
`;


export default function Input({ labelTxt, isInvalid, ...props }) {
  return (
    <p>
      <CustomLabel $isInvalid={isInvalid}>{labelTxt}</CustomLabel>
      <CustomInput $isInvalid={isInvalid} {...props}></CustomInput>
    </p>
  );
}
