import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    icon: PropTypes.node,
  }

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}><Icon name={this.props.icon}/></span>{this.props.title}</h3>
      </section>
    )
  }
}

export default Column;
