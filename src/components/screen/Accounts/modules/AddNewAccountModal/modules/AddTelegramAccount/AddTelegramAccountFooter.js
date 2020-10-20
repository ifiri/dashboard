import React from 'react';

import Button from 'react-bootstrap/Button';

import styles from './AddTelegramAccount.module.scss';

export default function AddTelegramAccountFooter(props) {
  return (
    <div className={ styles['footer'] }>
      <Button variant="link">читать дальше</Button>
    </div>
  );
}
