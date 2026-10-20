import Books from './components/books/Books.jsx';
import Header from './components/layout/Header';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Books />
      </main>
    </div>
  );
}

export default App;
