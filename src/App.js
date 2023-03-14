import { Routes, Route } from "react-router-dom"
import './App.css';
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import Notes from "./pages/Notes";
// import dummyNotes from './dummy_notes'
import { useEffect, useState } from "react";



  const App =()=>{
    const[notes,setNotes]=useState(JSON.parse(localStorage.getItem('notes')) || [])
    // console.log(notes);

    useEffect(()=>{
      localStorage.setItem('notes',JSON.stringify(notes))
    },[notes])
  
  return (
   <>
    <main id="app">

    <Routes>
        <Route exact path="/" element={ <Notes notes={notes}/> } />
        <Route exact path="/create-note" element={ <CreateNote setNotes={setNotes}/> } />
        <Route exact path="/edit-note/:id" element={ <EditNote notes={notes} setNotes={setNotes}/> } />
      </Routes>

    </main>
   </>
  );
  }

export default App;
