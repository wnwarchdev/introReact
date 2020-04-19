import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { heroContents, infoContents } from '../../data/dataStore';

class Info extends React.Component {

  render() {
    return (
      <Container>
        <Hero titleText={heroContents.title} imageHeader={heroContents.image}/>
        <p>{infoContents.text}</p>
      </Container>
    );
  }
}

export default Info;
