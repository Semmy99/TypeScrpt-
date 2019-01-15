import * as React from "react";
import { Button } from "reactstrap";

export interface ITableRow {
  id: number;
  name: string;
  row?: string;
}

export interface IProps {
  elem: ITableRow;
  delRow: Function;
}

// interface State {
// 	currentEnthusiasm: number;
// }

export default class TableRow extends React.Component<IProps, Object> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const { name, row, id } = this.props.elem;
    const { delRow } = this.props;
    return (
      <tr>
        <th>{name}</th>
        <th>{row}</th>
        <th>
          <Button color="danger" onClick={() => delRow(id)}>
            delete blyat
          </Button>{" "}
        </th>
      </tr>
    );
  }
}
