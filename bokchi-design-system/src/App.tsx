import './App.css';
import Label from './components/Label';
import InputField from './components/InputField';
import IconButton from './components/IconButton';
import { useState } from 'react';

function App() {
  const [isError, setIsError] = useState(false);


  return (
    <>
      <Label htmlFor='input_email' children='Email'/>
      <InputField 
        id="input_email" 
        iconPath={IconButton}
        iconAlt="delete"
        onIconClick={() => {}}
        placeholder="이메일을 입력하세요"
        onChange={ () => {}}
        value=""
        errorMessage="이메일을 확인해주세요"
        isError={isError}
      />
      <br/>
      <Label htmlFor='input_address' children='Address'/>
      <InputField 
        id="input_address" 
        iconPath={IconButton}
        iconAlt="delete"
        onIconClick={() => {}}
        placeholder="주소를 입력하세요"
        onChange={ () => {}}
        value=""
        errorMessage="주소를 확인해주세요"
        isError={isError}
      />
      <br/>
      <button 
        onClick={() => setIsError((prv) => !prv)}
      >error message toggle</button>
    </>
  )
}

export default App
