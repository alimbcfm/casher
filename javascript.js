// وظيفة لإضافة صف جديد إلى الجدول
document.getElementById('add').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const idno = document.getElementById('idno').value;
    const mono = document.getElementById('mono').value;
    const prod = document.getElementById('prod').value;
    const price = document.getElementById('price').value;



    // التأكد من عدم وجود حقول فارغة
    if (name === '' || idno === '' || mono === '' || prod === '' || price === '') {
        alert('يرجى ملء جميع الحقول!');
        return;
    }

    // الحصول على جسم الجدول
    const tableBody = document.getElementById('dt').getElementsByTagName('tbody')[0];

    // إنشاء صف جديد
    const newRow = tableBody.insertRow();

    // إضافة خلايا إلى الصف الجديد
    const priceCell = newRow.insertCell(0);
    const prodCell = newRow.insertCell(1);
    const idnoCell = newRow.insertCell(2);
    const monoCell = newRow.insertCell(3);
    const nameCell = newRow.insertCell(4);

    // ملء الخلايا بالبيانات المدخلة
    nameCell.textContent = name;
    monoCell.textContent = idno;
    idnoCell.textContent = mono;
    prodCell.textContent = prod;
    priceCell.textContent = price;



    // مسح الحقول بعد الإضافة
    document.getElementById('name').value = '';
    document.getElementById('idno').value = '';
    document.getElementById('mono').value = '';
    document.getElementById('prod').value = '';
    document.getElementById('price').value = '';


});