import * as React from "react";
import TableRow from "./TableRow";
import { data } from "../../Constants/tableRowData";
import "bootstrap/dist/css/bootstrap.css";
import { Table, Button, InputGroup, Input } from "reactstrap";

export interface ITRow {
  id: number;
  name: string;
  row: string;
}

interface State {
  dataRow: Array<ITRow> | null;
  name: string;
  descr: string;
}

class TableWrap extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      dataRow: null,
      name: "",
      descr: ""
    };
  }

  componentWillMount() {
    this.setState({ dataRow: [...data] });
  }
  // function for delete rowElem
  delRow = (id: number): void => {
    const { dataRow } = this.state;

    const newDataRow = dataRow.filter(
      (row, i): any => {
        if (row.id !== id) return row;
      }
    );
    this.setState({ dataRow: newDataRow });
  };

  // changeValue = (e: any, nameInput: any): void => {
  //   const value = e.target.value;
  //   this.setState({ [nameInput]: value });
  // };

  addNewRow = (): void => {
    const { dataRow, name, descr } = this.state;
    if (!name && !descr) return;
    console.log("dataRow", dataRow);
    const createdId = Math.random() * 0.5;
    dataRow.push({ id: createdId, name: name, row: descr });
    const addedRow = dataRow;
    console.log("addedRow", addedRow);
    this.setState({ dataRow: addedRow });
  };

  render() {
    const { dataRow, name, descr } = this.state;

    return (
      <div>
        <Table dark>
          <tbody>
            {dataRow.map(elem => (
              <TableRow elem={elem} key={elem.id} delRow={this.delRow} />
            ))}
          </tbody>
        </Table>
        <Button
          color="success"
          onClick={() => {
            this.addNewRow();
          }}
        >
          пилус
        </Button>{" "}
        <InputGroup>
          <Input
            placeholder="Name"
            onChange={e => {
              this.setState({ name: e.target.value });
            }}
            value={name}
          />
          <Input
            placeholder="Description"
            onChange={e => {
              this.setState({ descr: e.target.value });
            }}
            value={descr}
          />
        </InputGroup>
      </div>
    );
  }
}

export default TableWrap;
