import React from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import ButtonComponent from '../Button';
import { useHistory } from 'react-router-dom';
import { DELETE_BOOK_MUTATION, GET_BOOKS } from '../../GraphQLQueries/Query';
import { useMutation } from '@apollo/client';
import HeaderComponent from '../Header';

const TableComponent = (props) => {
  const { bodyData, headerData, style } = props;

  //style for Table
  const useStyles = makeStyles({
    table: {
      width: style.width,
      margin: style.margin,
    },
  });

  const classes = useStyles();

  let history = useHistory();

  // //Delete Book mutation
  // const [deleteBook, {}] = useMutation(DELETE_BOOK_MUTATION);

  // //edit Handler
  // const editHandler = (id) => {
  //   console.log(id);
  //   history.push(`/updatebook/${id}`);
  // };

  // //delete Handler
  // const deleteHandler = (bookId) => {
  //   deleteBook({ variables: { id: bookId }, refetchQueries: [{ query: GET_BOOKS }] });
  // };

  return (
    <TableContainer className={classes.table}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align={style.align}>
              <HeaderComponent variant="h6">{headerData[0].column1}</HeaderComponent>
            </TableCell>
            <TableCell align={style.align}>
              <HeaderComponent variant="h6">{headerData[0].column2}</HeaderComponent>
            </TableCell>
            <TableCell align={style.align}>
              <HeaderComponent variant="h6">{headerData[0].column3}</HeaderComponent>
            </TableCell>
            <TableCell align={style.align}>
              <HeaderComponent variant="h6">{headerData[0].column4}</HeaderComponent>
            </TableCell>
            {/* <TableCell align={style.align}>{headerData[0].column5}</TableCell>
            <TableCell align={style.align}>{headerData[0].column6}</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {bodyData.map((value) => (
            <TableRow key={value.id}>
              <TableCell align={style.align}>{value.id}</TableCell>
              <TableCell align={style.align}>{value.name}</TableCell>
              <TableCell align={style.align}>{value.genre}</TableCell>
              <TableCell align={style.align}>{value.author.name}</TableCell>
              {/* <TableCell align={style.align}>
                <ButtonComponent
                  variant="contained"
                  color="primary"
                  id={value.id}
                  onClick={(event) => {
                    console.log(event.target.id);
                    editHandler(event.target.id);
                  }}
                >
                  Update
                </ButtonComponent>
              </TableCell>
              <TableCell align={style.align}>
                <ButtonComponent
                  variant="contained"
                  color="primary"
                  id={value.id}
                  onClick={(event) => deleteHandler(event.target.id)}
                >
                  Delete
                </ButtonComponent>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
