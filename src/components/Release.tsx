import React from 'react';
import styled from 'styled-components';
import Artist from './Artist';
import Song from './Song';
import IRelease from '../services/interfaces';

interface IProps {
  release: IRelease;
  setSelectedRelease: (release: IRelease) => void;
}

const ReleaseStyled = styled.div`
  margin: 10px 0px 10px 0px;
  padding: 0px 20px 10px 20px;
  border: 1px solid white;
  border-radius: 20px;
  width: 500px;
  text-align: left;
  transition: background-color .15s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`

const mapArtistNames = (release: IRelease): string => {
  return release["artist-credit"].map(artist => artist.name).join(', ');
};

const Release: React.FunctionComponent<IProps> = ({ release, setSelectedRelease }) => {
  return (
    <ReleaseStyled onClick={(e) => {setSelectedRelease(release); console.log(e)}}>
      <Song title={release.title} />
      <Artist name={mapArtistNames(release)} />
    </ReleaseStyled>
  );
}

export default Release;
