function addStudent(){
    var fn = document.getElementById("firstname").value;
    var ln = document.getElementById("lastname").value;
    var grd = document.getElementById("grade").value;
    allStudents.push(new Student(fn, ln, grd));
    buildStudentList();
    document.getElementById("outputthree").innerHTML = fn + " was added to the " + grd + "th grade." ;

}
function addTeacher(){
    var fn = document.getElementById("firstname").value;
    var ln = document.getElementById("lastname").value;
    var sctn = document.getElementById("section").value;
    allTeachers.push(new Teacher(fn, ln, sctn));
    document.getElementById("outputthree").innerHTML = fn + " was added to " + sctn;

}
function addSection(){
    var sectionName = document.getElementById("sectionname").value;
    var sectionSize = document.getElementById("sectionsize").value;
    allSections.push(new Section(sectionName, sectionSize));
    buildSectionList();
    buildFirstSectionList();
    document.getElementById("outputthree").innerHTML = sectionName + " was added." ;

}

function listTeachers() {
    var html = "<table border='1'>";
    for(var i = 0; i < allTeachers.length; i++) {
        html += "<tr>";
        html += "<td>" + allTeachers[i].firstname + "</td>";
        html += "<td>" + allTeachers[i].lastname + "</td>";
        html += "<td>" + allTeachers[i].section + "</td>";
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById("output").innerHTML = html;
}
function listStudents() {
    var html = "<table border='1'>";
    for(var i = 0; i < allStudents.length; i++) {
        html += "<tr>";
        html += "<td>" + allStudents[i].firstname + "</td>";
        html += "<td>" + allStudents[i].lastname + "</td>";
        html += "<td>" + allStudents[i].grade + "</td>";
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById("output").innerHTML = html;
}
function listSections() {
    var html = "<table border='1'>";
    for(var i = 0; i < allSections.length; i++) {
        html += "<tr>";
        html += "<td>" + allSections[i].name + "</td>";
        html += "<td>" + allSections[i].maxSize + "</td>";
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById("output").innerHTML = html;
}

function getStudentById(ID) {
    for (var i = 0; i < allStudents.length; i++) {
        if (allStudents[i].id == ID) {
            return allStudents[i];
        }
    }
}
function getTeacherById(ID) {
    for (var j = 0; j < allTeachers.length; j++) {
        if (allTeachers[j].teacherId == ID) {
            return allTeachers[j];
        }
    }
}
function getSectionById(ID) {
    for(var k = 0; k < allSections.length; k++) {
        if(allSections[k].sectionId == ID){
            return allSections[k];
        }
    }
}


function buildFirstSectionList(){
    var html = "";
    for(var i = 0; i < allSections.length; i++){
        html += "<option value=' " + allSections[i].name + " '>" + allSections[i].name + "</option>";
    }
    html += "<option value=' " + 14 + " '>" + "Not entering a teacher, n/a" + "</option>";
    document.getElementById("section").innerHTML = html;
}
function buildStudentList(){
    var html = "";
    for(var i = 0; i < allStudents.length; i++){
        html += "<option value=' " + allStudents[i].id + " '>" + allStudents[i].firstname + " " + allStudents[i].lastname + "</option>";
    }
    document.getElementById("stdlist").innerHTML = html;
}
function buildSectionList(){
    var html = "";
    for(var i = 0; i < allSections.length; i++){
        html += "<option value=' " + allSections[i].sectionId + " '>" + allSections[i].name + "</option>";
    }
    document.getElementById("sctlist").innerHTML = html;
}
function listStudentsInSection(){
    var section = getSectionById(document.getElementById("sctlist").value);
    var html = "<table border='1'>";
    html += "<tr>";
    html += "<td>" + "Students in " + section.name + "</td>";
    html += "</tr>";
    for(var i = 0; i < section.studentList.length; i++) {
        html += "<tr>";
        html += "<td>" + section.studentList[i].firstname + "</td>";
        html += "<td>" + section.studentList[i].lastname + "</td>";
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById("outputtwo").innerHTML = html;

}
function addStudToSection() {
    var student = getStudentById(document.getElementById("stdlist").value);
    var section = getSectionById(document.getElementById("sctlist").value);
    section.addStudentToSection(student);
    document.getElementById("test").innerHTML = student.firstname + " " + student.lastname + " was added to " + section.name;

}
function removeStudentFromSection(){
    var student = getStudentById(document.getElementById("stdlist").value);
    var section = getSectionById(document.getElementById("sctlist").value);
    section.removeStudFromSection(student);
    document.getElementById("test").innerHTML = student.firstname + " " + student.lastname + " was removed from " + section.name;

}
function lookUpStudent() {
    var student = getStudentById(document.getElementById("stdlist").value);
    console.log(student);
    var sections = "";
    for (var i = 0; i < allSections.length; i++) {
        for (var j = 0; j < allSections[i].studentList.length; j++) {
            if (student.id == allSections[i].studentList[j].id) {
                console.log("True");
                var sections = sections + " " + allSections[i].name;
            }
        }
    }
    console.log(sections);
    if(sections == ""){
        document.getElementById("test").innerHTML = student.firstname + " " + student.lastname + " is in no sections";
    }
    document.getElementById("test").innerHTML = student.firstname + " " + student.lastname + " is in the following sections: " + sections;

}
