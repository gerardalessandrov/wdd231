// use the date object
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");
});

const today = new Date();
const year = document.querySelector("#year");
let alert = document.lastModified;

year.innerHTML = `©<span class="highlight">${today.getFullYear()} Gerard Vigo Rodrigues Trujillo</span>`;
short.innerHTML = `Last Modification: <span class="highlight"> ${alert}</span>`;

const courses = [
  {
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
    technology: ["HTML", "CSS"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
    technology: ["C#"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 231,
    title: "Frontend Web Development I",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
];
courses[0].completed = true;

function displayCourses(filteredCourses) {
  const courseList = document.getElementById("courseList");
  courseList.innerHTML = "";

  filteredCourses.forEach((course) => {
    const courseCard = document.createElement("div");
    courseCard.className = `course-card ${course.completed ? "completed" : ""}`;

    courseCard.innerHTML = `<h3>${course.title}</h3>
                              <p>${course.credits} credits</p>
                              
                              `;
                              
    courseList.appendChild(courseCard);
  });

  // Calculate and display total credits
  const totalCredits = filteredCourses.reduce(
    (acc, course) => acc + course.credits,
    0
  );
 
  const totalCreditsElement = document.getElementById("totalCredits");
  totalCreditsElement.innerText = `Total Credits: ${totalCredits}`;
}
document.getElementById("showAll").addEventListener("click",()=>{
  displayCourses(courses)});
  document.getElementById("showCSE").addEventListener("click",()=>{
    const showcse=courses.filter(course=>course.subject==="CSE")
    displayCourses(showcse)
  });
  document.getElementById("showWDD").addEventListener("click",()=>{
    const showwdd=courses.filter(course=>course.subject==="WDD")
    displayCourses(showwdd);

})
displayCourses();
