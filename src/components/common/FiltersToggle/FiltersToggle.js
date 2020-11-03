import React from 'react';
import classnames from 'classnames';

import { ReactComponent as FilterIcon } from '@/assets/icons/filter.svg';

import styles from './FiltersToggle.module.scss';

export default function FiltersToggle ({
  filtersCount,
  className,
  countClassName,
  ...rest
}) {
  const toggleClasses = classnames({
    [styles['filters-toggle']]: true,
    [styles['filters-toggle-selected']]: !!filtersCount,

    [className]: !!className,
  });

  return (
    <div className={ toggleClasses }>
      {
        !!filtersCount && (
          <div
            className={
              classnames(styles['filters-toggle-count'], countClassName)
            }
          >
            { filtersCount }
          </div>
        )
      }

      <FilterIcon height={ 12 } />
    </div>
  );
}
