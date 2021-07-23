const App = {
  data() {
    return {
      placeholderNote: 'Input note name',
      title: 'Notes List',
      notes: [],
      inputNote: '',
    }
  },
  methods: {
    addNewNote() {
      if (this.inputNote !== '') {
        this.notes.push(this.inputNote);
        this.inputNote = '';
      }
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    },
    toUpperCase(note) {
      return note.toUpperCase();
    },
  },
}

Vue.createApp(App).mount('#app')
