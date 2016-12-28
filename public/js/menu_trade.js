// 交易信息

'use strict';

function del_trade(obj){
    var id = obj.value;
    $.ajax({
        url: '/api/trade',
        type: 'delete',
        data: { 'T_id': id },
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

function tradeInfo() {
    const head = '<h2 class="text-center">销售信息</h2>';
    $.getJSON('api/trade', function (result) {
        var trades = result;
        var str = '';
        str += '<div class="table-responsive"><table class="table table-bordered table-hover">';
        str += '<tr><th>id</th><th>商品名</th><th>交易日期</th><th>交易量</th><th>交易额</th><th>员工</th><th>客户</th><td>操作</td></tr>'
        for (var i = 0; i < trades.length; i++) {
            var trade = trades[i];
            str += '<tr>'
            var t = '';
            // 表中的每一行
            t += '<td>' + trade.T_id + '</td>'
                + '<td>' + trade.P_name + '</td>'
                + '<td>' + trade.T_date.slice(0,10) + '</td>'
                + '<td>' + trade.T_quantity + '</td>'
                + '<td>' + trade.T_price + '</td>'
                + '<td>' + trade.E_name + '</td>'
                + '<td>' + trade.C_name + '</td>'
                // 增加删去和修改按钮
                + '<td>' + '<button type="button" class="btn btn-danger" name="T_id" value="' + trade.T_id + '" onclick="del_trade(this)">删除</button></td>'
                + '</td>'
            str += t + '</tr>';
        }
        str += '</table></div>';
        $('#content').get(0).innerHTML = head + str;
    });
}