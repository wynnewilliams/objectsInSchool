var id = 101;
var teacherId = 1;
var sectionId = 500;


function Student(firstname, lastname, grade){
    this.firstname = firstname;
    this.lastname = lastname;
    this.grade = grade;
    this.id = id++;
}

function Teacher(firstname, lastname, section) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.teacherId = teacherId++;
    this.section = section;
}

function Section(name, maxSize) {
    this.name = name;
    this.maxSize = maxSize;
    // this.currentSize = currentSize;
    this.studentList = [];
    this.sectionId = sectionId++;

    this.addStudentToSection = function(studentToAdd) {
        this.studentList.push(studentToAdd);
    };
    this.removeStudFromSection = function(studentToRemove) {
        this.array = [];
        for(var i = 0; i < this.studentList.length; i++){
            if(studentToRemove.id !== this.studentList[i].id){
                this.array.push(this.studentList[i]);
            }
        }
        this.studentList = this.array;
        console.log(this.studentList);
        listStudentsInSection();
    }
}
