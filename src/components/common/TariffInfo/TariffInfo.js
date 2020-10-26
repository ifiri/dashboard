import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import styles from './TariffInfo.module.scss';

export default function TariffInfo(props) {
  const componentClasses = classnames(styles.container, props.className);

  return (
    <section className={ componentClasses }>
      <div className={ styles.item }>
        <h5 className={ styles.title }>
          Пробный период:
        </h5>
        Осталось 14 дней
      </div>

      <div className={ styles.item }>
        <h5 className={ styles.title }>
          Доступно:
        </h5>
        0 / 5000 подписчиков
      </div>

      <Button
        as={ Link }
        variant="primary"
        to="/payment"
        className={ styles.cta }
      >
        Оплатить
      </Button>
    </section>
  );
}
