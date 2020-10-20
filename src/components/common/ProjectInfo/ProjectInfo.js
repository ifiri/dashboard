import React from 'react';

import Icon from '@/components/common/Icon';

import styles from './ProjectInfo.module.scss';

export default function ProjectInfo({ withType = true, info, ...rest }) {
  const { type, project } = info;

  return (
    <article className={ styles['project-info'] }>
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
