import React from 'react';
import styles from './Hero.scss';

class Hero extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <h2 className={styles.title}>things to do</h2>
        <img className={styles.image} src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"></img>
      </header>
    )
  }//gdzie zapisac element lokalnie? // jak komentowac linijki powyzej?
}

export default Hero;
