import React, { useState, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { showUserList } from '../../Services/user.service';

export default forwardRef((props, ref) => {
  const [filterText, setFilterText] = useState(null);
  const [userData, setUserData] = useState([]);

  //setFirstvalue as default
  const getSelectedItem = () => {
    const item = userData.find((option) => {
      if (option.firstname == userData[0].firstname) return option.firstname;
    });
    return item || {};
  };

  // expose AG Grid Filter Lifecycle callbacks
  useImperativeHandle(ref, () => {
    return {
      doesFilterPass(params) {
        // make sure each word passes separately, ie search for firstname, lastname
        let passed = true;
        filterText
          .toLowerCase()
          .split(' ')
          .forEach((filterWord) => {
            const value = props.valueGetter(params);

            if (value.toString().toLowerCase().indexOf(filterWord) < 0) {
              passed = false;
            }
          });

        return passed;
      },

      isFilterActive() {
        return filterText != null && filterText !== '';
      },

      getModel() {
        return { value: filterText };
      },

      setModel(model) {
        setFilterText(model.value);
      },
    };
  });

  const onChange = (event) => {
    setFilterText(event.target.value);
  };

  useEffect(() => {
    showUserList().then((data) => {
      setUserData(data);
    });
    // props.filterChangedCallback();
  }, []);

  return (
    <Autocomplete
      options={userData}
      // onChange={onChange}
      getOptionLabel={(option) => option.firstname || ''}
      value={getSelectedItem()}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} size="small" variant="outlined" />}
    />
  );
});

// const AutoCompleteFilter = () => {
//   const [userData, setUserData] = useState([]);

//   useEffect(() => {
//     showUserList().then((data) => {
//       setUserData(data);
//     });
//   }, []);

//   return (
//     <Autocomplete
//       options={userData}
//       getOptionLabel={(option) => option.firstname}
//       style={{ width: 300 }}
//       renderInput={(params) => <TextField {...params} label="FirstName" size="small" variant="outlined" />}
//     />
//   );
// };

// export default AutoCompleteFilter;
