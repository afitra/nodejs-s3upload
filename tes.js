
const today = new Date()
const tahun = today.getFullYear()
const bulan = today.getMonth()+1
const hari = today.getDate()
console.log(today);
console.log(tahun);
console.log(bulan);
console.log(hari);

var new_format = `${hari}_${bulan}_${tahun}`
console.log(new_format);