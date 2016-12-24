// 这里放菜单的点击相应函数

// 增加表单
const add_form = `<form id="add_form" class="form-inline">
        <div class="form-group">
            <input type="number" class="form-control" size="10" name="id" id="E_id" placeholder="请输入员工id" required>
        </div>
        <div class="form-group">
            <div class="input-group">
                <input class="form-control" type="text" size="10" name="name" id="E_name" placeholder="姓名" required>
            </div>
        </div>
        <div class="form-group">
            <div class="input-group">
                <select class="form-control" name="sex" id="E_sex">
                    <option value="男" selected>男</option>
                    <option value="女">女</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <div class="input-group">
                <input class="form-control" type="number" min="1" max="100" name="age" id="E_age" placeholder="年龄">
            </div>
        </div>
        <div class="form-group">
            <div class="input-group">
                <input class="form-control" type="tel" size="11" name="phone" id="E_phone" placeholder="手机号码">
            </div>
        </div>
        <div class="form-group">
            <div class="input-group">
                <input class="form-control" type="date" name="date" id="E_date" placeholder="入职日期">
            </div>
        </div>
        <div class="form-group">
            <div class="input-group">
                <input class="form-control" type="number" size="10" step="0.01" name="salary" id="E_salary" placeholder="薪水">
            </div>
        </div>
        <button type="submit" class="btn btn-default">add</button>
    </form>`




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

            $('#content').get(0).innerHTML = head + add_form + str;
            // 监听表单是否点击
            $('#add_form').submit(function (e) {
                e.preventDefault();
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
                })
            })
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