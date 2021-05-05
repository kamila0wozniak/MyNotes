import React, {useState} from 'react'
import styles from './CreateNote.module.css'

export default function CreateNote(props){


    const [note, setNote] = useState({
        title:"",
        content:""
    });

    function handleChange(event){
        const {name, value} = event.target;

        setNote(prevNote=>{
            return{
                ...prevNote,
                [name]:value
            }
        })
    }

    function addNote(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        });
        event.preventDefault();
    }

    return(
        <div className={styles.note}>
            <form>
                <input
                    name="title"
                    value={note.title}
                    onChange={handleChange}
                    placeholder="Note Title"
                />
                <textarea
                    name="content"
                    value={note.content}
                    onChange={handleChange}
                    placeholder="Write your note"
                    rows="3"/>
                <button onClick={addNote}>Add</button>
            </form>
        </div>
    )
}
