import React from 'react';
import styles from './SearchResult.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
//import Creator from '../Creator/Creator.js';
//import {settings} from '../../data/dataStore.js';
import Container from '../Container/Container';

class SearchResult extends React.Component {


  static propTypes = {
  //  title: PropTypes.node,
  //  icon: PropTypes.node,
    cards: PropTypes.array,
  //  addCard: PropTypes.any,
  }



  render() {
    const {cards} = this.props;

    return (
      <Container>
        <section className={styles.component} >


          <h3 className={styles.title}><span className={styles.icon}><Icon name={'search'}/></span>{'Search Results:'}</h3>


          <div className={styles.cards}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>


        </section>
      </Container>
    );
  }


}

export default SearchResult;
