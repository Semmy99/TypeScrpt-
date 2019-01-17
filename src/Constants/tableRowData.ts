export interface ITRow {
	id: number,
	name: string,
	row: string,
}

export interface ITable {
	id: number,
	tRows: Array<ITRow>,
	nameBtn: string
}

export const data: Array<ITable> = [
	{
		id: 111,
		nameBtn: 'Firts button',
		tRows: [
			{ id: 1, name: 'name1', row: 'text1' },
			{ id: 2, name: 'name2', row: 'text2' },
			{ id: 3, name: 'name3', row: 'text3' },
			{ id: 4, name: 'name4', row: 'text4' },
		]
	},
	{
		id: 222,
		nameBtn: 'Second button',
		tRows: [
			{ id: 21, name: 'name22221', row: 'text22221', },
			{ id: 22, name: 'name22222', row: 'text22222' },
			{ id: 23, name: 'name22223', row: 'text22223' },
			{ id: 24, name: 'name22224', row: 'text22224' },
		]
	}

]
