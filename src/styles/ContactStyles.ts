import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
  background-color: rgb(1, 22, 39);
  overflow: hidden auto;
  height: 100vh;
  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;
export const PageTitle = styled.div`
  padding: 28px 21px;
  color: white;
  font-size: 16px;
  font-weight: 400;
`;
export const Contacts = styled.button`
  background-color: #1e2d3d;
  padding: 5px 0 5px 27px;
  width: 100%;
  text-align: start;
  display: flex;
  gap: 12px;
  align-items: center;
`;
export const FindMe = styled.button`
  background-color: #1e2d3d;
  padding: 5px 0 5px 27px;
  width: 100%;
  text-align: start;
  display: flex;
  gap: 12px;
  align-items: center;
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const BtnName = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 400;
`;
export const ArrowImg = styled(motion.img)<{ open: boolean }>`
  transform: ${(props) => (props.open === true ? "rotate(90deg)" : "")};
`;
export const EmailDiv = styled.div`
  display: flex;
  gap: 8px;
`;
export const EmailImg = styled.img``;
export const Email = styled.p`
  color: #607b96;
  font-size: 16px;
`;
export const PhoneNumber = styled.div`
  display: flex;
  gap: 8px;
`;
export const Box = styled.div`
  padding-bottom: 16px;
  padding-left: 27px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const Socials = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding-bottom: 16px;
`;
export const NumberP = styled.p`
  color: #607b96;
`;
export const LinkDiv = styled(motion.div)`
  display: flex;
  gap: 9px;
  align-items: center;
  color: #607b96;
`;
export const TextsContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 42px 21px 38px;
  gap: 15px;
  @media screen and (min-width: 1280px) {
    width: 82%;
    height: 100vh;
    border-right: 1px solid rgb(30, 45, 61);
    padding: 70px 35px 0;
  }
`;
export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const InputName = styled.p`
  color: #607b96;
  font-size: 16px;
  font-weight: 400;
`;
export const Input = styled.input`
  width: 100%;
  height: 41px;
  background-color: #011221;
  color: #ffff;
  border-radius: 10px;
  padding-left: 15px;
`;
export const TextArea = styled.textarea`
  width: 100%;
  height: 145px;
  background-color: #011221;
  border-radius: 10px;
  resize: none;
  padding: 15px;
  color: #ffff;
  font-size: 16px;
  font-weight: 400;
`;
export const SubmitButton = styled.button`
  width: 146px;
  background-color: #1c2b3a;
  color: white;
  font-size: 14px;
  font-weight: 400;
  padding: 10px 14px;
  border-radius: 5px;
`;
export const TextBox = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  text-align: center;
`;
export const Thank = styled.p`
  color: white;
  font-weight: 400;
  font-size: 24px;
`;
export const AcceptedMessage = styled.span`
  color: #607b96;
  font-size: 18px;
`;
export const ButtonNewMessage = styled.button`
  width: 163px;
  padding: 10px 14px;
  color: white;
  font-size: 14px;
  border-radius: 5px;
  background-color: #1c2b3a;
  margin: auto;
`;
export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  font-weight: 100;
  margin-top: -7px;
`;
export const ButtonsDiv = styled.div`
  @media screen and (min-width: 1280px) {
    width: 381px;
    border-right: 1px solid rgb(30, 45, 61);
  }
`;
export const SendTexts = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 80px 35px 0;
    width: 100%;
  }
`;
export const ButtonAn = styled.p`
  color: #5565e8;
  font-size: 16px;
  font-weight: 400;
`;
export const MessageAn = styled.p`
  line-height: 1.5;
  color: #5565e8;
`;
export const AddEventAn = styled.div`
  color: #5565e8;
  font-size: 16px;
`;
export const InputsAndTextsDiv = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    width: 100%;
  }
`;
export const MotionDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;
