import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth, db } from '../Config/FirestoreLiteConfig';

const ShowList = () => {
  var [userList, setUserList] = useState([]);
  const history = useHistory();

  const updateHandler = async (event) => {
    history.push(`/updateuser/${event.target.id}`);

  };

  const deleteHandler = async (event) => {
    const user = db.ref(`users/${event.target.id}`);

    await user.delete();
    showUser();
  };

  const showUser = async () => {
    const userList = db.ref('users');
    const docList = await userList.list();
    setUserList(docList.documents);
  };

  useEffect(async () => {
    showUser();
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
        <tbody>
        {userList.map((user,key) => (
          <tr key={key}>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>
              <button id={user.__meta__.id} onClick={updateHandler}>
                Update
              </button>
            </td>
            <td>
              <button id={user.__meta__.id} onClick={deleteHandler}>
                Delete
              </button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowList;
