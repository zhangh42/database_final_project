'use strict'



function post_form() {
    $.ajax({
        url: '/api/trade',
        type: 'post',
        data: $('#add_trade').serialize(),
        success: function (result) {
            if (result) {
                alert(result);
            }
            // 重新刷新该内容
            else {
                tradeInfo();
            }
        }
    });
    return false;
}

function addOrder() {
    const head = '<h2 class="text-center">增加订单</h2>';
    const add_form_html = '<form style="width: 50%; margin:0 auto" class="form-horizontal" id="add_trade" onsubmit="return post_form()">\
                                <div class="form-group">\
                                    <label class="col-sm-2 control-label">交易时间</label>\
                                     <div class="col-sm-10">\
                                    <input type="date" name="T_date" class="form-control" placeholder="商品id">\
                                    </div>\
                                </div>\
                                <div class="form-group">\
                                    <label class="col-sm-2 control-label">商品id</label>\
                                    <div class="col-sm-10">\
                                    <input type="number" name="P_id" class="form-control" placeholder="商品id">\
                                    </div>\
                                </div>\
                                <div class="form-group">\
                                    <label class="col-sm-2 control-label">商品名</label>\
                                    <div class="col-sm-10">\
                                    <input type="text" class="form-control" placeholder="商品名">\
                                    </div>\
                                </div>\
                                <div class="form-group">\
                                    <label class="col-sm-2 control-label">购买数量</label>\
                                    <div class="col-sm-10">\
                                    <input type="number" name="P_quantity" class="form-control" placeholder="请输入要购买的数量">\
                                    </div>\
                                </div>\
                                <div class="form-group">\
                                    <label class="col-sm-2 control-label">单价</label>\
                                    <div class="col-sm-10">\
                                    <input type="text" name="P_price" class="form-control" placeholder="单价">\
                                    </div>\
                                </div>\
                                <div class="form-group">\
                                    <label class="col-sm-2 control-label">员工id</label>\
                                    <div class="col-sm-10">\
                                    <input type="number" name="E_id" class="form-control" placeholder="员工id">\
                                    </div>\
                                </div>\
                                <div class="form-group">\
                                    <label class="col-sm-2 control-label">员工</label>\
                                    <div class="col-sm-10">\
                                    <input type="text" class="form-control" placeholder="员工">\
                                    </div>\
                                </div>\
                                <div class="form-group">\
                                    <label class="col-sm-2 control-label">客户id</label>\
                                    <div class="col-sm-10">\
                                    <input type="number" name="C_id" class="form-control" placeholder="客户id">\
                                    </div>\
                                </div>\
                                <div class="form-group">\
                                    <label class="col-sm-2 control-label">客户名</label>\
                                    <div class="col-sm-10">\
                                    <input type="text" class="form-control" placeholder="客户名">\
                                    </div>\
                                </div>\
                                <div class="form-group">\
                                <div class="col-sm-offset-2 col-sm-10">\
                                <button type="submit" class="btn btn-default">Submit</button>\
                                </div>\
                                </div>\
                            </form>'
    $('#content').get(0).innerHTML = head + add_form_html;
}