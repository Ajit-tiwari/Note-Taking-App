import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Notes from "./Notes";
import './App.css';

function App() {
  
  const [item,setItem]=useState([]);
  useEffect(()=>{
    document.title="Devloped by Ajit"
  });
  const addItem=(note)=>{
    setItem((prev)=>{
      return [...prev,note];
    });
    console.log(item);
  };
  const deleteValue=(id)=>{
    setItem((old)=>
      old.filter((val,idx)=>{
        return idx!==id;
      })
    )
  }
  return (
    <>
      <div className="App-win">
          <Header />
          <div className="App">
            <CreateNote passNote={addItem} />
            <div className="notes">
              {item.map((val,index)=>{
                return (
                  <Notes
                  key={index}  
                  id={index} 
                  title={val.title}
                  text={val.text}
                  passDelete={deleteValue}  
                  />
                );
              })}
            </div>
          </div>
      </div>
    </>
  );
}
export default App;
