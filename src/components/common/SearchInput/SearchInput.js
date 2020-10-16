import React, { useState } from 'react';
import classnames from 'classnames';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';

import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg';
import { ReactComponent as FilterIcon } from '@/assets/icons/filter.svg';

import styles from './SearchInput.module.scss';

export default function SearchInput({ ...rest }) {
  const [isFiltersShown, setFiltersVisibility] = useState(false);

  const Toggle = React.forwardRef(({ onClick, ...props }, ref) => {
    const toggleClasses = classnames({
      [styles.toggle]: true,

      [styles['toggle-active']]: isFiltersShown,
    });

    return (
      <div
        className={ toggleClasses }
        ref={ ref }
        onClick={ onClick }
      >
        <FilterIcon height={ 12 } />
      </div>
    );
  });

  const onFiltersToggle = isShown => {
    setFiltersVisibility(isShown);
    console.log('::: is', isShown);
  };

  return (
    <InputGroup className={ styles['search-input'] }>
      <Dropdown
        className={ isFiltersShown ? styles['filters-shown'] : null }
        as={ InputGroup.Prepend }
        onToggle={ onFiltersToggle }
      >
        <Dropdown.Toggle as={ Toggle } />
        <Dropdown.Menu>
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Item>Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <FormControl
        type="text"
        placeholder="Поиск пользователя по имени"
        className={ styles.input }
      />
      <InputGroup.Append>
        <div className={ styles['search-icon'] }>
          <SearchIcon height={ 18 } />
        </div>
      </InputGroup.Append>
    </InputGroup>
  );
}
