import React from 'react';
import './App.css';
import firebase from './Firebase';
import logo from './logo.svg';
function push() {
  firebase.firestore().collection("hoge").doc("kinjyo").set({
    name: "金城だよ"
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error: any) => {
    console.error("Error writing document: ", error);
});
}
function hoge() {
    console.log('hoge')
  }
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
       <button onClick={push}>hoge</button>
      </header>
    </div>
  );
}

export default App;
