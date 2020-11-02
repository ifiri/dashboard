import React, { useState } from 'react';
import classnames from 'classnames';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import PageLayout from '@/components/common/PageLayout';
import Placeholder from '@/components/common/Placeholder';
import Icon from '@/components/common/Icon';

import ChatLayout from './modules/ChatLayout';

import styles from './Chat.module.scss';

export default function Chat() {
  
  return (
    <PageLayout
      title="Онлайн-чат"
      type="chat"
    >
      <ChatLayout />
    </PageLayout>
  );
}
