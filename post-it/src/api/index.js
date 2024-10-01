// import { ref } from "vue";


// const notes = []
// SHOW ALL POSTIT


export const fetchNotes = async() => {
    
    const response = await fetch("http://post-it.local/wp-json/wp/v2/categories")
    
    const datas = await response.json()    
    .then(data => console.log(data))

    return datas.notes

};

// SHOW ONE POSTIT
export const fetchNote = async(noteId) => {
    
    const response = await fetch(`http://62.72.5.95:1999/notes/${noteId}`)
    
    const data = await response.json()

    return data
    
}

// UPDATE ONE POSTIT
export const updateNote = async(title, content, noteId) =>  {
    
    await fetch(`http://62.72.5.95:1999/notes/${noteId}`, {
    
        method: 'PUT',
    
        headers: { 'Content-Type': 'application/json' },
    
        body: JSON.stringify({title, content})
    
    })
    // const index = this.notes.findIndex(n => n.id === note.id)
    // if (index !== -1) {

    //     this.notes.splice(index, 1, note)

    // }
}

// ADD A POSTIT
export const addNote = async(title, content) => {
    
    const response = await fetch('http://62.72.5.95:1999/notes', {
    
        method: 'POST',
    
        headers: { 'Content-Type': 'application/json' },
    
    
        body: JSON.stringify({ title, content })
    })

    if(!response.ok){

        throw new Error(`Error: ${response.statusText}`)

    }

    const data = await response.json()

    return data

}


export const deleteNote = async(noteId) => {
    
    await fetch(`http://62.72.5.95:1999/notes/${noteId}`, {
    
        method: 'DELETE'
    
    })


    // router.push('/')

}