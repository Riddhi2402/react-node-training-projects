import app from '../Config/firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { useState, useEffect } from 'react';

const DisplayData = () => {
  var [userObjects, setUserObjects] = useState([]);
  var db = getFirestore(app);

  //getUsers function
  const getUsers = async (db) => {
    const usersCol = collection(db, 'users');
    const userSnapshot = await getDocs(usersCol);
    const userList = userSnapshot.docs.map((doc) => doc.data());
    return userList;
  };

  const updateHandler = () => {};
  const deleteHandler = () => {};

  useEffect(async () => {
    setUserObjects(await getUsers(db));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
          </tr>
        </thead>
        {userObjects.map((user) => (
          <tr>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>
              <button onClick={updateHandler}>Update</button>
            </td>
            <td>
              <button onClick={deleteHandler}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
     
    </div>
  );
};

export default DisplayData;
