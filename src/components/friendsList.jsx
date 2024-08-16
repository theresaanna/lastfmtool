import { useQuery } from '@tanstack/react-query';

import { getFriends } from '../utils/API.js';


export default function FriendsList(lastfmUsername) {
	const { isPending, isError, data, error } = useQuery({
    queryKey: ['friends', lastfmUsername],
    queryFn: getFriends,
  })

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

	return (
		<div className="friends">
			<ul className="friendsList">
				{console.log(data)}
			  {data.friends?.user.map((friend) => <li key={friend.name}>{friend.name}</li>)}
			</ul>
		</div>
	);
}
