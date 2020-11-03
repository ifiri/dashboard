import React, { useState } from 'react';
import classnames from 'classnames';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

import PageLayout from '@/components/common/PageLayout';
import Icon from '@/components/common/Icon';

import SentMailingsTable from './modules/SentMailingsTable';
import PlannedMailingsTable from './modules/PlannedMailingsTable';
import DraftMailingsTable from './modules/DraftMailingsTable';
import TrashMailingsTable from './modules/TrashMailingsTable';

import styles from './Mailings.module.scss';

export default function Mailings() {
  const [currentTab, setCurrentTab] = useState('sent');

  return (
    <PageLayout
      title="Рассылки"
      headerActions={[
        {
          type: 'mailing-add',
          render: '+ Добавить рассылку',
          handler: () => {},
        }
      ]}
    >
      <Tab.Container
        activeKey={ currentTab }
        onSelect={ k => setCurrentTab(k) }
      >
        <Nav className={ styles['tabs'] }>
          <Nav.Item className={ styles['tabs-item'] }>
            <Nav.Link
              className={ styles['tab'] }
              eventKey="sent"
            >
              Отправленные
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={ styles['tabs-item'] }>
            <Nav.Link
              className={ styles['tab'] }
              eventKey="planned"
            >
              Запланированные
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={ styles['tabs-item'] }>
            <Nav.Link
              className={ styles['tab'] }
              eventKey="drafts"
            >
              Черновики
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={ styles['tabs-item'] }>
            <Nav.Link
              className={ styles['tab'] }
              eventKey="trash"
            >
              Удаленные
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content className={ styles['tabs-content'] }>
          <Tab.Pane eventKey="sent">
            <SentMailingsTable
              items={[
                {
                  name: 'Рассылка от 22.06.2020',
                  sentAt: '22.08.2020',
                  createdAt: '22.06.2020',
                  dispatched: 100,
                  viewed: 1,
                  clicks: 1,
                }
              ]}
            />
          </Tab.Pane>
          <Tab.Pane eventKey="planned">
            <PlannedMailingsTable
              items={[
                {
                  name: 'Рассылка от 22.06.2020',
                  scheduledOn: '22.08.2020',
                  createdAt: '22.06.2020',
                  dispatched: 100,
                  viewed: 0,
                  clicks: 0,
                }
              ]}
            />
          </Tab.Pane>
          <Tab.Pane eventKey="drafts">
            <DraftMailingsTable
              items={[
                {
                  name: 'Рассылка от 22.06.2020',
                  createdAt: '22.06.2020',
                }
              ]}
            />
          </Tab.Pane>
          <Tab.Pane eventKey="trash">
            <TrashMailingsTable
              items={[
                {
                  name: 'Рассылка от 22.06.2020',
                  createdAt: '22.06.2020',
                  deletedAt: '22.09.2020',
                }
              ]}
            />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </PageLayout>
  );
}
