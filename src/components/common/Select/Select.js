import React, { useState, useRef, useEffect, useMemo } from 'react';
import classnames from 'classnames';
import isFunction from 'lodash/isFunction';
import PerfectScrollbar from 'perfect-scrollbar';

import useOutsideClick from '@/hooks/useOutsideClick';

import Icon from '@/components/common/Icon';

import styles from './Select.module.scss';

export default function Select({
  label,
  placeholder,
  options,
  excludeOptions = [],
  value,
  name,
  selectable = true,
  children,
  onChange = () => {},
  external = false,
  className,
  ...rest
}) {
  const finalizedOptions = useMemo(() => options.filter(
    option => {
      const excludeBy = option.key || option.content || option;

      if (typeof excludeBy === 'object') {
        return true;
      }

      return !~excludeOptions.findIndex(element => {
        if (!element) {
          return false;
        }

        const searchBy = element.key || element.content || element;

        return searchBy === excludeBy;
      });
    }
  ), [options, excludeOptions]);
  const [selected, setSelected] = useState(value);

  const ref = useRef(null);
  const items = useRef(null);
  const [isOpened, setSelectState] = useState(false);

  let scrollbars;

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
      if (!options.length) {
        scrollbars.destroy();
        scrollbars = null;
        return;
      }

      scrollbars.update();
    }
  }, [scrollbars, options]);

  const handleOptionSelect = option => {
    if (selectable) {
      setSelected(option);
    }

    onChange(option);
    setSelectState(false);
  };

  const componentClasses = classnames({
    [styles['select']]: true,
    [styles['is-opened']]: isOpened,
    [styles['is-external']]: external,
    [className]: !!className,
  });

  return (
    <div className={ componentClasses }>
      {
        label && <div className={ styles['select-caption'] }>{ label }</div>
      }

      <div className={ styles['select-body'] } ref={ ref }>
        <label className={ styles['select-label'] } onClick={ toggleSelectState }>
          <div className={ styles['select-toggle'] }>
            {
              selected ? <span className={ styles['select-toggle-selected'] }>
                { selected.content || selected }
              </span> : (
                <span>
                  { isFunction(placeholder) ? placeholder(isOpened) : placeholder }
                </span>
              )
            }

            <Icon name={ isOpened ? 'chevron-up' : 'chevron-down' } width={ 12 } />
          </div>
        </label>
        {
          isOpened && (
            <div
              className={ styles['select-list'] }
              ref={ items }
            >
              {
                finalizedOptions.map((option, index) => {
                  return (
                    <div
                      key={ option.key || index }
                      className={ styles['select-option'] }
                      onClick={ () => handleOptionSelect(option) }
                    >
                      { option.content || option }
                    </div>
                  )
                })
              }

              {
                !finalizedOptions.length && (
                  <div
                    className={ classnames(styles['select-option'], styles['is-disabled']) }
                  >
                    Нет данных
                  </div>
                )
              }
            </div>
          )
        }
      </div>
    </div>
  );
}
