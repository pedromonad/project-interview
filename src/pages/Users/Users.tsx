import React, { useState } from 'react';

import { InputDebounce } from '../../components/InputDebounce/InputDebounce';
import { useFindUserByUsername } from '../../services/use-find-user-by-username/use-find-user-by-username';
import { UserCard } from '../../components/UserCard/UserCard';

export const Users = () => {
  const [userFound, setUserFound] = useState<any>('');

  const getUserByUsername = async (username: string) => {
    const { data } = await useFindUserByUsername(username);
    setUserFound(data);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center h-screen">
      <div>
        <form id="search-form" role="search">
          <InputDebounce
            label="Search github users"
            aria-label="Search github users"
            placeholder="Search by github username"
            type="search"
            name="search"
            onChange={(username) => getUserByUsername(username)}
          />
        </form>
      </div>
      {userFound && (
        <a href={`/users/${userFound.login}`}>
          <UserCard
            image={userFound.avatar_url}
            name={userFound.name}
            description={userFound.bio}
          />
        </a>
      )}
    </div>
  );
};
