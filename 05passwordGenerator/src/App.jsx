import { useCallback, useEffect, useRef, useState } from "react";

function App() {

  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);           //useRef Hook

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*_{}[]."

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      // console.log(str.charAt(char))
      // console.log(pass)
    }

    setPassword(pass);

  },[length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current.setSelectionRange(0,4);
    window.navigator.clipboard.writeText(password);
    console.log(`password : ${password} copied to clipboard`)
    // alert(`password copied to clipboard`);
  },[password])

  useEffect(()=>{
   passwordGenerator();
  },[length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className=" w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-slate-700 text-orange-500">
      <h1 className="text-center my-3">Password Generator</h1>
      <div className="flex rounded-lg overflow-hidden my-5">
        <input type="text" value={password} readOnly placeholder="password" ref={passwordRef} className=" w-full outline-none px-3 py-2" />
        <button className=" bg-blue-800 px-4 hover:bg-blue-700" onClick={copyPasswordToClipboard}>Copy</button>
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-x-1">
          <input id="range" type="range" min={6} max={99} value={length} onChange={(e)=>setLength(e.target.value)}/>
          <label htmlFor="range">Length:{length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input id="numberInput" type="checkbox" defaultChecked={numberAllowed} onChange={()=> setNumberAllowed((prev)=> !prev)} />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input id="characterInput" type="checkbox" defaultChecked={charAllowed} onChange={()=>setCharAllowed((prev)=>!prev)}/>
          <label htmlFor="characterInput">SpecialCharacters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
