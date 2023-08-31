const yargs = require("yargs");
const chalk = require("chalk");
const notes = require("./notes");

yargs.version("1.1.0");

yargs.command({
	command: "add",
	describe: "Add a new note",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string"
		},
		body: {
			describe: "Note boyd",
			demandOption: true,
			type: "string"
		}
	},
	handler: function (argv) {
		notes.addNote(argv.title, argv.body);
	}
});

yargs.command({
	command: "remove",
	describe: "Remove a note",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string"
		}
	},
	handler: function (argv) {
		notes.removeNote(argv.title);
	}
});

// function createAndAppendDataToFile(initalData, appendData) {
// 	fs.writeFileSync("notes.txt", initalData);
// 	console.log("notes.txt file created and initial data added");
// 	fs.appendFileSync("notes.txt", appendData);
// 	console.log("appendData added");
// }

// createAndAppendDataToFile("Initial data...", "+Appending data...");

// const getNotes = require("./notes");
// const note = getNotes("This my notes");
// console.log(note);

// var validator = require("validator");
// console.log(validator.isEmail("oopskkkll.com"));
