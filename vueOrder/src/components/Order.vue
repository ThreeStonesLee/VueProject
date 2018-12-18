<template>
    <div id="order">
        <div class="order_content">
        <div class="order_info">
            <div class="order_top">
                <img src="../assets/images/timer.png" alt="">
                <div class="order_info_right">
                    <h2>118号桌待门店接单</h2>
                    <p>请及时联系服务员确认一点菜品信息</p>
                </div>
            </div>
            <h3>已点菜品6份，合计：<span class="price">60元</span></h3>
        </div>
        <div class="order_list">
            <h3>菜品详情：</h3>
            <ul class="list">
                <li>
                    <div class="title">烧茄子</div>
                    <div class="num">
                        1份
                    </div>
                    <div class="price">
                        12元
                    </div>
                </li>
                <li>
                    <div class="title">烧茄子</div>
                    <div class="num">
                        1份
                    </div>
                    <div class="price">
                        12元
                    </div>
                </li>
                <li>
                    <div class="title">烧茄子</div>
                    <div class="num">
                        1份
                    </div>
                    <div class="price">
                        12元
                    </div>
                </li>
            </ul>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style lang="scss">
.order_content {
    padding: 1rem;
    .order_info {
        background: #fff;
        border-radius: .5rem;
        .order_top {
            display: flex;
            img {
                width: 6rem;
                height: 6rem;
            }
            .order_info_right {
                flex: 1;
                padding-top: .5rem;
            }
        }
        h3 {
            line-height: 2;
            padding: .2rem;
            .price {
                font-size: 2rem;
                color: red;
            }
        }
    }

    .order_list {
        background: #fff;
        border-radius: .5rem;
        margin-top: .5rem;
        padding: .5rem;
        h3 {
            line-height: 2;
        }
        .list {
            li {
                display: flex;
                line-height: 2;
                padding: .5rem 0;
                .title {
                    flex: 2;
                } 
                .num {
                    flex: 1;
                    text-align: center;
                }
                .price {
                    flex: 1;
                    text-align: center;
                }
            }
        }
    }
    // 支付页面

    .order_pay {
        background: #fff;
        border-radius: .5rem;
        h3 {
            text-align: center;
            padding: 2rem 0 .5rem;
            font-size: 2rem;
        }
        .order_pay_detail {
            display: flex;
            line-height: 2;
            border-bottom: 1px solid #eee;
            padding: .5rem;
            .d_num {
                flex: 1;
            }
            .p_num {
                flex: 1;
            }
            .order_time {
                flex: 1;
            }
        }
        .order_pay_info {
            line-height: 2;
            display: flex;
            margin: 1rem 0;
            padding: .5rem .5rem 1rem;
            .price_list {
                flex: 1;
                .price {
                    color: red;
                    font-size: 2rem;
                }
            }
            .pay_button {
                width: 10rem;
                border-radius: .5rem;
                background: red;
                text-align: center;
                color: #fff;
                height: 2.6rem;
                line-height: 2.6rem;
                position: relative;
                top: .5rem
            }
        }
    }
}
</style>


