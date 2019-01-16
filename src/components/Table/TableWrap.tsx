import * as React from "react";
import TableRow from "./TableRow";
import Aside from "./Aside";
import { data } from "../../Constants/tableRowData";
import "bootstrap/dist/css/bootstrap.css";
import { Table, Button, InputGroup, Input } from "reactstrap";


export interface ITRow {
  id: number;
  name: string;
  row: string;
}

export interface ITable {
  id: number;
  tRows: Array<ITRow>;
  nameBtn: string;
}

interface State {
  newTRows: Array<ITable> | null;
  name: string;
  descr: string;
  idTable: number | null;
}

class TableWrap extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      newTRows: null,
      name: "",
      descr: "",
      idTable: null
    };
  }

  componentWillMount() {

    data.map(tableData => {
      if (tableData.id === 111) this.setState({ idTable: tableData.id });
    })
    this.setState({ newTRows: [...data] });
  }

  // Удаление
  delRow = (id: number): void => {
    const { newTRows, idTable } = this.state;

    const newtRows = newTRows.map((row): any => {
      if (row.id === idTable) {

        row.tRows = row.tRows.filter((rowEl): any => {
          if (rowEl.id !== id) return rowEl;
        });
      }
      return row
    });
    this.setState({ newTRows: newtRows });
  };


  // добавление строк в таблицу
  addNewRow = (): void => {
    const { newTRows, name, descr, idTable } = this.state;
    // если ничего не заполнили
    if (!name && !descr) return;

    const createdId = Math.random() * 0.5;
    newTRows.map((item) => {
      if (item.id === idTable) {
        item.tRows.push({ id: createdId, name: name, row: descr });
        const addedRow = newTRows;
        this.setState({ newTRows: addedRow, name: '', descr: '' });
      }
    })
  };

  changeTable = (id: number) => {
    const { idTable } = this.state;
    // Не делать лишний запрос
    if (idTable === id) return

    this.setState({ idTable: id })
  }

  render() {
    const { newTRows, name, descr, idTable } = this.state;
    return (
      <div>
        {newTRows.map((item) => { return (<Aside nameButton={item.nameBtn} id={item.id} key={item.id} changeTable={this.changeTable} />) })}

        <Table dark>
          <tbody>
            {newTRows.map(elem => (
              idTable === elem.id && elem.tRows.map((rows) => (<TableRow elem={rows} key={rows.id} delRow={this.delRow} />))
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
