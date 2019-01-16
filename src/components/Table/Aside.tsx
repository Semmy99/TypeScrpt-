import * as React from "react";
import { Button } from "reactstrap";
import './style.css';

export interface IProps {
	id?: number,
	nameButton: string,
	changeTable: Function,
}


export default class Aside extends React.Component<IProps, object> {
	constructor(props: IProps) {
		super(props);
	}

	render() {
		const { nameButton, changeTable, id } = this.props
		return (
			<aside className="wrapNav">
				<Button color="info" onClick={() => { changeTable(id) }} >{nameButton}</Button>{' '}
			</aside>
		)
	}
}

