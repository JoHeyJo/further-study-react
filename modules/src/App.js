import logo from './logo.svg';
import './App.css';
import { choice, remove } from './helpers'
import { foods } from './food'

function App() {
  const food = choice(foods);
  const fruitslefremove(foods, food)
  return (
    <div className="App">
      <p>“I’d like one {food}, please.”</p>
      <p>Here you go: {food} </p>
      <p>Delicious! May I have another?</p>
      <p>I'm sorry, we're all out. We have {foods.length} left.</p>
    </div>
  );
}

export default App;
