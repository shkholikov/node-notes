// let config = {
//   forceFillAnswer: true,
//   inspectionColType: "form",
//   allowedInspectionTypes: [2, 3]
// };

const { rejects } = require("assert");
const { resolve } = require("path");

// let filter = "Coltype eq '" + config.inspectionColType + "' ";
// // console.log(filter);

// if (config.allowedInspectionTypes.length > 0) {
//   config.allowedInspectionTypes.forEach((type) => {
//     if (config.allowedInspectionTypes.indexOf(type) === 0) {
//       filter += "and Title eq '" + type + "' ";
//     } else {
//       filter += "or Title eq '" + type + "' ";
//     }
//   });
// }

// // console.log(filter);

// // ------------------------------------------------------------------------

// //ACCESS MATRIX

// let accessMatrix = [
//   { groupName: "Owners", adminPage: "yes", mainPage: "yes", formularPage: "yes", auditPage: "yes" },
//   { groupName: "Members", adminPage: "no", mainPage: "yes", formularPage: "yes", auditPage: "no" },
//   { groupName: "Audit", adminPage: "no", mainPage: "no", formularPage: "no", auditPage: "yes" }
// ];

// let userGroups = [
//   { memberOf: "Owners", groupId: 134 },
//   { memberOf: "Audit", groupId: 123 }
// ];

// function checkUserPermission(userGroups) {
//   if (userGroups.length > 0) {
//     for (let matrix of accessMatrix) {
//       for (let group of userGroups) {
//         if (matrix.groupName === group.memberOf) {
//           console.log("User has access to the following groups: " + matrix.groupName);
//         }
//       }
//     }
//   }
// }

// checkUserPermission(userGroups);

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("result"), 1000;
//   });
//   setTimeout(() => {
//     reject("call rejected"), 2000;
//   });
// });

// promise
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

function testPromise(ms) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(console.log(ms));
		}, ms);
	});
}

testPromise(2000)
	.then(async () => {
		await timeFunc();
	})
	.then(() => {
		testPromise(2000).then();
	});
// const delays = [1000, 2000, 5000, 3000, 500, 8000];

// Promise.all(delays.map((sec) => testPromise(sec))).then(() => {
//   console.log("All promises are finished");
// });
// function timeFunc() {
//   return new Promise((resolve) => {
//     setTimeout(function () {
//       resolve(() => {
//         doSmth(), doSmth2();
//       });
//     }, 3000);
//   });
// }

// function doSmth() {
//   console.log("promise resolved");
// }
// function doSmth2() {
//   console.log("2-promise resolved");
// }

// timeFunc().then();

// async function testBase() {
//   console.log("SEQUENCE STARTED");
//   const promise_1 = await testPromise(2000);
//   console.log(promise_1);
//   const promise_2 = await testPromise(1000);
//   console.log(promise_2);
// }

// async function testBase() {
//   await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(timeFunc(), console.log("first"));
//     }, 3000);
//   });
// }

// testBase();
// async function doSmth() {
//   try {
//     await testPromise(2000);
//     await testPromise(1000);
//     await testPromise(1500);
//   } catch (error) {
//     console.log(error);
//   }
// }

// doSmth();

const toops = "asfaf";
console.log(toops);
toops = "asfas";
