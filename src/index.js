import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [r, setR] = React.useState(100);
  const [b, setB] = React.useState(100);
  const [g, setG] = React.useState(100);

  return (
    <div>
      <div style={{
         display: 'flex',
         justifyDirection: 'row',
      }}>
        <div>
          <h4>Red Value</h4>
          <input value={r} onChange={e => {setR(e.target.value)}}/>
        </div>
        <div>
          <h4>Blue Value</h4>
          <input value={b} onChange={e => { setB(e.target.value) }} />
        </div>
        <div>
          <h4>Green Value</h4>
          <input value={g} onChange={e => { setG(e.target.value) }} />
        </div>
      </div>
      <div style={{
        height: 250,
        width: 250,
        background: `rgb(${r},${b},${g})`
      }}/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
