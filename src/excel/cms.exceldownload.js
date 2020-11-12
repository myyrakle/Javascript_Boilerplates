const {Workbook} = require('exceljs');

// columns [{header:'열 이름', key:'값의 실제 키 이름', width:'가로폭'}]
async function sendCMSExcel(response, list, columns)
{
  const workbook = new Workbook();
  const sheet = workbook.addWorksheet('cms.download');
  sheet.columns = columns;
  sheet.addRows(list);

  //첫째줄 스타일 가공
  sheet.eachRow((row, number)=>{
    row.alignment = {horizontal:'center'};

    if(number==1){
      row.eachCell(cell=>{
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb:'D9D9D9' }
        };
        cell.font = { bold: true };
      })
    }
  });
  
  response.setHeader('Content-Type', 'application/vnd.openxmlformats');
  response.setHeader('Content-Disposition', 'attachment; filename=cms.download.xlsx');
  await workbook.xlsx.write(response);
  response.end();
}
