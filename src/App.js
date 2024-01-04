import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Welcome to My Awsome Video Streaming Site</h2>
      <video width="700px" height="400px" controls>
        <source src="https://d1391bfrkiqer6.cloudfront.net/AT-cm_Lf0SRW94or8Lgr2lTuTTFw.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
