import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useState, useEffect } from 'react';
import { getSelectedUser, showUserList } from '../../Services/user.service';
import TextField from '@material-ui/core/TextField';
import ShowUser from './ShowUser';

const SearchBar = () => {
  const [options, setOptions] = useState([]);
  const [name, setName] = useState('');
  const [userData, setUserData] = useState([]);
  const [showUser, setShowUser] = useState(false);
  const [rowData, setRowData] = useState([]);

  const getUser = () => {
    showUserList().then((data) => {
      setRowData(data);
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (name.length < 1) {
      setOptions([]);
      return;
    }

    getSelectedUser(name).then((data) => {
      data.body.hits.hits.map((hit) => {
        if (!userData.includes(hit._source)) {
          setUserData((prevState) => [...prevState, hit._source]);
        }
        if (!options.includes(hit._source.firstname)) {
          setOptions((prevState) => [...prevState, hit._source.firstname]);
        }
        if (!options.includes(hit._source.lastname)) {
          setOptions((prevState) => [...prevState, hit._source.lastname]);
        }
        if (!options.includes(hit._source.description)) {
          setOptions((prevState) => [...prevState, hit._source.description]);
        }
      });
    });
  }, [name]);

  return (
    <div>
      <Autocomplete
        options={options}
        onInputChange={(event, newValue, reason) => {
          if (reason === 'input') {
            setName(newValue);
          }
        }}
        getOptionLabel={(option) => option}
        onKeyUp={(event) => {
          if (event.keyCode === 8) {
            setUserData(rowData);
          }
        }}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            setShowUser(true);
          } else {
            setUserData([]);
          }
        }}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} size="small" placeholder="Search..." variant="outlined" />}
      />
      <br />
      {showUser ? <ShowUser data={userData} /> : <ShowUser data={rowData} />}
    </div>
  );
};

export default SearchBar;
