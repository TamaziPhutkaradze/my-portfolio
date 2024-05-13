import styled from "styled-components";
import Arrow from "../assets/arrow.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import Data from "../data.json";
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
  return (
    <Wrapper>
      <PageTitleDiv>
        <PageTitle>_projects</PageTitle>
      </PageTitleDiv>
      <Btn onClick={() => setProjectsOpen(!projectsOpen)}>
        <ArrowImg
          src={Arrow}
          btnClicked={projectsOpen}
          transition={{ duration: 0.7 }}
          animate={{ rotate: projectsOpen ? 90 : 0 }}
        />
        <BtnName>Tech Stacks</BtnName>
      </Btn>
      {projectsOpen ? (
        <TechStacksList>
          {data.TechStack.map((item, index) => {
            return (
              <FirstLabel key={index}>
                <Checkbox
                  type="checkbox"
                  value={item}
                  checked={selectedItems.includes(item)}
                  onChange={handleChange}
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
        <SelectedTechStacks>
          // projects /
          {selectedItems.length < 1
            ? "All"
            : selectedItems.map((item: string, index: number) => {
                return <Names key={index}>{item}</Names>;
              })}
        </SelectedTechStacks>
      </ProjectsContainer>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: #011627;
  padding: 21px 0 38px;
  height: 100vh;
`;
const PageTitleDiv = styled.div`
  padding-left: 27px;
`;
const PageTitle = styled.h1`
  color: white;
  font-size: 16px;
  font-weight: 400;
`;
const Btn = styled.button`
  width: 100%;
  margin-top: 29px;
  background-color: #1e2d3d;
  text-align: left;
  padding: 5px 29px;
  display: flex;
  gap: 13px;
  align-items: center;
`;
const BtnName = styled.span`
  color: white;
  font-size: 16px;
`;
const ArrowImg = styled(motion.img)<{ btnClicked: boolean }>`
  transform: ${(props) => (props.btnClicked ? "rotate(90deg)" : "")};
`;
const ProjectsContainer = styled.div`
  padding: 38px 27px;
`;
const SelectedTechStacks = styled.div`
  color: white;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const TechStacksList = styled.div`
  padding: 16px 0 0 27px;
`;
const FirstLabel = styled.label`
  display: flex;
  gap: 5px;
`;

const Checkbox = styled.input``;
const TechName = styled.p`
  color: white;
`;
const Names = styled.div`
  padding-left: 10px;
`;
