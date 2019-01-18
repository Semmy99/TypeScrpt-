import * as React from "react";
import TableRow from "./TableRow";
import Aside from "./Aside";
import { data } from "../../Constants/tableRowData";
import "bootstrap/dist/css/bootstrap.css";
import {
  Table, Button, InputGroup, Input,
  Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";


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
  modal: boolean;
  modalName: string;
  modalDescr: string;
}

class TableWrap extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      newTRows: null,
      name: "",
      descr: "",
      idTable: null,
      modal: false,
      modalName: '',
      modalDescr: '',
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
  // меняет таблицу
  changeTable = (id: number) => {
    const { idTable } = this.state;
    // Не делать лишний запрос
    if (idTable === id) return

    this.setState({ idTable: id })
  }

  // Для модалки
  toggle = (id?: any, e?: any) => {

    console.log('ID', id, typeof id)
    console.log('e', e)


    this.setState({
      modal: !this.state.modal
    });
  }

  changeValue = (e: any, nameInput: string) => {
    const value = e.target.value;
    this.setState({ [nameInput]: value } as Pick<State, keyof State>)
  }

  editRow = () => {
    this.setState({ modal: false })
  }

  render() {
    const { newTRows, name, descr, idTable, modal, modalName, modalDescr } = this.state;
    return (
      <div>
        {newTRows.map((item) => { return (<Aside nameButton={item.nameBtn} id={item.id} key={item.id} changeTable={this.changeTable} />) })}

        <Table dark>
          <tbody>
            {newTRows.map(elem => (
              idTable === elem.id && elem.tRows.map((rows) => (<TableRow elem={rows} key={rows.id} delRow={this.delRow} toggle={this.toggle} />))
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
            onChange={e => { this.changeValue(e, 'name') }}
            value={name}
          />
          <Input
            placeholder="Description"
            onChange={e => { this.changeValue(e, 'descr') }}
            value={descr}
          />
        </InputGroup>

        <div>
          <Modal isOpen={modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
              <Input
                placeholder="Name"
                value={modalName}
                onChange={e => {
                  this.setState({ modalName: e.target.value });
                }}
              />
              <Input
                placeholder="Description"
                value={modalDescr}
                onChange={e => {
                  this.setState({ modalDescr: e.target.value });
                }}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.editRow}>Do Something</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>{' '}
            </ModalFooter>
          </Modal>
        </div>

      </div>
    );
  }
}

export default TableWrap;
