import React, { useEffect } from 'react';
import ReleaseArea from './components/ReleaseArea';
import LyricsArea from './components/LyricsArea';
import InputArea from './components/InputArea';
import IRelease from './services/interfaces';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
  main: "palevioletred"
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    background-color: ${theme.main};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  div {
    box-sizing: border-box;
  }
`

const HeaderArea = styled.div`
  text-align: center;
  font-family: Chalkduster, fantasy;
`

const HeaderStyled = styled.h1`
  
`

const ContentArea = styled.div`
  display: flex;
  flex-direction: row;
`

const AppStyled = styled.div`
  text-align: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const App: React.FunctionComponent = () => {
  const [releaseName, setReleaseName] = React.useState<string>('');
  const [releases, setReleases] = React.useState<IRelease[]>([]);
  const [lyrics, setLyrics] = React.useState<string>('');
  const [selectedRelease, setSelectedRelease] = React.useState<IRelease | null>(null);

  const apiUrl = 'http://musicbrainz.org/ws/2/release/?query=release:';
  const lyricsUrl = 'https://api.lyrics.ovh/v1/'
  const jsonFormatParam = '&fmt=json';

  const filterDuplicateReleases = (releases: IRelease[]) => {
    return releases.filter((rel, index, self) => self.findIndex(
      (t) => { return (t['artist-credit'][0]['name'] === rel['artist-credit'][0]['name'] && t.title === rel.title) }) === index)
  }

  useEffect(() => {
    if (releaseName.length > 5) {
      fetch(apiUrl + releaseName + jsonFormatParam)
        .then(response => response.json())
        .then(data => {
          setReleases(filterDuplicateReleases(data.releases));
        });
    } else {
      setReleases([]);
    }
    setLyrics('');
  }, [releaseName]);

  useEffect(() => {
    fetch(lyricsUrl + selectedRelease?.["artist-credit"][0]['name'] + '/' + selectedRelease?.title)
      .then(response => response.json())
      .then(data => {
        setLyrics(data.lyrics);
      });
  }, [selectedRelease]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppStyled>
        <HeaderArea>
          <HeaderStyled>Lyrics Master</HeaderStyled>
        </HeaderArea>
        <InputArea setReleaseName={setReleaseName} startedTyping={releaseName.length > 0}/>
        <ContentArea>
          <ReleaseArea releases={releases} setSelectedRelease={setSelectedRelease} lyricsPresent={lyrics.length > 0} />
          <LyricsArea lyrics={lyrics} setLyrics={setLyrics} />
        </ContentArea>
      </AppStyled>
    </ThemeProvider>
  );
}

export default App;
