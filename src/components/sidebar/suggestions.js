// Appears on right-side of sidebar
import React, {memo} from 'react'
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { getSuggestedProfiles } from '../../services/firebase';
import SuggestedProfile from './suggested-profile';

function Suggestions({ userId, following, loggedInUserDocId }) { // Get list of suggested profiles based on who the user is not following 
  const [profiles, setProfiles] = useState(null);

  useEffect(() => { 
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(userId, following);
      setProfiles(response);
    }

    if (userId) {
      suggestedProfiles();
    }
  }, [userId]);
  
  return !profiles ? (
    <Skeleton count={1} height={150} className="mt-5" /> // want profiles height bit bigger than the user height in user.js
  ) : profiles.length > 0 ? ( // render profiles if they exist 
    <div className="rounded flex flex-col">
      <div className="text-sm flex items-center align-items justify-between mb-2">
        <p className="font-bold text-gray-base">Suggestions for you</p>
      </div>
      <div className="mt-4 grid gap-5">
        {profiles.map((profile) => (
          <SuggestedProfile
            key={profile.docId}
            profileDocId={profile.docId}
            username={profile.username}
            profileId={profile.userId}
            userId={userId}
            loggedInUserDocId={loggedInUserDocId}
          />
        ))}
      </div>
    </div>
  ) : null;
}

export default memo(Suggestions) // memo ushers Performance boost by limiting unnecessary rerenders 

Suggestions.propTypes = {
  userId: PropTypes.string,
  following: PropTypes.array,
  loggedInUserDocId: PropTypes.string
};
