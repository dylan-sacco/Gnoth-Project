// yyyy-MM-ddThh:mm
const today = new Date();
let month = String(today.getMonth()+1).padStart(2,'0');
let day = String(today.getDate()).padStart(2,'0');
let min = String(today.getMinutes()).padStart(2,'0');
let hour = String(today.getHours()).padStart(2,'0');

console.log(day);
function formatDate(date, format) {
    let output = format;
    output = output.replace('yy', date.getFullYear())
    .replace('dd', day)
    .replace('MM', month)
	.replace('mm', min)
    .replace('hh', hour);

    return output;
}

let nowDate = formatDate(today, 'yy-MM-ddThh:mm');


console.log(nowDate);
console.log(document.getElementsByTagName("input")[4].value);
document.getElementsByTagName("input")[4].value=nowDate;
