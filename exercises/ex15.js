/*In this exercise, we will be given a list of instructors and we will create a single object to organize them based on their course.

Instruction
Create a function named organizeInstructors that will receive an array of instructor objects, and will return a new object that has the following format:

{
  CourseName: [instructors]
} 
*/

const organizeInstructors = function (instructors) {
  let organized = {};

  for (let instructor of instructors) {

    //if the course appears again:
    if (organized[instructor.course]) {
      organized[instructor.course].push(instructor.name);
    } else {
      // if the course appears for the first time
      organized[instructor.course] = [];
      organized[instructor.course].push(instructor.name);
    }
  }
  return organized;
};

// console.log(
//   organizeInstructors([
//     { name: "Samuel", course: "iOS" },
//     { name: "Victoria", course: "Web" },
//     { name: "Karim", course: "Web" },
//     { name: "Donald", course: "Web" },
//   ])
// ); // { iOS: ["Samuel"], Web: ["Victoria", "Karim", "Donald"]}

const organizedObj = organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" },
  { name: "Awshaf", course: "Web" },
]);

console.log(organizedObj)
// console.log(
//   organizeInstructors([
//     { name: "Brendan", course: "Blockchain" },
//     { name: "David", course: "Web" },
//     { name: "Martha", course: "iOS" },
//     { name: "Carlos", course: "Web" },
//   ])
// ); //{ Blockchain: ["Brendan"], Web: ["David", "Carlos"], iOS: ["Martha"]}

module.exports = organizeInstructors;
