let notes = [];
export function addNote(note) {
    notes.push(note);
}
export function showNote() {
    let num = 1;
    for (let note of notes) {
        console.log(`${num++}. ${note}`);
    }
}
//# sourceMappingURL=notes.js.map