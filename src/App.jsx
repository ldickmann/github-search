import styled from "@emotion/styled";
import { IoLogoGithub as GithubIcon } from "react-icons/io";
import githubImg from "./assets/images/github-img.png";
import camadaBg from "./assets/images/camada-bg-1.png";
import SearchInput from "./components/SearchInput";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  position: relative;
`;

const Box = styled.div`
  width: 1156px;
  height: 537px;
  flex-shrink: 0;
  background: #000;
  padding: 2rem 3rem;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Ellipse = styled.div`
  position: absolute;
  top: -405px;
  right: -396px;
  width: 888px;
  height: 888px;
  border-radius: 50%;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #005cff 0%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 0;
  pointer-events: none;
`;

const CamadaBg = styled.img`
  position: absolute;
  bottom: 421px;
  right: 988px;
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
      <Wrapper>
        <Box>
          <Logo>
            <StyledGithubIcon />
            Perfil
            <img
              src={githubImg}
              alt="Imagem do texto da empresa 'GitHub'"
            />
          </Logo>
          <SearchInput />
        </Box>
        <Ellipse />
        <CamadaBg
          src={camadaBg}
          alt="Camada de fundo"
        />
      </Wrapper>
    </Container>
  );
}

export default App;
