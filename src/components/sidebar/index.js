// default sidebar 
import { useContext } from 'react';
import User from './user';
import Suggestions from './suggestions';
import LoggedInUserContext from '../../context/logged-in-user';

/* Destructure out the values from 'user'
     Values we want are docId, userId, following, username, fullName */
export default function Sidebar() {
  const { user: { docId = '', fullName, username, userId, following } = {} } = useContext(
    LoggedInUserContext
  );

  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
      <Suggestions userId={userId} following={following} loggedInUserDocId={docId} />
    </div>
  );
}
