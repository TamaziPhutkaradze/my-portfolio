import styled from "styled-components";
import Arrow from "../assets/arrow.svg";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import EmailIcon from "../assets/emailIcon.svg";
import PhoneIcon from "../assets/phoneIcon.svg";
import LinkIcon from "../assets/LinkIcon.svg";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

interface inputTypes {
  email: string;
  message: string;
  name: string;
}
export default function Contact(props: { windowWidth: number }) {
  const [contactIsOpen, setContactIsOpen] = useState<boolean>(false);
  const [secondBtnIsOpen, setSecondBtnIsOpen] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);
  const form: any = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<inputTypes>();
  console.log("errors", errors);
  const sendEmail = (e: any) => {
    emailjs
      .sendForm("service_8918u9i", "template_7kbv0ll", form.current, {
        publicKey: "17skn_PaUmSsBCfNC",
      })
      .then(
        () => {
          setSent(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  const nameInputValue = watch("name") || "";
  const emailInputValue = watch("email") || "";
  const messageInputValue = watch("message") || "";
  ``;
  const date = new Date();
  const monthDate = date.getDate();
  const month = date.getMonth();
  const weekDay = date.getDay();
  const WeekDaysNames = ["Sun", "Mon", "Tues	", "Wed", "Thurs", "Fri", "Sat"];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  console.log(weekDay);
  const currentMonth = monthNames[month];
  const currentWeekDay = WeekDaysNames[weekDay];
  console.log(currentMonth, "თვე", currentWeekDay, "დღე");

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <ButtonsDiv>
        <PageTitle>_contact</PageTitle>
        <Buttons>
          <Contacts onClick={() => setContactIsOpen(!contactIsOpen)}>
            <ArrowImg
              src={Arrow}
              open={contactIsOpen}
              animate={{ rotate: contactIsOpen ? 90 : 0 }}
              transition={{ duration: 0.7 }}
            />
            <BtnName>Contacts</BtnName>
          </Contacts>
          {contactIsOpen && (
            <Box>
              <EmailDiv
                as={motion.div}
                transition={{ duration: 2 }}
                initial={{ paddingTop: 0 }}
                animate={{ paddingTop: 16 }}
              >
                <EmailImg src={EmailIcon} />
                <Email>achifutkaradze9@gmail.com</Email>
              </EmailDiv>
              <PhoneNumber>
                <img src={PhoneIcon} />
                <NumberP>+(995) 597-96-70-05</NumberP>
              </PhoneNumber>
            </Box>
          )}
          <FindMe onClick={() => setSecondBtnIsOpen(!secondBtnIsOpen)}>
            <ArrowImg
              src={Arrow}
              open={secondBtnIsOpen}
              animate={{ rotate: secondBtnIsOpen ? 90 : 0 }}
              transition={{ duration: 0.7 }}
            />
            <BtnName>find-me-also-in</BtnName>
          </FindMe>
          {secondBtnIsOpen && (
            <Socials animate={{ paddingLeft: 27 }} transition={{ duration: 2 }}>
              <a
                href="https://www.linkedin.com/in/achiphutkaradze/"
                target="_blank"
              >
                {" "}
                <LinkDiv>
                  <img src={LinkIcon} /> Linkedin
                </LinkDiv>
              </a>{" "}
              <a
                href="https://www.facebook.com/achi.futkaradze.186/"
                target="_blank"
              >
                {" "}
                <LinkDiv>
                  <img src={LinkIcon} />
                  Facebook
                </LinkDiv>
              </a>
              <a
                href="https://www.instagram.com/achi_phutkaradze/"
                target="_blank"
              >
                {" "}
                <LinkDiv>
                  <img src={LinkIcon} />
                  Instagram
                </LinkDiv>
              </a>
            </Socials>
          )}
        </Buttons>
      </ButtonsDiv>
      <InputsAndTextsDiv>
        <TextsContainer onSubmit={handleSubmit(sendEmail)} ref={form}>
          {sent === false ? (
            <>
              <InputDiv>
                <InputName>_name:</InputName>
                <Input
                  {...register("name", {
                    required: "can't be empty",
                  })}
                  name="name"
                />
              </InputDiv>
              <InputDiv>
                <InputName>_email:</InputName>
                <Input
                  {...register("email", {
                    required: "can't be empty",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "enter valid email",
                    },
                  })}
                  name="email"
                />
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
              </InputDiv>
              <InputDiv>
                <InputName>_message:</InputName>
                <TextArea
                  {...register("message", {
                    required: "can't be empty",
                  })}
                  name="message"
                />
              </InputDiv>
              <SubmitButton type="submit" onClick={() => sendEmail}>
                submit-message
              </SubmitButton>
            </>
          ) : (
            <TextBox>
              <Thank>Thank you! 🤘</Thank>{" "}
              <AcceptedMessage>
                Your message has been accepted. You will recieve answer really
                soon!
              </AcceptedMessage>
              <ButtonNewMessage onClick={() => setSent(false)}>
                send-new-message
              </ButtonNewMessage>
            </TextBox>
          )}
        </TextsContainer>
        {props.windowWidth >= 1280 ? (
          <SendTexts>
            <ButtonAn>
              <span style={{ color: "#C98BDF" }}>const </span> button =
              document.querySelectors (
              <span style={{ color: "#FEA55F" }}>'#sendBtn'</span>);
            </ButtonAn>
            <MessageAn>
              <span>
                <span style={{ color: "#C98BDF" }}>const</span> message = &#123;
              </span>{" "}
              <br />
              <span>
                name:{" "}
                <span style={{ color: "#FEA55F" }}>
                  {nameInputValue.length > 0 ? nameInputValue : "''"}
                </span>
              </span>
              <br />
              email:
              <span style={{ color: "#FEA55F" }}>
                {emailInputValue.length > 0 ? emailInputValue : "''"}
              </span>
              ,
              <br />
              message:
              <span style={{ color: "#FEA55F" }}>
                {messageInputValue.length > 0 ? messageInputValue : "''"}
              </span>
              ,
              <br />
              date:{" "}
              <span style={{ color: "#FEA55F" }}>
                {currentWeekDay} {monthDate} {currentMonth}
              </span>
              <br />
              &#125;
            </MessageAn>
            <AddEventAn>
              button.addEventListener({" "}
              <span style={{ color: "#FEA55F" }}>'click'</span>, () &#61;&#62;
              &#123; form.send &#40;message&#41; <br /> &#125;)
            </AddEventAn>
          </SendTexts>
        ) : (
          ""
        )}
      </InputsAndTextsDiv>
    </Wrapper>
  );
}
const Wrapper = styled(motion.div)`
  background-color: rgb(1, 22, 39);
  overflow: hidden auto;
  height: 100vh;
  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;
const PageTitle = styled.div`
  padding: 28px 21px;
  color: white;
  font-size: 16px;
  font-weight: 400;
`;
const Contacts = styled.button`
  background-color: #1e2d3d;
  padding: 5px 0 5px 27px;
  width: 100%;
  text-align: start;
  display: flex;
  gap: 12px;
  align-items: center;
`;
const FindMe = styled.button`
  background-color: #1e2d3d;
  padding: 5px 0 5px 27px;
  width: 100%;
  text-align: start;
  display: flex;
  gap: 12px;
  align-items: center;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const BtnName = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 400;
`;
const ArrowImg = styled(motion.img)<{ open: boolean }>`
  transform: ${(props) => (props.open === true ? "rotate(90deg)" : "")};
`;
const EmailDiv = styled.div`
  display: flex;
  gap: 8px;
`;
const EmailImg = styled.img``;
const Email = styled.p`
  color: #607b96;
  font-size: 16px;
`;
const PhoneNumber = styled.div`
  display: flex;
  gap: 8px;
`;
const Box = styled.div`
  padding-bottom: 16px;
  padding-left: 27px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Socials = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding-bottom: 16px;
`;
const NumberP = styled.p`
  color: #607b96;
`;
const LinkDiv = styled(motion.div)`
  display: flex;
  gap: 9px;
  align-items: center;
  color: #607b96;
`;
const TextsContainer = styled.form`
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
const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const InputName = styled.p`
  color: #607b96;
  font-size: 16px;
  font-weight: 400;
`;
const Input = styled.input`
  width: 100%;
  height: 41px;
  background-color: #011221;
  color: #ffff;
  border-radius: 10px;
  padding-left: 15px;
`;
const TextArea = styled.textarea`
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
const SubmitButton = styled.button`
  width: 146px;
  background-color: #1c2b3a;
  color: white;
  font-size: 14px;
  font-weight: 400;
  padding: 10px 14px;
  border-radius: 5px;
`;
const TextBox = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  text-align: center;
`;
const Thank = styled.p`
  color: white;
  font-weight: 400;
  font-size: 24px;
`;
const AcceptedMessage = styled.span`
  color: #607b96;
  font-size: 18px;
`;
const ButtonNewMessage = styled.button`
  width: 163px;
  padding: 10px 14px;
  color: white;
  font-size: 14px;
  border-radius: 5px;
  background-color: #1c2b3a;
  margin: auto;
`;
const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  font-weight: 100;
  margin-top: -7px;
`;
const ButtonsDiv = styled.div`
  @media screen and (min-width: 1280px) {
    width: 381px;
    border-right: 1px solid rgb(30, 45, 61);
  }
`;
const SendTexts = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 80px 35px 0;
    width: 100%;
  }
`;
const ButtonAn = styled.p`
  color: #5565e8;
  font-size: 16px;
  font-weight: 400;
`;
const MessageAn = styled.p`
  line-height: 1.5;
  color: #5565e8;
`;
const AddEventAn = styled.div`
  color: #5565e8;
  font-size: 16px;
`;
const InputsAndTextsDiv = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    width: 100%;
  }
`;
