// 这里菜单中员工信息的点击相应函数

'use strict';

// 删除员工
function del_employee(obj) {
    var E_id = obj.value;
    $.ajax({
        url: '/api/employee',
        type: 'delete',
        data: { 'E_id': E_id },
        success: function (result) {
            if (result) {
                alert(result);
            }
            // 重新刷新该内容
            else {
                employeeInfo();
            }
        }
    })
}

// 增加员工
function add_employee() {
    $.ajax({
        url: '/api/employee',
        type: 'post',
        data: $('#add_form').serialize(),
        success: function (result) {
            if (result) {
                alert(result);
            }
            // 重新刷新该内容
            else {
                employeeInfo();
            }
        }
    });
}

// 更新员工信息
function update_employee() {
    $.ajax({
        url: '/api/employee',
        type: 'patch',
        data: $('#add_form').serialize(),
        success: function (result) {
            if (result) {
                alert(result);
            }
            // 重新刷新该内容
            else {
                employeeInfo();
            }
        }
    });
}


// 增加表单
const add_form = '<form id="add_form" class="form-inline">\
        <div class="form-group">\
            <input type="number" class="form-control" name="id" id="E_id" placeholder="请输入员工id" required>\
        </div>\
        <div class="form-group">\
            <div class="input-group">\
                <input class="form-control" type="text" name="name" id="E_name" placeholder="姓名">\
            </div>\
        </div>\
        <div class="form-group">\
            <div class="input-group">\
                <select class="form-control" name="sex" id="E_sex">\
                    <option value="男" selected>男</option>\
                    <option value="女">女</option>\
                </select>\
            </div>\
        </div>\
        <div class="form-group">\
            <div class="input-group">\
                <input class="form-control" type="number" min="1" max="100" name="age" id="E_age" placeholder="年龄">\
            </div>\
        </div>\
        <div class="form-group">\
            <div class="input-group">\
                <input class="form-control" type="tel" name="phone" id="E_phone" placeholder="手机号码">\
            </div>\
        </div>\
        <div class="form-group">\
            <div class="input-group">\
                <input class="form-control" type="date" name="date" id="E_date" placeholder="入职日期">\
            </div>\
        </div>\
        <div class="form-group">\
            <div class="input-group">\
                <input class="form-control" type="number" step="0.01" name="salary" id="E_salary" placeholder="薪水">\
            </div>\
        </div>\
        <div class="form-group">\
        <button class="btn btn-success" type="button" onclick="add_employee()">add</button>\
        <button class="btn btn-info" type="button" onclick="update_employee()">update</button>\
         </div>\
    </form><br>'




// 员工信息
function employeeInfo() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var employees = JSON.parse(this.responseText);
            // 建立员工表格
            var head = '<h2 class="text-center">员工信息</h2>';
            var str = '';
            str += '<div class="table-responsive"><table class="table table-bordered">';
            str += '<tr><th>id</th><th>姓名</th><th>性别</th><th>年龄</th><th>手机号码</th><th>入职日期</th><th>薪水</th><th>操作</th></tr>'
            for (var i = 0; i < employees.length; i++) {
                var employee = employees[i];
                str += '<tr>'
                var t = '';
                // 表中的每一行
                t += '<td>' + employee.E_id + '</td>'
                    + '<td>' + employee.E_name + '</td>'
                    + '<td>' + employee.E_sex + '</td>'
                    + '<td>' + employee.E_age + '</td>'
                    + '<td>' + employee.E_phone + '</td>'
                    + '<td>' + employee.E_date.slice(0, 10) + '</td>'
                    + '<td>' + employee.E_salary + '</td>'
                    // 增加删去和修改按钮
                    + '<td>' + '<button type="button" class="del_employee btn btn-danger" name="E_id" value="' + employee.E_id + '" onclick="del_employee(this)">删除</button></>'
                    + '</td>'
                str += t + '</tr>';
            }
            str += '</table></div>';

            // 更新html内容
            $('#content').get(0).innerHTML = head + add_form + str;
        }
    };
    xhttp.open("GET", "api/employee", true);
    xhttp.send();

}