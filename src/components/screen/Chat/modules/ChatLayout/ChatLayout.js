import React, { useState } from 'react';
import classnames from 'classnames';

import DialogsArea from './modules/DialogsArea';
import ThreadArea from './modules/ThreadArea';
import UserinfoArea from './modules/UserinfoArea';

import styles from './ChatLayout.module.scss';

const INFO_STATES = {
  CLOSED: 0,
  OPENING: 1,
  OPENED: 2,
  CLOSING: 3,
};

export default function ChatLayout({ ...rest }) {
  const [infoOpenedState, setInfoOpenedState] = useState(INFO_STATES.CLOSED);

  const onInfoToggle = () => {
    switch (true) {
      case infoOpenedState === INFO_STATES.CLOSED:
        setInfoOpenedState(INFO_STATES.OPENING);

        setTimeout(() => setInfoOpenedState(INFO_STATES.OPENED), 50);
        return;

      case infoOpenedState === INFO_STATES.OPENED:
        setInfoOpenedState(INFO_STATES.CLOSING);

        setTimeout(() => setInfoOpenedState(INFO_STATES.CLOSED), 250);
        return;
    }
  };

  return (
    <div className={ styles['grid'] }>
      <DialogsArea
        className={ styles['grid-dialogs'] }
      />

      <ThreadArea
        className={ styles['grid-thread'] }
        isInfoOpened={ infoOpenedState === INFO_STATES.OPENED }
        onInfoToggle={ onInfoToggle }
      />

      <UserinfoArea
        className={
          classnames({
            [styles['grid-userinfo']]: true,
            [styles['is-opening']]: infoOpenedState === INFO_STATES.OPENING,
            [styles['is-open']]: infoOpenedState === INFO_STATES.OPENED || infoOpenedState === INFO_STATES.CLOSING,
            [styles['is-closing']]: infoOpenedState === INFO_STATES.CLOSING,
          })
        }
      />
    </div>
  );
}
