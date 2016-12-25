'use strict';

const head = '<h2 class="text-center">顾客信息</h2>'

const add_form_html = '<form id="add_form" class="form-inline">\
        <div class="form-group">\
            <input type="number" class="form-control" name="id" id="C_id" placeholder="请输入客户id" required>\
        </div>\
        <div class="form-group">\
            <div class="input-group">\
                <input class="form-control" type="text" name="name" id="C_name" placeholder="姓名">\
            </div>\
        </div>\
        <div class="form-group">\
            <div class="input-group">\
                <select class="form-control" name="sex" id="C_sex">\
                    <option value="男" selected>男</option>\
                    <option value="女">女</option>\
                </select>\
            </div>\
        </div>\
        <div class="form-group">\
            <div class="input-group">\
                <input class="form-control" type="number" min="1" max="100" name="age" id="C_age" placeholder="年龄">\
            </div>\
        </div>\
        <div class="form-group">\
            <div class="input-group">\
                <input class="form-control" type="tel" name="phone" id="C_phone" placeholder="手机号码">\
            </div>\
        </div>\
        <div class="form-group">\
            <div class="input-group">\
                <input class="form-control" type="text" step="0.01" name="address" id="C_address" placeholder="住址">\
            </div>\
        </div>\
        <div class="form-group">\
        <button class="btn btn-success" type="button" onclick="add_customer()">add</button>\
        <button class="btn btn-info" type="button" onclick="update_customer()">update</button>\
    </div>\
    </form><br>'

function add_customer() {
    $.ajax({
        url: '/api/customer',
        type: 'post',
        data: $('#add_form').serialize(),
        success: function (result) {
            if (result) {
                alert(result);
            }
            // 重新刷新该内容
            else {
                customerInfo();
            }
        }
    });
}

function del_customer(obj) {
    var C_id = obj.value;
    $.ajax({
        url: '/api/customer',
        type: 'delete',
        data: { 'C_id': C_id },
        success: function (result) {
            if (result) {
                alert(result);
            }
            // 重新刷新该内容
            else {
                customerInfo();
            }
        }
    });
}

function update_customer() {

}


function customerInfo() {
    $.getJSON('api/customer', function (result) {
        var customers = result;
        var str = '';
        str += '<div class="table-responsive"><table class="table table-bordered">';
        str += '<tr><th>id</th><th>姓名</th><th>性别</th><th>年龄</th><th>手机号码</th><th>住址</th><th>操作</th></tr>'
        for (var i = 0; i < customers.length; i++) {
            var customer = customers[i];
            str += '<tr>'
            var t = '';
            // 表中的每一行
            t += '<td>' + customer.C_id + '</td>'
                + '<td>' + customer.C_name + '</td>'
                + '<td>' + customer.C_sex + '</td>'
                + '<td>' + customer.C_age + '</td>'
                + '<td>' + customer.C_phone + '</td>'
                + '<td>' + customer.C_address + '</td>'
                // 增加删去和修改按钮
                + '<td>' + '<button type="button" class="btn btn-danger" name="C_id" value="' + customer.C_id + '" onclick="del_customer(this)">删除</button></>'
                + '</td>'
            str += t + '</tr>';
        }
        str += '</table></div>';
        $('#content').get(0).innerHTML = head + add_form_html + str;
    })

    // $('#content').get(0).innerHTML = head + add_form_html;
}