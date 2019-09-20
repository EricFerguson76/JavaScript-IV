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
  demo(subject) {
    return `Today we are learning about ${this.subject}`;
  }
  grade(name, subject) {
    return `${this.name} reviews a perfect score on ${this.subject}`;
  }
} // this closes instructor

// STUDENT

class Student extends Person {
  constructor(studentAttr) {
    super(studentAttr);
    this.previousBackground = studentAttr.previousBackground;
    this.className = studentAttr.className;
    this.favSubjects = studentAttr.favSubjects;
  }

  listsSubjects() {
    return `${this.favSubjects[0]}, ${this.favSubjects[1]}, ${this.favSubjects[2]}`;
  }
  PRAssignment(student, subject) {
    return `${student.name} has submitted a PR for ${subject}.`;
  }
  sprintChallenge(student, subject) {
    return `${student.name} has begun sprint challenge on ${subject}.`;
  }
}



// PROJECT MANAGER

class ProjectManager extends Instructor {
  constructor(manageAttr) {
    super(manageAttr);
    this.gradeClassName = manageAttr.gradeClassName;
    this.favInstructor = manageAttr.favInstructor;
  }
  standUp(name, channel) {
    return `${name} announces to ${channel} @channel stadny times!`;
  }
  debugsCode(name, student, subject) {
    return `${name} debugs ${student.name}'s code on ${subject}`;
  }
}
console.log(standUp())
console.log(Albus.debugsCode('Ron', 'React'));

// PERSON INFO

const Ginny = new Person({
  name: 'Ginny',
  age: 22,
  location: 'Florida'
});

const Hermione = new Person({
  name: 'Hermione',
  age: 23,
  location: 'Scotland',
});


// INSTRUCTOR INFO

const Snape = new Instructor({
  name: 'Snape',
  age: 43,
  location: 'Colorado',
  specialty: 'Redux',
  favLanguage: 'Python',
  catchPhrase: 'See ya on the flip side'
});

const Minerva = new Instructor({
  name: 'Minerva',
  age: 48,
  location: 'Californa',
  specialty: 'SQL',
  favLanguage: 'Elm',
  catchPhrase: 'If you die, you need not hand it in.'
});


// STUDENT INFO
const Harry = new Student({
  name: 'Harry',
  age: 23,
  location: 'England',
  previousBackground: 'lived with aunt and uncle',
  className: 'cS120',
  favSubjects: [
    'HTML', 'CSS', 'JavaScript'
  ],
});

const Ron = new Student({
  name: 'Ron',
  age: 23,
  location: 'Canada',
  previousBackground: 'lived with mum and dad',
  className: 'JS120',
  favSubjects: [
    'React', 'Python', 'JavaScript'
  ],
});


// PROJECT MANAGERS

const Albus = new ProjectManager({
  name: 'Albus',
  age: 53,
  location: 'Alaska',
  specialty: 'Node',
  favLanguage: 'Java',
  catchPhrase: 'It does not do to dwell on dreams and forget to live.',
  gradeClassName: 'DS3',
  favInstructor: 'Hagrid',
});

const Flitwick = new ProjectManager({
  name: 'Flitwick',
  age: 51,
  location: 'Costa Rica',
  specialty: 'AWS',
  favLanguage: 'React',
  catchPhrase: 'Keep the shiny side up.',
  gradeClassName: 'CS2',
  favInstructor: 'Lupin',
});

// CONSOLE LOGS

console.log(Ginny.speak())
console.log(Hermione.speak())