import React, { useState, useEffect } from 'react';
import { deleteUser, showUserList } from '../../Services/user.service';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import { Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Slide from '@material-ui/core/Slide';

const ShowUser = (props) => {
  const { data } = props;
  const [rowData, setRowData] = useState([]);
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  //ColumnDefination
  const columnDefs = [
    { headerName: 'Id', field: 'id' },
    {
      headerName: 'FirstName',
      field: 'firstname',
    },
    { headerName: 'LastName', field: 'lastname' },
    { headerName: 'Email', field: 'email' },
    { headerName: 'File', field: 'file' },
    { headerName: 'Description', field: 'description' },
    {
      headerName: 'Actions',
      field: 'id',
      cellRendererFramework: (params) => (
        <div>
          <Grid container direction="row" justifyContent="space-between" alignItems="center">
            <Button variant="contained" color="primary" onClick={() => editHandler(params.value)}>
              Edit
            </Button>
            <Button variant="contained" color="primary" onClick={() => deleteHandler(params.value)}>
              Delete
            </Button>
          </Grid>
        </div>
      ),
    },
  ];

  const defaultColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true,
  };

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  const onClickHandler = () => {
    history.push('createuser');
  };

  //EditHandler function
  const editHandler = (id) => {
    history.push(`/updateuser/${id}`);
  };

  //DeleteHandler Function
  const deleteHandler = (id) => {
    deleteUser(id).then(() => {
      enqueueSnackbar('User Deleted Successfully', {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
        variant: 'success',
        TransitionComponent: Slide,
      });
      getUser();
    });
  };

  // getUserList function
  const getUser = () => {
    showUserList().then((data) => {
      setRowData(data);
    });
  };

  useEffect(() => {
    setRowData(data);
  }, [data]);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 1050 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        onGridReady={onGridReady}
      ></AgGridReact>
      <br />
      <Button variant="contained" color="primary" onClick={onClickHandler}>
        Add User
      </Button>
    </div>
  );
};

export default ShowUser;
