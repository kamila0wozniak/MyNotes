import React from 'react'
import styles from './Note.module.css'

export default function Note(props){

    function handleClick() {
        props.onDelete(props.id)
    }

    return(
        <div className={styles.note}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>Delete MyNote</button>
        </div>
    )
}
