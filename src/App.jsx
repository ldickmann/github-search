import React, { useState } from "react";
import styled from "@emotion/styled";
import { IoLogoGithub as GithubIcon } from "react-icons/io";
import githubImg from "./assets/images/github-img.png";
import camadaBg from "./assets/images/camada-bg-1.png";
import SearchInput from "./components/SearchInput";
import { getUserProfile } from "./api/github";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Wrapper = styled.div`
  position: relative;
`;

const Box = styled.div`
  width: 1156px;
  height: 537px;
  background: #000;
  padding: 2rem 3rem;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Ellipse = styled.div`
  position: absolute;
  bottom: 54px;
  left: 664px;
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
  filter: blur(100px);
`;

const EllipseSmaller = styled.div`
  position: absolute;
  top: 61px;
  right: 1039px;
  width: 674px;
  height: 674px;
  border-radius: 50%;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #005cff 0%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: -1;
  pointer-events: none;
  filter: blur(100px);
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

const ContainerAround = styled.div`
  padding: 2rem;
  text-align: center;
`;

const ContainerResult = styled.div`
  width: 804px;
  height: 257px;
  margin: 0 auto;
  border-radius: 25px;
  background: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 2.5rem;
  gap: 2rem;
`;

const ProfileImage = styled.img`
  border-radius: 13.75rem;
  border: 2px solid #005cff;
  width: 13.75rem;
  height: 13.75rem;
`;

const ContainerProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const TitleProfile = styled.h2`
  color: #005cff;
  font-size: 1.25rem;
  font-weight: 700;
`;

const TextProfile = styled.p`
  color: #000;
  font-size: 0.9375rem;
  font-weight: 300;
  text-align: start;
`;

const StyledGithubIcon = styled(GithubIcon)`
  width: 58px;
  height: 58px;
`;

function App() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const data = await getUserProfile(username);
      setProfile(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setProfile(null);
    } finally {
      setLoading(false);
    }
  };

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
          <SearchInput
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onSearch={handleSearch}
          />
          <ContainerAround>
            {error && <p>{error}</p>}
            {loading && <p>Carregando...</p>}
            {profile && (
              <ContainerResult>
                <ProfileImage
                  src={profile.avatar_url}
                  alt={profile.login}
                />
                <ContainerProfile>
                  <TitleProfile>{profile.login}</TitleProfile>
                  <TextProfile>{profile.bio}</TextProfile>
                </ContainerProfile>
              </ContainerResult>
            )}
          </ContainerAround>
        </Box>
        <EllipseSmaller />
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
