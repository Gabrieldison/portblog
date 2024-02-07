import styled from "styled-components";

export const ProjectsContainer = styled.div``;

export const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ProjectItem = styled.li`
  margin-bottom: 20px;
`;

export const ProjectLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme["text"]};
  font-weight: bold;
`;

export const ProjectDescription = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #666;
`;
