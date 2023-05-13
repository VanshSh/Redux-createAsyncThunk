import ComponentWithRedux from './components/ComponentWithRedux';
import { useSelector } from 'react-redux';
import '../src/main.css';

function App() {
  const color = useSelector((state) => state.changeColor.initalColor);
  return (
    <div className="maindiv" style={{ backgroundColor: `#${color}` }}>
      <h1 className="text-center">Redux + createAsyncThunk</h1>
      <ComponentWithRedux />
    </div>
  );
}

export default App;
