import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { getUser } from '../../services/get-user/get-user';
import { ProfileCard } from '../../components/ProfileCard/ProfileCard';
import { userInformationAdapter } from '../../services/user-information-adapter/user-information-adapter';
import { Table } from '../../components/Table/Table';

export const UserDetail = () => {
  const { username } = useParams();
  const [userProfile, setUserProfile] = useState<any>();
  const [userDetails, setUserDetails] = useState<any>();

  const getUserByUsername = async (username: string) => {
    const { data } = await getUser(username);
    setUserProfile(data);
    setUserDetails(userInformationAdapter(data));

    console.log(data);
  };

  useEffect(() => {
    if (username) {
      getUserByUsername(username);
    }
  }, [username]);

  if (userProfile && userDetails) {
    return (
      <div className="flex flex-col items-center justify-center gap-7">
        <div>
          <ProfileCard
            name={userProfile.name}
            description={userProfile.bio}
            image={userProfile.avatar_url}
            username={userProfile.login}
          />
        </div>
        <div>
          <Table items={userDetails} />
        </div>
      </div>
    );
  }

  return <>nada ainda</>;
};
