import React, { useState } from 'react';
import ScrollBox from '../../ref/src/ScrollBox';
import Average from './Average';
import Counter from './Counter';
import Info from './Info';

const App = () => {
  // const [visible, setVisible] = useState(false);
  // return (
  //   <div>
  //     <button
  //       onClick={() => {
  //         setVisible(!visible);
  //       }}
  //     >
  //       {visible ? '숨기기' : '보이기'}
  //     </button>
  //     <hr />
  //     {visible && <Info />}
  //   </div>
  // );
  return <ScrollBox />
};

export default App;