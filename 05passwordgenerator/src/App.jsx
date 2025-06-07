import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length,setLenght] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [CharAllowed,setCharacterAllowed] = useState(false);
  const [password,setpassword] = useState("");
  // ref hook 
  const passwordRef = useRef(null);

  
  
  const passwordGenerator = useCallback(() =>{
     let pass = ""
     let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
     if(numberAllowed) str += "0123456789";
     if(CharAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?";
     for (let i = 1; i < length; i++){
       let char = Math.random() * str.length + 1
        char = Math.floor(char)
        pass += str.charAt(char)
     }
      setpassword(pass)


  },[length,numberAllowed,CharAllowed,setpassword]) 
  // useCallback is used to memoize the function so that it doesn't get recreated on every render

  const copypasswordToclipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,15)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  },[length,numberAllowed,CharAllowed,passwordGenerator])


  return (
   
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input 
      type='text'  
      value={password} 
      placeholder='password'
      readOnly
      ref={passwordRef}
      />
      <button
        onClick={copypasswordToclipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
        copy</button>

    </div>
    <div className='flex items-center gap-x-1'>
      <input 
      type="range"
      min={6}
      max = {15}
      value={length}
      className='cursor-pointer'
      onChange={(e) => setLenght(e.target.value)} 
     />
     <label >Length : {length}</label>

    </div>
    <div className='flex items-center gap-x-1 '>
      <input 
      type="checkbox"
      defaultchecked={numberAllowed}
      onChange={() => {
        setNumberAllowed((prev) => !prev);
      }}
      />
      <label>Numbers</label>
     </div>
    <div className='flex items-center gap-x-1 '>
      <input 
      type="checkbox"
      defaultchecked={CharAllowed}
      onChange={() => {
        setCharacterAllowed((prev) => !prev);
      }}
      />
      <label>Characters</label>
      </div>
 </div>
  )
}

export default App
