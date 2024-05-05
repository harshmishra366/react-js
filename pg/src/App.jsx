import { useState, useCallback, useEffect } from 'react';

import './App.css';

function App() {
  const [pass, setPass] = useState('');
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass1 = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (number) str += '1234567890';
    if (char) str += '!@#*';
    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);// bit of confusion now
      pass1 += str.charAt(charIndex);
    }
    setPass(pass1);
  }, [length, number, char]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, char]);

  return (
    <>
      <div style={{ backgroundColor: 'gray' }}>
        <h1 className='p-4 font-bold m-10 mb-32 rounded-md text-lg text-white'>Random Password Generator</h1>
        <input type="text" placeholder='password' value={pass} readOnly />
        <label htmlFor=""><button className='p-4 text-white' style={{ backgroundColor: 'blue' }}>copy</button></label>
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
        />
        <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          checked={number}
          id="numberInput"
          onChange={() => {
            setNumber((prev) => !prev);
          }}
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          checked={char}
          id="characterInput"
          onChange={() => {
            setChar((prev) => !prev);
          }}
        />
        <label htmlFor="characterInput">Characters</label>
      </div>
    </>
  );
}

export default App;
