import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <form action="">
        <h2>Who are you?</h2>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <h2>When is your birthday?</h2>
        <label htmlFor="day">Day</label>
        <input type="number" name="day" id="day" />
        <label htmlFor="name">Month</label>
        <select name="month" id="month">
          <option value="january">January</option>
          <option value="february">February</option>
          <option value="march">March</option>
          <option value="april">April</option>
          <option value="may">May</option>
          <option value="june">June</option>
          <option value="july">July</option>
          <option value="august">August</option>
          <option value="september">September</option>
          <option value="october">October</option>
          <option value="november">November</option>
          <option value="december">December</option>
        </select>
        <input type="submit" value="Go!" className='submit'/>
      </form>
    </div>
  );
}

export default App;
