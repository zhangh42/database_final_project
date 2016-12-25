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
                <input class="form-control" type="number" min="1" max="100" name="age" id="E_age" placeholder="年龄">\
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
        <button class="btn btn-success" type="button" onclick="add_employee()">add</button>\
        <button class="btn btn-info" type="button" onclick="update_employee()">update</button>\
    </div>\
    </form><br>'

function add_customer(){

}

function del_customer(){

}

function update_customer(){

}


function customerInfo() {
    $('#content').get(0).innerHTML = head + add_form_html;
}