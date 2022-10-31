import logo from './logo.svg';
import './App.css';
// import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';

function App() {

  const expenses = [
    {id: 'e1', title: 'Item 1', amount: 234.45, date: new Date(2022, 17, 5)},
    {id: 'e2', title: 'Item 2', amount: 234.45, date: new Date(2022, 17, 5)},
    {id: 'e3', title: 'Item 3', amount: 234.45, date: new Date(2022, 17, 5)},
    {id: 'e4', title: 'Item 4', amount: 234.45, date: new Date(2022, 17, 5)}
  ];

  return (
    <div className="App">
      <h2>Lets Get Started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
