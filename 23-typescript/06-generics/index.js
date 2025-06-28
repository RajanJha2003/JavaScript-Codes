var StudentInfo = /** @class */ (function () {
    function StudentInfo(info) {
        this.info = info;
    }
    StudentInfo.prototype.getInfo = function () {
        return this.info;
    };
    return StudentInfo;
}());
var nameInfo = new StudentInfo("Rajan");
console.log(nameInfo.getInfo());
var idInfo = new StudentInfo(101);
console.log(idInfo.getInfo());
var attendanceInfo = new StudentInfo(true);
console.log(attendanceInfo.getInfo());
