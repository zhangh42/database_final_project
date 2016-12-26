// 供应商信息

'use strict';

function supplierInfo() {
    const head = '<h2 class="text-center">供应商信息</h2>';
    $.getJSON('api/supplier', function (result) {
        var suppliers = result;
        var str = '';
        str += '<div class="table-responsive"><table class="table table-bordered table-hover">';
        str += '<tr><th>id</th><th>公司名</th><th>公司地址</th><th>供应商品</th><td>批发价</td><td>操作</td></tr>'
        for (var i = 0; i < suppliers.length; i++) {
            var supplier = suppliers[i];
            str += '<tr>'
            var t = '';
            // 表中的每一行
            t += '<td>' + supplier.S_id + '</td>'
                + '<td>' + supplier.S_name + '</td>'
                + '<td>' + supplier.S_address + '</td>'
                + '<td>' + supplier.PL_product_name + '</td>'
                + '<td>' + supplier.PL_price + '</td>'
                // 增加删去和修改按钮
                + '<td>' + '<button type="button" class="btn btn-danger" name="T_id" value="' + supplier.T_id + '" onclick="del_supplier(this)">删除</button></td>'
                + '</td>'
            str += t + '</tr>';
        }
        str += '</table></div>';
        $('#content').get(0).innerHTML = head + str;
    });
}