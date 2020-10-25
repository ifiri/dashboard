import React, { useState, useRef, useEffect } from 'react';
import isFunction from 'lodash/isFunction';
import PerfectScrollbar from 'perfect-scrollbar';

import useOutsideClick from '@/hooks/useOutsideClick';

import Icon from '@/components/common/Icon';

import styles from './Select.module.scss';

export default function Select({ label, placeholder, options, value, name, children, onChange, ...rest }) {
  const ref = useRef(null);
  const items = useRef(null);
  const [isOpened, setSelectState] = useState(false);

  let scrollbars;

  const onCheckboxChange = event => {
    // setCheckboxState(event.target.checked);

    onChange && onChange(event.target.checked, name, value);
  };

  const toggleSelectState = () => {
    setSelectState(!isOpened);
  };
  useOutsideClick(ref, () => setSelectState(false));

  useEffect(() => {
    if (!isOpened) {
      return;
    }

    scrollbars = new PerfectScrollbar(items.current);
  }, [isOpened]);

  useEffect(() => {
    if (scrollbars) {
      if (!items.length && scrollbars) {
        scrollbars.destroy();
        scrollbars = null;
        return;
      }

      scrollbars.update();
    }
  }, [scrollbars, items]);

  return (
    <div className={ styles.select }>
      <div className={ styles['select-caption'] }>{ label }</div>

      <div className={ styles['select-body'] } ref={ ref }>
        <label className={ styles['select-label'] } onClick={ toggleSelectState }>
          <div className={ styles['select-toggle'] }>
            <span>
              { isFunction(placeholder) ? placeholder(isOpened) : placeholder }
            </span>
            <Icon name="chevron-down" width={ 20 } />
          </div>
        </label>
        {
          isOpened && (
            <div className={ styles['select-list'] } ref={ items }>
              {
                options.map((option, index) => {
                  return (
                    <div key={ option.key || index } className={ styles['select-option'] }>
                      { option.content || option }
                    </div>
                  )
                })
              }
            </div>
          )
        }
      </div>
    </div>
  );
}
