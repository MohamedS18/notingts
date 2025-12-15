import * as readline from 'readline';
import {addNote, showNote} from './notes'


const rl = readline.createInterface({
  input: process.stdin,  // Input stream (keyboard)
  output: process.stdout // Output stream (console)
});


async function getInput() : Promise<number | string> {
    return new Promise((resolve) => rl.question("Enter Option: ", resolve));
}

async function main() {
    while (true) {
        console.log("1. add note \n2. show note");
        let input = Number(await getInput());
        switch (input) {
            case 1: 
                console.log("give a note");
                let note = await getInput();
                addNote(String(note)); break;
            case 2:
                showNote();
                break;
            default:
                console.log("invalid");
        }
    }
}

main();
