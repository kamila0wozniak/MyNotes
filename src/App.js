import './App.css'
import React, {useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Note from './components/Note'
import CreateNote from "./components/CreateNote"

function App() {

    const [notes, setNotes] = useState([]);

    function addNewNote(newNote){
        setNotes(prevNotes=>{
            return [...prevNotes, newNote]
        })
    }

    function deleteMyNote(id){
        setNotes(prevNotes =>{
            return prevNotes.filter((noteItem,index)=>{
                return index !== id;
            })
        })
    }


    return (
        <div className="App">
          <Header/>
          <CreateNote onAdd={addNewNote}/>
          {notes.map((noteItem, index)=>{
            return (
                <Note
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteMyNote}
            key={index}
            id={index}
            />
            )
            })}
          <Footer/>
        </div>
    )
  }



export default App
