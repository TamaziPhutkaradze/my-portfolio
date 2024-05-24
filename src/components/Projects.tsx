import styled from "styled-components";
import Arrow from "../assets/arrow.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import Data from "../../public/data.json";
import { Link } from "react-router-dom";

export default function Projects() {
  const [projectsOpen, setProjectsOpen] = useState<boolean>(false);
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
  console.log(selectedItems);
  const filterData = data.projects.filter((item) => {
    return selectedItems.every((tech: any) => item.techStack.includes(tech));
  });
  console.log(filterData);
  return (
    <Wrapper>
      <PageTitleDiv animate={{ paddingLeft: 27 }} transition={{ duration: 2 }}>
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
      <ProjectsContainer>
        <SelectedTechStacks
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          // projects /
          {selectedItems.length < 1
            ? "All"
            : selectedItems.map((item: string, index: number) => {
                return <Names key={index}>{item}</Names>;
              })}
        </SelectedTechStacks>
      </ProjectsContainer>
      <CardsContainer>
        {filterData.map((item) => {
          return (
            <div key={item.id}>
              <ProjectNum>project {item.id}</ProjectNum>
              <Card animate={{ opacity: 1 }} transition={{ duration: 2 }}>
                <ImgDiv>
                  <ProjectImg src={item.img} />
                </ImgDiv>
                <Line /> <ProjectTitle>{item.name}</ProjectTitle>
                <Link to={item.live}>
                  <LiveButton>view-project</LiveButton>{" "}
                </Link>
              </Card>
            </div>
          );
        })}
      </CardsContainer>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: #011627;
  padding: 21px 0 38px;
  min-height: 100vh;
`;
const PageTitleDiv = styled(motion.div)``;
const PageTitle = styled.h1`
  color: white;
  font-size: 16px;
  font-weight: 400;
`;
const Btn = styled(motion.button)`
  background-color: #1e2d3d;
  text-align: left;
  padding: 5px 0 5px 29px;
  display: flex;
  gap: 13px;
  align-items: center;
  width: 100%;
`;
const BtnName = styled.span`
  color: white;
  font-size: 16px;
`;
const ArrowImg = styled(motion.img)<{ btnClicked: boolean }>`
  transform: ${(props) => (props.btnClicked ? "rotate(90deg)" : "")};
`;
const ProjectsContainer = styled.div`
  padding: 38px 27px 0;
`;
const SelectedTechStacks = styled(motion.div)`
  color: white;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  opacity: 0;
`;
const TechStacksList = styled(motion.div)`
  padding: 0 0 0 27px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const FirstLabel = styled.label`
  display: flex;
  gap: 15px;
  align-items: center;
`;
const TechName = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 200;
`;
const Names = styled.div`
  padding-left: 10px;
`;
const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 27px;
  padding-right: 42px;
`;
const ProjectNum = styled.h1`
  padding-top: 17px;
  color: #5565e8;
  font-size: 16px;
`;
const Card = styled(motion.div)`
  border-radius: 15px;
  min-width: 281px;
  max-width: 400px;
  border: 1px solid #1e2d3d;
  margin: auto;
  margin-top: 15px;
  opacity: 0;
`;
const ProjectImg = styled.img`
  width: 100%;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  min-width: 281px;
`;
const ImgDiv = styled.div``;
const Line = styled.hr`
  height: 1px;
  width: 100%;
`;
const ProjectTitle = styled.div`
  padding-top: 29px;
  color: white;
  font-size: 14px;
  text-align: center;
`;
const LiveButton = styled.button`
  width: 129px;
  padding: 10px 14px;
  background-color: #1c2b3a;
  color: white;
  border-radius: 10px;
  font-size: 14px;
  margin: 23px;
`;
