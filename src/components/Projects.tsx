import Arrow from "../assets/arrow.svg";
import { useState } from "react";

import Data from "../../public/data.json";
export default function Projects() {
  const [projectsOpen, setProjectsOpen] = useState<boolean>(true);
  const [data, _setData] = useState(Data);
  const [selectedItems, setSelectedItems] = useState<any>([]);
  const handleChange = (e: any) => {
    let isChecked = e.target.checked;
    let value = e.target.value;
    if (isChecked) {
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems((prevData: []) => {
        return prevData.filter((name: string) => {
          return name !== value;
        });
      });
    }
  };
  const filterData = data.projects.filter((item) => {
    return selectedItems.every((tech: any) => item.techStack.includes(tech));
  });
  // animation
  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    in: {
      scale: 1,
      opacity: 1,
    },
  };
  const transition = {
    type: "spring",
    duration: 3,
  };
  return (
    <Wrapper>
      <MotionDiv
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={transition}
      >
        <ProjectFilterForDesk>
          <PageTitleDiv
            animate={{ paddingLeft: 27 }}
            transition={{ duration: 2 }}
          >
            <PageTitle>_projects</PageTitle>
          </PageTitleDiv>
          <Btn
            onClick={() => setProjectsOpen(!projectsOpen)}
            animate={{ marginTop: 29 }}
            transition={{ duration: 2 }}
          >
            <ArrowImg
              src={Arrow}
              btnClicked={projectsOpen}
              transition={{ duration: 0.7 }}
              animate={{ rotate: projectsOpen ? 90 : 0 }}
            />
            <BtnName>Tech Stacks</BtnName>
          </Btn>
          {projectsOpen ? (
            <TechStacksList
              animate={{ paddingTop: 16 }}
              transition={{ duration: 2 }}
            >
              {data.TechStack.map((item, index) => {
                return (
                  <FirstLabel key={index}>
                    <input
                      type="checkbox"
                      value={item}
                      checked={selectedItems.includes(item)}
                      onChange={handleChange}
                      className="
                  peer
                  relative 
                  appearance-none 
                  w-5
                  h-5
                  rounded-sm
                  focus:outline-none
                  checked:bg-gray-500 
                  checked:bg-[url('././assets/vector.svg')]
                  ring
                  bg-no-repeat
                  bg-center
                  "
                    />
                    <TechName key={index}>{item}</TechName>
                  </FirstLabel>
                );
              })}
            </TechStacksList>
          ) : (
            ""
          )}
        </ProjectFilterForDesk>
        <DesktopVersionDiv>
          <ProjectsContainer>
            <SelectedTechStacks
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              // projects /
              {selectedItems.length < 1
                ? "All"
                : selectedItems.map((item: string, index: number) => {
                    return <Names key={index}>{item},</Names>;
                  })}
            </SelectedTechStacks>
          </ProjectsContainer>
          <CardsContainer>
            {filterData.map((item) => {
              return (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    gap: "20px",
                    flexDirection: "column",
                  }}
                >
                  <ProjectNum>project {item.id}</ProjectNum>
                  <Card animate={{ opacity: 1 }} transition={{ duration: 2 }}>
                    <ImgDiv>
                      <ProjectImg src={item.img} />
                    </ImgDiv>
                    <Line /> <ProjectTitle>{item.name}</ProjectTitle>
                    <a href={item.live} target="_blank">
                      <LiveButton>view-project</LiveButton>{" "}
                    </a>{" "}
                  </Card>
                </div>
              );
            })}
          </CardsContainer>
        </DesktopVersionDiv>
      </MotionDiv>
    </Wrapper>
  );
}
// styles-components
import {
  Wrapper,
  PageTitleDiv,
  PageTitle,
  Btn,
  BtnName,
  ArrowImg,
  ProjectsContainer,
  SelectedTechStacks,
  TechStacksList,
  FirstLabel,
  TechName,
  Names,
  CardsContainer,
  ProjectNum,
  Card,
  ProjectImg,
  ImgDiv,
  Line,
  ProjectTitle,
  LiveButton,
  DesktopVersionDiv,
  ProjectFilterForDesk,
  MotionDiv,
} from "../styles/ProjectsStyles";
