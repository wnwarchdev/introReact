import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore.js';
import Creator from '../Creator/Creator.js';

class Card extends React.Component {
  static propTypes = {
    column: PropTypes.node,
  }

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3>
      </section>
    )
  }
}

export default Card;
