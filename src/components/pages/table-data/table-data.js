import React from 'react';
import DataTable from 'react-data-table-component';
import Loader from 'components/common/loader';
import Error from 'components/common/error';
import { useFetch } from 'api';
import { GET_NUTS_POP } from 'api/constants';
import { sparqlDataToTable } from 'utils';

const customStyles = {
	rows: {
		style: {
			minHeight: '25px',
			//backgroundColor: '#e0e0e0',
		},
	},
	columns: {
		style: {
			minHeight: '13px',
			//backgroundColor: '#e0e0e0',
		},
	},
	headCells: {
		style: {
			fontSize: '13px',
			fontWeight: '10',
			textTransform: 'uppercase',
			paddingLeft: '0 8px',
			backgroundColor: '#9dd4e3',
		},
	},
	cells: {
		style: {
			fontSize: '15px',
			paddingLeft: '0 8px',
			width: '450px'
		},
	},
};

const Table = ({ endpoint, municipality, date, lau }) => {

	let dateEvent ;
	if(date!=null){
		dateEvent = date.split('T')[0];
	} else {
		dateEvent = '';
	}

	const { data, error, loading } = useFetch(endpoint, [], '', '', '', lau,  municipality , '', dateEvent ); 

	if (loading) return <Loader />;
	if (error) return <Error message={error.toString()} />;

	const sparqlData = sparqlDataToTable(data);
	const { columns, data: tableData } = sparqlData;

	return (

		<DataTable
			striped={true}
			highlightOnHover={true}
			columns={columns}
			data={tableData}
			customStyles={customStyles}
			pagination
			progressComponent={<Loader color="primary" size="md" className="justify-self-center align-self-center"/>}
			//progressPending={loader}
			//paginationRowsPerPageOptions={rowsPerPage}
		/>
	);
};

export default Table;
