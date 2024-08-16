import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getFriends } from '../utils/API.js';
import FavesList from '../components/favesList.jsx';

export default function FriendsList(lastfmUsername) {
	const [activeFriend, setActiveFriend] = useState('');
	const { isPending, isError, data, error } = useQuery({
    queryKey: ['friends', lastfmUsername],
    queryFn: getFriends,
  })

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

	const handleFriendClick = (e, friendName) => {
		e.preventDefault();
		setActiveFriend(friendName);
	}

	return (
		<div className="friends">
			<ul className="friendsList">
				{data.friends?.user.map((friend) => <li key={friend.name}><a href="#" onClick={(e) => handleFriendClick(e, friend.name)}>{friend.name}</a></li>)}
			</ul>
			{activeFriend && <FavesList lastfmUsername={activeFriend} />}
		</div>
	);
}
