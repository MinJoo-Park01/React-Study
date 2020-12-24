
import './App.css';

function App() {
  const name = '리액트';
  return (
    <>
      <div className="react" //주석이 여긴써지네
      >{name}</div>
      <input></input>
      {/*주석은 이렇게 */}

      <input />
    /*주석 no*/
    </>
    //주석이 여기도 되는데 왜 태그안에서는 안되는것이냐
  )
}
//왜 주석처리가 여기서는 되는데 위에서는 안되냐
export default App;
