import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 2.25rem;
  margin-bottom: 0.938rem;
  color: ${(props) => props.theme["title"]};
`;

export const StoryContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 0.938rem;

  p {
    color: ${(props) => props.theme["text"]};
    font-weight: 400;
    font-size: 1rem;
    text-align: left;
    line-height: 1.75;
  }
`;
