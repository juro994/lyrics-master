import React from 'react';
import styled from 'styled-components';

interface IProps {
  name: string;
}

const ArtistStyled = styled.p`
  color: white;
  font-size: 0.8em;
`

const Artist:React.FunctionComponent<IProps> = ({name}) => {
  return (
      <ArtistStyled>{name}</ArtistStyled>
  );
}

export default Artist;
