import './App.css';
import { useState } from 'react';

// the 'types' for
type InfoState = {
  fullName: string;
  day: number;
  month: string;
};

const App: React.FC = () => {
  const [info, setInfo] = useState<InfoState>({
    fullName: '',
    day: 0,
    month: '',
  });

  const changeHandler = (
    // a react change event: either input or select coming back
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setInfo((prevValue) => ({
      ...prevValue,
      // day could be empty string or NaN
      [name]: name === 'day' ? parseInt(value) || 0 : value,
    }));
  };

  // this is from a form event returning a form element
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    console.log(info);
  };

  return (
    <div className="App">
      <h1>Welcome!</h1>
      <form onSubmit={submitHandler}>
        <h2>Who are you?</h2>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          value={info.fullName}
          onChange={(event) => changeHandler(event)}
        />
        <h2>When is your birthday?</h2>
        <label htmlFor="day">Day</label>
        <input
          type="number"
          name="day"
          id="day"
          value={info.day}
          onChange={(event) => changeHandler(event)}
        />
        <label htmlFor="name">Month</label>
        <select
          name="month"
          id="month"
          value={info.month}
          onChange={(event) => changeHandler(event)}
        >
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
        <button type="submit" className="submit">
          Go!
        </button>
      </form>
    </div>
  );
};

export default App;
