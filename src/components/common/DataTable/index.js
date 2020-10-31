import React from 'react';
import Icon from '@/components/common/Icon';

import DataTable from './DataTable';

import DataTableCell from './modules/DataTableCell';
import DataTableRow from './modules/DataTableRow';
import DataTableGroup from './modules/DataTableGroup';
import DataTableSwitch from './modules/DataTableSwitch';
import DataTableActions from './modules/DataTableActions';
import DataTableDragControl from './modules/DataTableDragControl';

DataTable.Cell = DataTableCell;
DataTable.Row = DataTableRow;
DataTable.Group = DataTableGroup;
DataTable.Switch = DataTableSwitch;
DataTable.Actions = DataTableActions;

DataTable.HeadCell = function HeadCell(props) {
  return <DataTableCell isHead={ true } {...props} />;
};
DataTable.HeadRow = function HeadRow(props) {
  return <DataTableRow isHead={ true } {...props} />;
};
DataTable.HeadGroup = function HeadGroup(props) {
  return <DataTableGroup isHead={ true } {...props} />;
};

DataTable.Body = function Body(props) {
  return <div style={{position: 'relative'}} {...props}>{props.children}</div>;
};

DataTable.DragControl = DataTableDragControl;


export default DataTable;
