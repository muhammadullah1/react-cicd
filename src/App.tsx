import './App.css'

function App() {
  const redirectToLocation = () => {
    window.location.href = 'https://maps.app.goo.gl/h3o9TsB6HrZdUDWA8'
  }

  return (
    <>
      <h1>Click to visit location</h1>
      <div className='card'>
        <button onClick={redirectToLocation}>Go to Location</button>
      </div>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <iframe
          title='Google Map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.76233580964137!2d56.32716038340081!3d25.12901719552345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef4f9ac3e7963db%3A0x20d72e37c306b8dc!2sFujairah%20Recovery!5e0!3m2!1sen!2s!4v1732089133787!5m2!1sen!2s'
          width='600'
          height='450'
          style={{ border: '0' }}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </>
  )
}

export default App
