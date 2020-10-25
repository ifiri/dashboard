import React from 'react';
import classnames from 'classnames';

import Icon from '@/components/common/Icon';

import styles from './BotInfo.module.scss';

export default function BotInfo({ className, info, ...rest }) {
  const { type, name } = info;

  const infoClasses = classnames(styles['bot-info'], className);

  return (
    <div className={ infoClasses }>
      <Icon name={ type } width= { 30 } className={ styles['bot-info-icon'] } />
      { name }
    </div>
  );
}
