const courseDetails=document.querySelector("#course-details");
const openmodal=document.querySelector("#openbutton");

function displayCourseDetails(course){
  courseDetails.innerHTML = "";
  courseDetails.innerHTML = `
  <button id="closeModal">❌</button>

      <h2>${course.subject} ${course.number}</h2>
      <h3>${course.title}</h3>
      <p><strong>Credits:</strong> ${course.credits}</p>
      <p><strong>Certificate:</strong> ${course.certificate}</p>
      <p>${course.description}</p>
      <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
  `;
  const closebutton=document.querySelector("#closeModal");
  closebutton.addEventListener("click",()=>{
    courseDetails.close();
  })

}
openmodal.addEventListener("click",()=>{
  courseDetails.showModal();
})

// Example course object
const courses3 = {
  subject: "Mathematics",
  number: "101",
  title: "Introduction to Algebra",
  credits: 3,
  certificate: "Yes",
  description: "This course covers the basics of algebra.",
  technology: ["Algebra", "Geometry"]
};
displayCourseDetails(courses3);
