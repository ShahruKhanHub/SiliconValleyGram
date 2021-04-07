import { createContext } from 'react';
// in context get bunch of functions from firebase to insert info and have this on the top most level 
// ie if user likes a photo need access to that info 
const FirebaseContext = createContext(null); 
export default FirebaseContext;
