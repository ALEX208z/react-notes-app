import React, { useEffect, useState } from 'react'
import {CiSearch} from 'react-icons/ci'
import {MdClose} from 'react-icons/md'
import {BsPlusLg} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import NoteItem from '../components/NoteItem'


const Notes = ({notes}) => {

    const [showSearch,setShowSerch] = useState(false);
    const [text,setText] = useState('');
    const [filteredNotes,setFilteredNotes] = useState(notes)

    const handleSearch = () => {
        setFilteredNotes(notes.filter(note=>{
            if(note.title.toLowerCase().match(text.toLowerCase())){
                return note;
            }
        }))
    }

    useEffect(handleSearch,[text])

  return (
    <>
    <section>
        <header className='notes__header'>
        {!showSearch && <h2>My Notes</h2>}
        {showSearch && <input type="text" value={text} onChange={(e)=>{setText(e.target.value);handleSearch();}} autoFocus placeholder='Keyword...'/>}
        <button className='btn' onClick={()=>setShowSerch(prevState => !prevState)}>{showSearch? <MdClose/>:<CiSearch/>}</button>
        </header>
        <div className='notes__container'>
            {filteredNotes.length === 0 && <p className='empty__notes'>Notes not found.</p>}
            {
                filteredNotes.map(note => <NoteItem key={note.id} note={note} />)
            }
        </div>
        <Link to="/create-note" className='btn add__btn'><BsPlusLg/></Link>
    </section>
    </>
  )
}

export default Notes
