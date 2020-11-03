import React from 'react';

import Checkbox from '@/components/common/Checkbox';

export default function DataTableCheck({
  className,
  value,
  name = '_checked[]',
  onChange,
  ...rest
}) {
  return (
    <Checkbox
      value={ value }
      name={ name }
      onChange={ onChange }
      className={ className }
    />
  );
}
