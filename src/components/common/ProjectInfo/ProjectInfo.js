import React from 'react';
import classnames from 'classnames';

import Icon from '@/components/common/Icon';

import styles from './ProjectInfo.module.scss';

export default function ProjectInfo({ className, withType = true, info, ...rest }) {
  const { type, project } = info;

  const infoClasses = classnames(styles['project-info'], className);

  return (
    <article className={ infoClasses }>
      {
        withType && <Icon name={ type } width= { 30 } />
      }

      <div className={ styles['project-info-meta'] }>
        <img src={ project.thumbnail } width={ 30 } />
        <span className={ styles['project-info-project-name'] }>
          { project.title }
        </span>
      </div>
    </article>
  );
}
