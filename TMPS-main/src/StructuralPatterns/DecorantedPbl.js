export default class DecoratedPbl {
  constructor(pbl, moderator) {
    this.pbl = pbl;
    this.groupName = pbl.groupName;
    this.students = [moderator];
    this.moderator = moderator;
  }

  say() {
    console.log(`\nI am Decorated Pbl ${this.groupName},
Moderator: ${this.moderator},
Students: `, this.students);
  }

  addStudent(student) {
    this.students.push(student);
  }
  removeStudent(student) {
    const studentIndex = this.students.indexOf(student);
    if (studentIndex > -1) {
      this.students.splice(studentIndex, 1);
    }
  }
}