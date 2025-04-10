import styled from "@emotion/styled";
import { IoLogoGithub as GithubIcon } from "react-icons/io";
import githubImg from "./assets/images/github-img.png";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 1156px;
  height: 537px;
  flex-shrink: 0;
  background: #000;
  padding: 2rem 3rem;
  text-align: center;
`;

const Logo = styled.h1`
  font-size: 3.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
`;

const StyledGithubIcon = styled(GithubIcon)`
  width: 58px;
  height: 58px;
`;

function App() {
  return (
    <Container>
      <Box>
        <Logo>
          <StyledGithubIcon />
          Perfil
          <img
            src={githubImg}
            alt="Imagem do texto da empresa 'GitHub'"
          />
        </Logo>
      </Box>
    </Container>
  );
}

export default App;
