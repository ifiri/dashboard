import React from 'react';
import classnames from 'classnames';

import Icon from '@/components/common/Icon';

import styles from './BotState.module.scss';

export default function ProjectInfo({ className, state }) {
  const stateClasses = classnames({
    [styles['bot-state']]: true,
    [styles['bot-state-running']]: state === 'running',

    [className]: !!className,
  });

  return (
    <div className={ stateClasses }>
      <div className={ styles['bot-state-icon-wrapper'] }>
        {
          state === 'running' ? 
            <Icon name={ 'play' } width= { 15 } className={ styles['bot-state-icon'] } /> :
            <Icon name={ 'pause' } width= { 8 } className={ styles['bot-state-icon'] } /> 
        }
      </div>
      
      <span>{ state === 'running' ? 'запущен' : 'на паузе' }</span>
    </div>
  );
}
