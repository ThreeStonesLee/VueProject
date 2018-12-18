<template>
    <div id="pcontent">
        <router-link to='/home'>
            <div class="back">返回</div>
        </router-link>
        <div class="p_content">
            <div class="p_info">
                <img src="../assets/images/product.jpg" alt="">
                <h2>小炒肉</h2>
                <p class="price">22.00/份</p>
            </div>
            <div class="p_detial">
                <h3>
                    商品详情
                </h3>
                <div class="p_content">
                    <img src="../assets/images/product.jpg" alt="">
                    <br>
                    <p>
                        韩国辣酱海鲜炒面，青椒炒牛肉，芦笋腰果炒虾仁，家常料理简单又好吃
                    </p>
                </div>
            </div>
            <div class="p_info">
                <img src="../assets/images/product.jpg" alt="">
                <h2>小炒肉</h2>
                <p class="price">22.00/份</p>
            </div>
            <div class="p_detial">
                <h3>
                    商品详情
                </h3>
                <div class="p_content">
                    <img src="../assets/images/product.jpg" alt="">
                    <br>
                    <p>
                        韩国辣酱海鲜炒面，青椒炒牛肉，芦笋腰果炒虾仁，家常料理简单又好吃
                    </p>
                </div>
            </div>
        </div>
        <footer class="pfooter">
            <div class="cart">
                <strong>数量：</strong>
                <div class="cart_num">
                    <div class="input_left">-</div>
                    <div class="input_center">
                        <input type="text" readonly="readonly" value="1" name="">
                    </div>
                    <div class="input_right">+</div>
                </div>
            </div>
            <router-link to='/home'>
                <button class="addcart">加入购物车</button>
            </router-link>
            
        </footer>
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
.back {
    width: 3.8rem;
    height: 3.8rem;
    line-height: 3.8rem;
    border-radius: 50%;
    background: #000;
    position: fixed;
    top: .5rem;
    left: .5rem;
    color: #fff;
    &:before {
        //伪类是行内元素
        content: '';
        display: block;
        width: .8rem;
        height: .8rem;
        border-left: .2rem solid #fff;
        border-bottom: .2rem solid #fff;
        float: left;
        position: relative;
        top: 1.4rem;
        left: .6rem;
        transform: rotate(45deg);
        margin-right: .4rem;
    }
}


.p_content {
    .p_info {
        background: #fff;
        img {
            width: 100%;
            height: 18rem;
        }
        h2 {
            padding: .2rem .5rem;
        }
        .price {
            padding: .2rem .5rem;
            color: red;
        }
    }
    .p_detial {
        background: #fff;
        margin-top: 1rem;
        h3 {
            padding: .5rem;
        }
        .p_content {
            padding: 1rem;
            line-height: 1.5;
            img {
                max-width: 100%;
                display: block;
                margin: 0 auto;
            }
        }
    }
}
.pfooter {
    position: fixed;
    bottom: 0px;
    height: 4.4rem;
    line-height: 4.4rem;
    background: #fff;
    left: 0;
    width: 100%;
    border-top: 1px solid #eee;
    .cart {
        float: left;
        display: flex;
        strong {
            flex: 1;
            align-items: center;
            font-size: 1.6rem;
            padding: 0 .5rem;
        }
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
    .addcart {
        float: right;
        background: red;
        color: #fff;
        height: 3rem;
        border: none;
        padding: 0 .5rem;
        border-radius: .5rem;
        margin: .5rem .5rem 0 0; 
    }
}
</style>


