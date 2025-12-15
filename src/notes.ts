let notes : string[] = []

export function addNote(note : string) : void {
    notes.push(note);
}

export function showNote() : void {
    let num : number = 1;
    for (let note of notes) {
        console.log(`${num++}. ${note}`);
    }
}

