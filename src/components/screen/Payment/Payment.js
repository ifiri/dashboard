import React, { useState } from 'react';
import classnames from 'classnames';

import Slider, { Range } from 'rc-slider';

import Button from 'react-bootstrap/Button';

import PageLayout from '@/components/common/PageLayout';
import Icon from '@/components/common/Icon';

import styles from './Payment.module.scss';

const CURRENT_TARIFF_MARK = 0;

const MARKS_MAP = {
  0: 0,
  1: 1000,
  2: 2500,
  3: 5000,
  4: 10000,
  5: 15000,
  6: 20000,
  7: 30000,
  8: 40000,
  9: 50000,
  10: 100000,
  11: 150000,
  12: 200000,
  13: 300000,
};

const MARKS = {
  0: 'До 500 подписчиков',
  1: '1К',
  2: '2.5 К',
  3: '5 К',
  4: '10 К',
  5: '15 К',
  6: '20 К',
  7: '30 К',
  8: '40 К',
  9: '50 К',
  10: '100 000 К',
  11: '150 000 К',
  12: '200 000 К',
  13: 'До 300 000 подписчиков',
};

export default function Payment() {
  const [ value, setValue ] = useState(0);

  const MAPPED_MARKS = Object.keys(MARKS).map(key => {
    const mark = MARKS[key];

    console.log(':::', key, CURRENT_TARIFF_MARK);

    if (+key === CURRENT_TARIFF_MARK) {
      return {
        label: <span className={ styles['active-mark'] }>{ mark }</span>,
      }
    }

    return mark;
  });

  return (
    <PageLayout
      title="Оплата"
    >
      <article className={ styles.tariff }>
        <div className={ styles['tariff-item'] }>
          <strong>Текущий тариф:</strong> Пробный
        </div>
        <div className={ styles['tariff-item'] }>
          <strong>Срок действия:</strong> Осталось 14 дней
        </div>
        <div className={ styles['tariff-item'] }>
          <strong>Стоимость:</strong> 5490 р.
        </div>
        <div className={ classnames(styles['tariff-item'], styles['tariff-item-date']) }>
          Дата следующего списания 01.11.2020
        </div>
      </article>

      <div className={ styles.calculator }>
        <p className={ styles.disclaimer }>
          Стоимость ежемесячной подписки зависит от общего кол-ва уникальных подписчиков во всех ботах:
        </p>

        <div className={ styles['calculator'] }>
          <Slider
            min={ 0 }
            max={ 13 }
            marks={ MAPPED_MARKS }
            step={ null }
            onChange={ () => {} }
            defaultValue={ CURRENT_TARIFF_MARK }
          />
        </div>

        <div className={ styles['calculator-results'] }>
          <div className={ styles['selected-tariff'] }>
            <div className={ styles['selected-tariff-item'] }>
              <strong>Ваш тариф:</strong> До 500 подписчиков
            </div>
            <div className={ styles['selected-tariff-item'] }>
              <strong>Срок:</strong> 1 месяц
            </div>
          </div>

          <Button
            variant="primary"
            className={ styles['calculator-cta'] }
          >
            Оплатить 690 руб.
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}
