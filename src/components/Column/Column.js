import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';
import Card from '../Card/Card.js';

class Column extends React.Component {
  state = {
    cards: this.props.cards || [], //czemu nie columns.carsd?
  }
  static propTypes = {
    title: PropTypes.node,
    icon: PropTypes.node,
    card: PropTypes.node,
  }


  addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title
          }
        ]
      }
    ));
  }




  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}><Icon name={this.props.icon}/></span>{this.props.title}</h3>

      <div>
        {this.state.cards.map(({key, ...cardProps}) => (
          <Card key={key} {...cardProps} />
        ))}
      </div>

      <div className={styles.creator}>
        <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
      </div>


      </section>
    )
  }
}

export default Column;
