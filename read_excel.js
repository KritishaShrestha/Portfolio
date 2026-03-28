const xlsx = require('xlsx');
const fs = require('fs');

try {
  const workbook = xlsx.readFile('./public/OrangeHRM-MyInfo.xlsx');
  const sheetNames = workbook.SheetNames;
  
  const result = {};
  sheetNames.forEach(name => {
    result[name] = xlsx.utils.sheet_to_json(workbook.Sheets[name]);
  });
  
  fs.writeFileSync('./excel_data.json', JSON.stringify(result, null, 2), 'utf8');
  console.log('done');
} catch (e) {
  console.error("Error reading excel file:", e.message);
}
