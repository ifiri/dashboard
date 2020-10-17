import React from 'react';

import Button from 'react-bootstrap/Button';

const BulkActionsButton = React.forwardRef(({
  children,
  onClick,
  ...props
}, ref) => {
  return (
    <Button
      variant="outline-secondary"
      onClick={
        event => {
          event.preventDefault();
          onClick(event);
        }
      }
      ref={ ref }
    >
      Массовые действия
    </Button>
  );
});

export default BulkActionsButton;
