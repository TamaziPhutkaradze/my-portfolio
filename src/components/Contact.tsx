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
  const currentMonth = monthNames[month];
  const currentWeekDay = WeekDaysNames[weekDay];

  const variants = {
    initial: {
      y: "-100%",
    },
    in: {
      y: "0%",
    },
  };
  const transition = {
    type: "spring",
    duration: 5,
  };
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <ButtonsDiv>
        <motion.div
          style={{ display: "flex", flexDirection: "column" }}
          initial="initial"
          animate="in"
          variants={variants}
          transition={transition}
        >
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
              <Socials
                animate={{ paddingLeft: 27 }}
                transition={{ duration: 2 }}
              >
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
        </motion.div>
      </ButtonsDiv>
      <InputsAndTextsDiv>
        <MotionDiv
          initial="initial"
          animate="in"
          variants={variants}
          transition={transition}
        >
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
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
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
                  <span style={{ color: "#C98BDF" }}>const</span> message =
                  &#123;
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
        </MotionDiv>
      </InputsAndTextsDiv>
    </Wrapper>
  );
}
// styles-components
import {
  Wrapper,
  PageTitle,
  Contacts,
  FindMe,
  Buttons,
  BtnName,
  ArrowImg,
  EmailDiv,
  EmailImg,
  Email,
  PhoneNumber,
  Box,
  Socials,
  NumberP,
  LinkDiv,
  TextsContainer,
  InputDiv,
  InputName,
  Input,
  TextArea,
  SubmitButton,
  TextBox,
  Thank,
  AcceptedMessage,
  ButtonNewMessage,
  ErrorMessage,
  ButtonsDiv,
  SendTexts,
  ButtonAn,
  MessageAn,
  AddEventAn,
  InputsAndTextsDiv,
  MotionDiv,
} from "../styles/ContactStyles";
