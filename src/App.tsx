import './App.css'

function App() {
  const redirectToLocation = () => {
    window.location.href = "https://www.google.com/maps?q=48FR+RW2,+Fujairah+-+United+Arab+Emirates";
  };
  return (
    <>
      <h1>Click to visit location</h1>
      <div className="card">
        <button onClick={redirectToLocation}>
        Go to Location
        </button>
      </div>
    </>
  )
}

export default App
