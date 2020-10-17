import React, { useState } from 'react';
import classnames from 'classnames';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import Dropdown, {
  DropdownItem,
  DropdownHeader,
  DropdownDivider
} from '@/components/common/Dropdown';

import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg';
import { ReactComponent as FilterIcon } from '@/assets/icons/filter.svg';

import styles from './SearchInput.module.scss';

export default function SearchInput({ ...rest }) {
  return (
    <InputGroup className={ styles['search-input'] }>
      <Dropdown
        header="Добавить фильтр"
        as={ InputGroup.Prepend }
        toggleContent={ <FilterIcon height={ 12 } /> }
      >
        <DropdownItem>Метка</DropdownItem>
        <DropdownItem>Дата последнего контакта</DropdownItem>
        <DropdownItem>Дата подписки</DropdownItem>
        <DropdownItem>Количество онлайн-чатов</DropdownItem>
        <DropdownDivider />

        <DropdownHeader variant="secondary">
          Системные поля
        </DropdownHeader>
        <DropdownItem>Имя</DropdownItem>
        <DropdownItem>Email</DropdownItem>
        <DropdownItem>Телефон</DropdownItem>
        <DropdownDivider />
        <DropdownHeader variant="secondary">
          Пользовательские поля
        </DropdownHeader>
        <DropdownItem>Заинтересован</DropdownItem>
        <DropdownItem>Тестовое</DropdownItem>
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
