import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';


class Card extends React.Component {
  static propTypes = {
    title: PropTypes.node,
  }

  render() {
    return (
      <section className={styles.component}>
        <p>{this.props.title}</p>
      </section>
    )
  }
}

export default Card;
