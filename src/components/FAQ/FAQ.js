import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { heroContents, faqContents } from '../../data/dataStore';

class FAQ extends React.Component {

  render() {
    return (
      <Container>
        <Hero titleText={heroContents.title} imageHeader={heroContents.image}/>
        <p>{faqContents.text}</p>
      </Container>
    );
  }
}

export default FAQ;
