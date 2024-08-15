import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
				<h1>Last.fm Music Comparison Tool</h1>
				<h2>Compare your favorite music with that of your friends!</h2>
      </header>
			<main className="App-main">
				<form className="lastfmUserInfo">
					<label for="lastfmUserName">
						What is your last.fm username?
					</label>
					<input type="text" name="lastfmUserName" id="lastfmUserName" required placeholder="superexciting"/>
				</form>
			</main>	
    </div>
  );
}

export default App;
