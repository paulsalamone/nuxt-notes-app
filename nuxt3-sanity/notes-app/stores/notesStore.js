import {defineStore} from 'pinia'

export const useNotesStore = defineStore("notes", ()=>{

    const notes = ref([{
        title: "First Note",
        text: "This is the first note. It's not very exciting. I should be doing other stuff. But I amd doing this."
    }])

    function addNote(titleInput, textInput){
        console.log("Add note")
        this.notes.push({
            title: titleInput,
            text: textInput
        })
        console.table(this.notes)
    }

    return {
        notes, addNote
    }
})