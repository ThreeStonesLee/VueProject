<template>
    <div id='cart'>
        <div class="cart_content" >
        <div class="cart_info" v-if="totalNum">
            <h2>购物车</h2>
            <div class="p_number">
                <div class="p_number_left">
                    <p>用餐人数：{{ peopleList.p_num }}</p>
                    <p>备注：<span v-if="!peopleList.p_mark">无</span><span v-if="peopleList.p_mark">{{ peopleList.p_mark }}</span></p>
                </div>
                <div class="p_number_right">
                    <router-link to="/editpeopleinfo">
                        <img src="../assets/images/edit.png" alt="">
                        <p>修改</p>
                    </router-link>
                    
                </div>
            </div>
            <div class="cart_p_num">
                <p>购物车总共有{{ totalNum }}个菜</p>
                <p>合计：<span class="price">￥{{ allPrice }}</span></p>
            </div>
        </div>
        <div class="cart_list" v-if="totalNum">
            <ul>
                <li class="item" v-for="(item, index) in list" :key="index">
                    <div class="left_food">
                        <img :src="api+item.img_url" alt="">
                        <div class="food_info">
                            <p>{{ item.title }}</p>
                            <p class="price">￥{{ item.price }}</p>
                        </div>
                    </div>
                    <div class="right_cart">
                        <div class="cart_num">
                            <div class="input_left" @click="decNum(item, index)">-</div>
                            <div class="input_center">
                                <input type="text" readonly="readonly" v-model="item.num">
                            </div>
                            <div class="input_right" @click="incNum(item)">+</div>
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
    <div class="cart_empty" v-if="!totalNum">您的购物车空空的，请点击菜单点菜！</div>
    <router-link to="/home">
        <div id="footer_book" class="footer_book">
            <img src="../assets/images/menu.png" alt="">
            <p>菜单</p>
        </div> 
    </router-link>
      
    <div @click="addOrder()" id="footer_cart" class="footer_cart">
        <img src="../assets/images/doorder.png" alt="">
        <p>下单</p>
    </div>
    </div>
</template>
<script>
import Config from '../model/config'
import NavFooter from './public/NavFooter.vue'
import Storage from '../model/storage.js'
export default {
    data() {
        return {
            api: Config.api,
            list: [],
            peopleList: [],
            allPrice: 0,
            totalNum: 0,
        }
    },
    components: {
        'v-navfooter': NavFooter,
    },
    sockets: {
        addcart: function() {
            this.getCartData();
        }
    },
    methods: {
        getCartData() {
            var uid = Storage.get('roomid');
            var api = this.api + 'api/cartlist?uid=' + uid;
            this.$http.get(api).then((response) => {
                console.log(response);
                this.list = response.body.result;
                this.getTotalResult();
            }, (err) => {
                console.log(err);
            })
        },
        decNum(item, key) {
            var uid = Storage.get('roomid');
            var product_id = item.product_id;
            var num = item.num;
            var api = this.api + 'api/decCart?uid=' + uid + '&product_id=' + product_id + '&num=' + num;
            this.$http.get(api).then((response) => {
                //修改购物车时给服务器广播数据
                this.$socket.emit('addcart', 'addcart')
                this.getTotalResult();
            }, (err) => {
                console.log(err);
            })
            if(item.num == 1) {
                this.list.splice(key, 1);
            } else {
                --item.num;
            }
        },
        incNum(item) {
            var uid = Storage.get('roomid');
            var product_id = item.product_id;
            var num = item.num;
            var api = this.api + 'api/incCart?uid=' + uid + '&product_id=' + product_id + '&num=' + num;
            this.$http.get(api).then((response) => {
                //修改购物车时给服务器广播数据
                this.$socket.emit('addcart', 'addcart')
                this.getTotalResult();
            }, (err) => {
                console.log(err);
            })
            ++item.num;
        },
        getTotalResult() {
            var allPrice = 0;
            var totalNum = 0;
            for(var i = 0; i < this.list.length; i ++) {
                allPrice += parseFloat(this.list[i].price * this.list[i].num); 
                totalNum += this.list[i].num;
            }
            this.allPrice = allPrice;
            this.totalNum = totalNum;
        },
        getPeopleInfoList() {
            var uid = Storage.get('roomid');
            var api = this.api + 'api/peopleInfoList?uid=' + uid;
            this.$http.get(api).then((response) => {
                console.log(response)
                this.peopleList = response.body.result[0];
                console.log(this.peopleList)
            }, (err) => {
                console.log(err);
            })
        },
        addOrder() {
            var uid = Storage.get('roomid');
            var p_num = this.peopleList.p_num;
            var p_mark = this.peopleList.p_mark;
            var total_price = this.allPrice;
            var total_num = this.totalNum;
            var order = JSON.stringify(this.list) //order是数组，可以json对象转换成字符串

            var api = this.api + "api/addOrder";
            this.$http.post(api, {
            //es6属性的简写
            uid,
            p_num,
            p_mark,
            total_price,
            total_num,
            order
            }).then((respone) => {
                // console.log(respone);
                if(respone.body.success) {
                    this.$router.push({path: 'order'})
                }
                
            }, (err) => {
                console.log(err);
            })
        }
    },
    mounted() {
        this.getCartData();
        this.getPeopleInfoList();
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


