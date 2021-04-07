// custom useUser hook 
import { useState, useEffect } from 'react';
import { getUserByUserId } from '../services/firebase';

export default function useUser(userId) {
  const [activeUser, setActiveUser] = useState();

  useEffect(() => {
    async function getUserObjByUserId(userId) {
      // here query for the user data in the firestore
      const [user] = await getUserByUserId(userId);
      setActiveUser(user || {}); // insert user response to the state of activeUser
    }
    // want to call getUser function only if userID exists 
    if (userId) {
      getUserObjByUserId(userId);
    }
  }, [userId]);
// when hook called, return activeUser as user 
  return { user: activeUser };
}
