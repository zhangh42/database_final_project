'use strict';

function del_product(obj) {
    var P_id = obj.value;
    $.ajax({
        url: '/api/product',
        type: 'delete',
        data: { 'P_id': P_id },
        success: function (result) {
            if (result) {
                alert(result);
            }
            // 重新刷新该内容
            else {
                productInfo();
            }
        }
    });
}

function productInfo() {
    const head = '<h2 class="text-center">商品信息</h2>';
    $.getJSON('api/product', function (result) {
        var products = result;
        var str = '';
        str += '<div class="table-responsive"><table class="table table-bordered table-hover">';
        str += '<tr><th>id</th><th>商品名</th><th>售价</th><th>采购价</th><th>供应商</th><td>操作</td></tr>'
        for (var i = 0; i < products.length; i++) {
            var product = products[i];
            str += '<tr>'
            var t = '';
            // 表中的每一行
            t += '<td>' + product.P_id + '</td>'
                + '<td>' + product.P_name + '</td>'
                + '<td>' + product.P_sell_price + '</td>'
                + '<td>' + product.P_purchase_price + '</td>'
                + '<td>' + product.S_name + '</td>'
                // 增加删去和修改按钮
                + '<td>' + '<button type="button" class="btn btn-danger" name="P_id" value="' + product.P_id + '" onclick="del_product(this)">删除</button></td>'
                + '</td>'
            str += t + '</tr>';
        }
        str += '</table></div>';
        $('#content').get(0).innerHTML = head + str;
    });
}