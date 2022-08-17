import React,{useEffect, useReducer}  from 'react'
import NoteList from './NoteList'
import Addnoteform from './Addnoteform'
import notesReducer from './reducers/notes'
import NotesContext from '././Context/notecontext'

const NoteApp = () => {
    // const [notes, setNotes] = useState([])
   
    const [notes, dispatch] = useReducer(notesReducer, [])
    useEffect(() => {
        const notesData = JSON.parse(localStorage.getItem('notes'))
        if(notesData) {
            dispatch({type: 'POPULATE_NOTES', notes: notesData})
        }
    },[])

    useEffect(()=> {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])


    const removeNote = (title) => {
        dispatch({
            type: 'REMOVE_NOTE',
            title
        })
    }

    return (
        <NotesContext.Provider value={{notes,dispatch}}>
            <div className="container p-5">
            <div className="card mb-3">
                <div className="card-header">Notes</div>
                {
                    notes && (
                        <table className="table table-sm table-striped mb-0">
                            <tbody>
                                {
                                    <NoteList />
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>
            <div className="card mb-3">
                <div className="card-header">Add a New Note</div>
                <div className="card-body">
                    <Addnoteform />
                </div>
            </div>
        </div>  
        </NotesContext.Provider>        
    ) 
}

export default NoteApp