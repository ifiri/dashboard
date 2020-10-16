import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Form from 'react-bootstrap/Form';

import Icon from '@/components/common/Icon';

import styles from './Checkbox.module.scss';

export default function Checkbox({ value, name, children, ...rest }) {
  const [isChecked, setCheckboxState] = useState(false);

  const onCheckboxChange = event => {
    setCheckboxState(event.target.checked);
  };

  return (
    <div className={ styles.checkbox }>
      <label className={ styles.label }>
        <div className={ styles['checkbox-custom'] }>
          {
            isChecked && <Icon name="check" width={ 12 } />
          }
        </div>
        <input
          type="checkbox"
          className={ styles.input }
          value={ value }
          name={ name }
          checked={ isChecked }
          onChange={ onCheckboxChange }
        />
      </label>
    </div>
  );
}
