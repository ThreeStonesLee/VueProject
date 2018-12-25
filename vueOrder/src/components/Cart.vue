<template>
    <div id='cart'>
        <div class="cart_content">
        <div class="cart_info">
            <h2>购物车</h2>
            <div class="p_number">
                <div class="p_number_left">
                    <p>用餐人数：2人</p>
                    <p>备注：无</p>
                </div>
                <div class="p_number_right">
                    <img src="../assets/images/edit.png" alt="">
                    <p>修改</p>
                </div>
            </div>
            <div class="cart_p_num">
                <p>购物车总共有6个菜</p>
                <p>合计：<span class="price">￥58</span></p>
            </div>
        </div>
        <div class="cart_list">
            <ul>
                <li class="item">
                    <div class="left_food">
                        <img src="../assets/images/1.jpg" alt="">
                        <div class="food_info">
                            <p>老干妈肥肠</p>
                            <p class="price">￥48</p>
                        </div>
                    </div>
                    <div class="right_cart">
                        <div class="cart_num">
                            <div class="input_left">-</div>
                            <div class="input_center">
                                <input type="text" readonly="readonly" value="1">
                            </div>
                            <div class="input_right">+</div>
                        </div>
                    </div>
                </li>
                <li class="item">
                    <div class="left_food">
                        <img src="../assets/images/1.jpg" alt="">
                        <div class="food_info">
                            <p>老干妈肥肠</p>
                            <p class="price">￥48</p>
                        </div>
                    </div>
                    <div class="right_cart">
                        <div class="cart_num">
                            <div class="input_left">-</div>
                            <div class="input_center">
                                <input type="text" readonly="readonly" value="1">
                            </div>
                            <div class="input_right">+</div>
                        </div>
                    </div>
                </li>
                <li class="item">
                    <div class="left_food">
                        <img src="../assets/images/1.jpg" alt="">
                        <div class="food_info">
                            <p>老干妈肥肠</p>
                            <p class="price">￥48</p>
                        </div>
                    </div>
                    <div class="right_cart">
                        <div class="cart_num">
                            <div class="input_left">-</div>
                            <div class="input_center">
                                <input type="text" readonly="readonly" value="1">
                            </div>
                            <div class="input_right">+</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="hot_food">
            <h3>本店顾客最长点的菜</h3>
            <div class="item_list_outer">
                <ul class="item_list">
                    <li>
                        <div class="inner">
                            <img src="../assets/images/1.jpg" alt="">
                            <p class="title">大蒜腊肉</p>
                            <p class="price">￥26</p>
                        </div>
                    </li>
                    <li>
                        <div class="inner">
                            <img src="../assets/images/2.jpg" alt="">
                            <p class="title">大蒜腊肉</p>
                            <p class="price">￥26</p>
                        </div>
                    </li>
                    <li>
                        <div class="inner">
                            <img src="../assets/images/3.jpg" alt="">
                            <p class="title">大蒜腊肉</p>
                            <p class="price">￥26</p>
                        </div>
                    </li>
                    <li>
                        <div class="inner">
                            <img src="../assets/images/5.jpg" alt="">
                            <p class="title">大蒜腊肉</p>
                            <p class="price">￥26</p>
                        </div>
                    </li>
                    <li>
                        <div class="inner">
                            <img src="../assets/images/4.jpg" alt="">
                            <p class="title">大蒜腊肉</p>
                            <p class="price">￥26</p>
                        </div>
                    </li>
                    <li>
                        <div class="inner">
                            <img src="../assets/images/1.jpg" alt="">
                            <p class="title">大蒜腊肉</p>
                            <p class="price">￥26</p>
                        </div>
                    </li>
                </ul>
            </div>  
        </div>
    </div>
    <v-navfooter></v-navfooter>
    <div id="footer_book" class="footer_book">
        <img src="../assets/images/menu.png" alt="">
        <p>菜单</p>
    </div>   
    <div id="footer_cart" class="footer_cart">
        <img src="../assets/images/cart.png" alt="">
        <p>购物车</p>
    </div>
    </div>
</template>
<script>
import NavFooter from './public/NavFooter.vue'
export default {
    data() {
        return {

        }
    },
    components: {
        'v-navfooter': NavFooter,
    }
}
</script>
<style lang="scss">
.cart_content {
    padding: 1rem; 
    .cart_info {
        background: #fff;
        h2 {
            text-align: center;
            // font-size: 1.6rem;
            padding: .4rem 0;
            border-bottom: 1px solid #eee;
        }
        border-radius: .5rem;
        padding: .5rem;
        .p_number {
            display: flex;
            padding: .5rem 0; 
            border-bottom: 1px solid #eee;
            .p_number_left {
                flex: 1;
                p {
                    line-height: 2;
                    &:first-child {
                        color: red;
                    }
                }
            }
            .p_number_right {
                width: 4rem;
                height: 4rem;
                text-align: center;
                img {
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: 0 auto;
                }
            }
        }
        //购物车数量
        .cart_p_num {
            border-bottom: 1px solid #eee;
            p {
                line-height: 2;
                .price {
                    font-size: 2.4rem;
                    color: red;
                }
            }
        }
    } 

    .cart_list {
        padding: .5rem;
        background: #fff;
        border-radius: .5rem;
        margin-top: 1rem;
        .item {
            display: flex;
            width: 100%;
            padding: 1rem 0;
            border-bottom: 1px solid #eee;
            .left_food {
                flex: 1;
                display: flex;
                img {
                    width: 4rem;
                    height: 4rem;
                    border-radius: 10%;
                    margin-right: .8rem;
                }
                .foot_info {
                    flex: 1;
                }
            }
            .right_cart {
                width: 10rem;
                .cart_num {
                    width: 10rem;
                    display: flex;
                    margin-top: .5rem;
                    align-items: center;
                    .input_left,.input_right {
                        flex: 1;
                        width: 2.8rem;
                        height: 2.8rem;
                        line-height: 2.8rem;
                        font-size: 2.4rem;
                        text-align: center;
                        color: red;
                        border: 1px solid #eee;
        
                    }
                    .input_center {
                        flex: 1;
                        input {
                            width: 100%;
                            text-align: center;
                            height: 2.8rem;
                            border: none;
                            border-top: 1px solid #eee;
                            border-bottom: 1px solid #eee;
                            float: left;
                        }
                    }
                }
            }
        }
    }
    .hot_food {
        background: #fff;
        margin-top: 1rem;
        border-radius: .5rem;
        margin-bottom: 4rem;
        h3 {
            font-size: 1.4rem;
            padding: .5rem 0;
        }
        .item_list_outer {
            width: 100%;
            overflow-x: auto;
            .item_list {
                padding: 0 .5rem;
                width: 50rem;
                li {
                    float: left;
                    width: 6rem;
                    padding: .5rem;
                    box-sizing: border-box;
                    .inner {
                        background: #fff;
                        width: 100%;
                        border-radius: .5rem;
                        overflow: hidden;
                        img {
                            width: 100%;
                        }
                    }
                }
            }
        }    
    }

}


// 购物车空
.cart_empty {
    text-align: center;
    line-height: 3;
    h3 {
        font-size: 1.8rem;
    }
}
</style>


