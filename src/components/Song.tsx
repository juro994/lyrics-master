import React from 'react';
import styled from 'styled-components';

interface IProps {
  title: string;
}

const SongStyled = styled.p`
  color: white;
  font-size: 1.2em;
`

const Song:React.FunctionComponent<IProps> = ({title}) => {
  return (
      <SongStyled>{title}</SongStyled>
  );
}

export default Song;
