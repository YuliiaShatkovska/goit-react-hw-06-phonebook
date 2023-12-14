import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const ContactFormContainer = styled(Form)`
  border: 1px solid #757473;
  box-shadow: 0px -2px 7px #757473;
  border-radius: 10px;
  padding: 15px;
  max-width: 100%;
  margin-bottom: 30px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ContactInput = styled(Field)`
  padding: 10px;
  outline: transparent;
  background-color: transparent;
  border: none;
  border: 1px solid #757473;
  border-radius: 10px;
  color: #c0bfbf;

  &:hover {
    border-color: #7be8ea;
  }
`;

export const ContactErrorMessage = styled(ErrorMessage)`
  color: #a47e81;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const ContactFormBtn = styled.button`
  padding: 10px;
  border: none;
  border-radius: 10px;
  border: 1px solid #757473;
  background-color: transparent;
  margin-top: 10px;
  color: inherit;

  &:hover {
    border-color: #7be8ea;
  }
`;
