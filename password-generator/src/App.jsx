import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numsAllowed, setNumsAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numsAllowed) {
      str += "0123456789";
    }

    if (charsAllowed) {
      str += "`!@#$%^&*()_+=[]{}~";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numsAllowed, charsAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, passwordGenerator, numsAllowed, charsAllowed]);

  let copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h4 className="text-4xl text-center text-white">Password Generator</h4>

        <div className="flex shadow rounded-lg overflow-hidden mt-4">
          <input
            className="outline-none w-full py-1 px-3 bg-white text-gray-800"
            type="text"
            value={password}
            placeholder="Password"
            ref={passwordRef}
            readOnly
          />

          <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white cursor-pointer px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>

        <div className="flex items-center gap-x-4 mt-4 text-sm">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
  
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={numsAllowed}
              id="numberInput"
              onChange={() => {
                setNumsAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={charsAllowed}
              id="characterInput"
              onChange={() => {
                setCharsAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
