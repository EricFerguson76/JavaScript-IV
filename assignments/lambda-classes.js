// CODE here for your Lambda Classes

// PERSON
class Person {
  constructor(baseAttr) {
    this.name = baseAttr.name;
    this.age = baseAttr.age;
    this.location = baseAttr.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
} // this closes person

//INSTRUCTOR

class Instructor extends Person {
  constructor(instructAttr) {
    super(instructAttr);
    this.specialty = instructAttr.specialty;
    this.favLanguage = instructAttr.favLanguage;
    this.catchPhrase = instructAttr.catchPhrase;

  }
  demo() {
    return `Today we are learning about ${this.subject}`
  }
  grade() {
    return `${this.name} revieves a perfect score on ${this.subject}`;
  }
} // this closes instructor

// STUDENT

class Student extends Person {
  constructor(studentAttr) {
    super(studentAttr);
    this.previousBackground = studentAttr.previousBackground;
    this.className = studentAttr.className;
  }
  favSubjects() {

  }

  listsSubjects() {

  }

  PRAssignment() {
    return `{student.name} has submitted a PR for {subject}.`;
  }
  sprintChallenge() {
    return `{student.name} has begun sprint challenge on {subject}.`;
  }
}

// PROJECT MANAGER

class ProjectManager extends Instructor {
  constructor(manageAttr) {
    super(manageAttr);
    this.gradeClassName = manageAttr.gradeClassName;
    this.favInstructor = manageAttr.favInstructor;
  }
  standUp() {
    return `{name} announces to {channel} @channel stadny times!`;
  }
  debugsCode() {
    return `{name} debugs {student.name}'s code on {subject}`;
  }
}