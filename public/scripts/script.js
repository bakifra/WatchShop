const myCarousel = document.querySelector('#myCarousel');
//const carousel = new bootstrap.Carousel(myCarousel);
console.log('Hello watches!');

//////// Загрузка CSV 

// загрузить данные JSON

const csvBtn = document.querySelector('csv-btn');

var jsonInput = '[{"nodeId":1,"reputation":1134},{"nodeId":2,"reputation":547},{"nodeId":3,"reputation":1703},{"nodeId":4,"reputation":-199},{"nodeId":5,"reputation":-306},{"nodeId":6,"reputation":-49},{"nodeId":7,"reputation":1527},{"nodeId":8,"reputation":1223}]'

// создать пустой объект Workbook
var workbook = aspose.cells.Workbook()

// доступ к пустому рабочему листу по умолчанию
var worksheet = workbook.getWorksheets().get(0)

// установить JsonLayoutOptions для форматирования
var layoutOptions = aspose.cells.JsonLayoutOptions()
layoutOptions.setArrayAsTable(true)

// импортировать данные JSON на рабочий лист по умолчанию, начиная с ячейки A1
aspose.cells.JsonUtility.importData(jsonInput, worksheet.getCells(), 0, 0, layoutOptions)

// сохранить результирующий файл
workbook.save("output.csv", aspose.cells.SaveFormat.CSV);
