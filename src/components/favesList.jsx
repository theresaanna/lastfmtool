import { useQuery } from '@tanstack/react-query';

import { getFaves } from '../utils/API.js';

export default function FavesList(lastfmUsername) {
	const { isPending, isError, data, error } = useQuery({
		queryKey: ['favesList', lastfmUsername],
		queryFn: getFaves,
	})

	if (isPending) {
		return <span>Loading faves...</span>;
	}

	if (isError) {
		return <span>Error: {error.message}</span>;
	}

	return (
		<div className="faves">
			<ul className="favesList">
				{data.topartists?.artist.map((artist) => <li key={artist.name}>{artist.name}</li>)}
			</ul>
		</div>
	);
}

