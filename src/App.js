import { useState, StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useForm } from '@tanstack/react-form';

import './App.css';
import FriendsList from './components/friendsList.jsx';
import FavesList from './components/favesList.jsx';

const queryClient = new QueryClient();

function App() {
	const [lastfmUsername, setLastfmUsername] = useState('');

	const form = useForm({
		defaultValues: {
			'lastfmUsername': ''
		},
		onSubmit: async (values) => {
			// todo handle bad values
			setLastfmUsername(values.value);
			return values.value;
		}
	});

	return (
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<div className="App">
					<header className="App-header">
						<h1>Last.fm Music Comparison Tool</h1>
						<h2>Compare your favorite music with that of your friends!</h2>
					</header>
					<main className="App-main">
						<form className="lastfmUserInfo" onSubmit={(e) => {
							e.preventDefault(e)
							form.handleSubmit(e.target.value);
							return e.target.value;
						}
					}>
						<form.Field
							name="lastfmUsername"
							children={(field) => (
								<div className="lastfmUserNameForm">
									<label htmlFor="lastfmUsername">
										What is your last.fm username?
									</label>
									<input
										type="text"
										name="lastfmUsername"
										required
										value={field.state.value}
										onChange={(e) => {
											// handle the unexpected
											field.handleChange(e.target.value)
											}
										}
									/>
								</div>
							)}/>
							<button type="submit">Submit</button>
						</form>
						{lastfmUsername && <FavesList lastfmUsername={lastfmUsername} />}
						{lastfmUsername && <FriendsList lastfmUsername={lastfmUsername} />}
					</main>	
				</div>
			</QueryClientProvider>
		</StrictMode>
	);
}

export default App;
