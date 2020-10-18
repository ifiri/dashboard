import React from 'react';
import classnames from 'classnames';

import { ReactComponent as FilterIcon } from '@/assets/icons/filter.svg';

import styles from './FiltersToggle.module.scss';

export default function FiltersToggle ({ filtersCount, ...rest }) {
  const toggleClasses = classnames({
    [styles['filters-toggle']]: true,
    [styles['filters-toggle-selected']]: !!filtersCount,
  });

  return (
    <div className={ toggleClasses }>
      {
        !!filtersCount && (
          <div className={ styles['filters-toggle-count'] }>
            { filtersCount }
          </div>
        )
      }

      <FilterIcon height={ 12 } />
    </div>
  );
}
