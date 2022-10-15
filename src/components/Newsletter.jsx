import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Conatiner = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  border: 1px soild lightgray;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  outline: none;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Conatiner>
      <Title>Newsletter</Title>
      <Description>Get timely from your favorite products</Description>
      <InputContainer>
        <Input placeholder="Enter Your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Conatiner>
  );
};

export default Newsletter;
