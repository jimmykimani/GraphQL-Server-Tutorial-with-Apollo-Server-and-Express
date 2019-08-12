import uuidv4 from 'uuid/v4';

export default {
    Query: {
        notes: (parent, args, {
            models
        }) => {
            return Object.values(models.notes)
        },
        note: (parent, {
            id
        }, {
            models
        }) => {
            return models.notes[id]
        }
    },
    Mutation: {
        createNewNote: (parent, {
            text
        }, {
            models
        }) => {
            const id = uuidv4();
            const newNote = {
                id,
                text
            }
            models.notes[id] = newNote;
            return newNote;
        },

        deleteNote: (parent, {
            id
        }, {
            models
        }) => {
            const {
                [id]: note, ...otherNotes
            } = models.notes
            if (!note) {
                return false
            }
            models.notes = otherNotes
            return true
        },
        updateNote: (parent, {
            args
        }, {
            models
        }) => {
            const {
                id,
                text
            } = args
        }
    }
}