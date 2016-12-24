// 这里放菜单的点击相应函数

function employeeInfo() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var employees = JSON.parse(this.responseText);
            // 建立员工表格
            var str = '';
            str += '<h2 class="text-center">员工信息</h2>';
            str += '<div class="table-responsive"><table class="table table-bordered">';
            str += '<tr><th>id</th><th>姓名</th><th>性别</th><th>年龄</th><th>手机号码</th><th>入职日期</th><th>薪水</th></tr>'
            for (var i = 0; i < employees.length; i++) {
                var employee = employees[i];
                str += '<tr>'
                var t = '';
                for (var j = 0; j < 7; j++) {
                    t += '<td>' + employee[Object.keys(employee)[j]] + '</td>'
                }
                str += t + '</tr>';
            }
            str += '</table></div>';
            $('#content').get(0).innerHTML = str;
        }
    };
    xhttp.open("GET", "api/employee", true);
    xhttp.send();

}

function customerInfo() {
    alert('customerInfo');
}

function productInfo() {
    alert('productInfo');
}