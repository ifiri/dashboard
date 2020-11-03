import React from 'react';

import DataTable from './DataTable';

import DataTableCell from './modules/DataTableCell';
import DataTableRow from './modules/DataTableRow';
import DataTableGroup from './modules/DataTableGroup';
import DataTableSwitch from './modules/DataTableSwitch';
import DataTableCheck from './modules/DataTableCheck';
import DataTableActions from './modules/DataTableActions';
import DataTablePlaceholder from './modules/DataTablePlaceholder';
import DataTableDragControl from './modules/DataTableDragControl';

DataTable.Cell = DataTableCell;
DataTable.Row = DataTableRow;
DataTable.Group = DataTableGroup;
DataTable.Switch = DataTableSwitch;
DataTable.Check = DataTableCheck;
DataTable.Actions = DataTableActions;
DataTable.Placeholder = DataTablePlaceholder;
DataTable.DragControl = DataTableDragControl;

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

export default DataTable;
