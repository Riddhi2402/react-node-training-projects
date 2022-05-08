import React from 'react';
import styles from './style.module.css';
import { Text } from '../../Assets/constant';

function CssDemo() {
  return (
    <div>
      <h1 className={styles.text}>{Text.cssDemo}</h1>
    </div>
  );
}

export default CssDemo;
