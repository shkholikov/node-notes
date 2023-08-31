const fs = require("fs");

function getNotes() {
	return "Your notes...";
}

function addNote(title, body) {
	const notes = loadNotes();
	const duplicateNotes = notes.filter((note) => {
		return note.title === title;
	});
	if (duplicateNotes.length === 0) {
		notes.push({
			title: title,
			body: body
		});
		saveNotes(notes);
		console.log("New note added.");
	} else {
		console.log("Note title taken!");
	}
}

function saveNotes(notes) {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync("notes.json", dataJSON);
}

function loadNotes() {
	try {
		const dataBuffer = fs.readFileSync("notes.json");
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (error) {
		return [];
	}
}

module.exports = {
	getNotes: this.getNotes,
	addNote: this.addNote,
	removeNote: this.removeNote
};
