<template>
    <div id="home">
        <header class="index_header">
        <div class="hlist">
            <img src="../assets/images/rexiao.png" alt="">
            <p>热销榜</p>
        </div>
        <div class="hlist">
            <img src="../assets/images/caidan.png" alt="">
            <p>菜单</p>
        </div>
        <div class="hlist">
            <img src="../assets/images/sousuo.png" alt="">
            <p>搜你喜欢</p>
        </div>
    </header>
    <aside class="left_cate" id="left_cate">
        <ul>
            <li v-for="(item, index) in list" :key="index"  @click='changeList(index)'>{{ item.title }}</li>
        </ul>
            <div id="nav_cate" class="nav_cate">
                <img src="../assets/images/nav.png" alt="">
                <p>菜单</p>
            </div>  
    </aside>
    <div class="content">
        <div class="item" v-for="(item, index) in list" :key="index">
            <h3 class="item_cate">{{ item.title }}</h3>
            <ul class="item_list">
                <li v-for="(food, key) in item.list" :key="key">
                    <div class="inner">
                        <router-link :to="'/pcontent?id=' + food._id" >
                            <img :src="api + food.img_url">
                            <p class="title">{{ food.title }}</p>
                            <p class="price">￥{{ food.price }}</p>
                        </router-link>
                    </div>
                    
                </li>
            </ul>
        </div>
    </div>
    <div class="bg" id="bg">
    </div>
    <v-navfooter></v-navfooter>
    <div id="footer_cart" class="footer_cart">
        <router-link to="/cart">
            <img src="../assets/images/cart.png"/>
            <p>购物车</p>
            <span class="num" v-if="cartNum">{{ cartNum }}</span>
        </router-link>
    </div>
    </div>
</template>
<script>
import NavFooter from './public/NavFooter.vue';
// 引入配置文件
import Config from '../model/config.js'
export default {
    data() {
        return {
            list: [],
            // 引入的数据需要在这个配置后，才能在下面的方法中或者{{}}使用
            api: Config.api, 
            cartNum: 0,
        }
    },
    components: {
        'v-navfooter': NavFooter,
    },
    methods: {
        asideInitDom() {
            var navCate = document.getElementById('nav_cate');
            var leftCate = document.getElementById('left_cate');
            var bg = document.getElementById('bg');
            var flag = true;
            navCate.addEventListener('click', function() {
                if(flag) {
                    flag = false;
                    bg.style.display = 'block';
                    leftCate.style.transform = 'translate(0,0)';
                } else {
                    flag = true;
                    bg.style.display = 'none';
                    leftCate.style.transform = 'translate(-100%,0)';
                }
            })
        },
        requestData() {
            //注意this的指向
            var api = this.api + 'api/productlist';
            this.$http.get(api).then(response => {
                console.log(response)
                this.list = response.body.result;
            }, response => {
                console.log(response)
            });
        },
        changeList(key) {
            console.log(key);
            var listDom = document.querySelectorAll('.item_cate');
            document.documentElement.scrollTop = listDom[key].offsetTop;
            var leftCate = document.getElementById('left_cate');
            bg.style.display = 'none';
            leftCate.style.transform = 'translate(-100%,0)';
            
        },
        getCartCount() {
            var api = this.api + 'api/cartCount?uid=a001';
            this.$http.get(api).then((response) => {
                console.log(response);
                this.cartNum = response.body.result;
            }, (err) => {
                console.log(err)
            })
        }

    },
    mounted() {
        this.asideInitDom();
        this.requestData();
        this.getCartCount();
    }
}
</script>
<style lang="scss">
.index_header {
    width: 96%;
    margin: 0 auto;
    height: 4.4rem;
    background-color: #fff;
    margin-top: 1rem;
    display: flex;
    border-radius: .5rem;
    .hlist {
        flex: 1;
        text-align: center;
        padding: .2rem;
        border-right: 1px solid #eee;
        img {
            width: 2rem;
            height: 2rem;
            margin: 0 auto;
        }
        &:last-child {
            border-right: none;
        }
    }
}

.item {
    .item_cate {
        text-align: center;
        padding: .5rem;
    }
    .item_list {
        display: flex;
        flex-wrap: wrap;
        padding: 0 .5rem;
        li {
            width: 33.3%;
            padding: .5rem;
            box-sizing: border-box;
            
            .inner { 
                // 这个类的作用是营造一种间隔
                background-color: #fff;
                width: 100%;
                border-radius: .5rem;
                overflow: hidden;
                a {
                    color: #666;
                    text-decoration: none;
                }
                img {
                    width: 100%;
                    height: 6rem;
                }
                p {
                    padding: .2rem .5rem;
                }
                .title {
                    font-weight: bold;
                }
            }
        }
    }
}

// 侧边栏

.left_cate {
    // css3动画
    transition: all .5s;
    transform: translate(-100%, 0);
    width: 6rem;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #eee;
    z-index: 2;
    ul {
        position: absolute;
        padding: .5rem;
        height: 100%;
        z-index: 3;
        background: #eee;
        li {
            line-height: 4.4rem;
        }
    }
    .nav_cate {
        position: absolute;
        top: 42%;
        right: -3.5rem;
        background: rgba(132, 128, 128, .8);
        width: 5rem;
        height: 4rem;
        text-align: center;
        border-radius: 0 50% 50% 0;
        z-index: 2; 
        img {
            width: 1.8rem;
            height: 1.8rem;
            margin-left: 1rem;
            margin-top: .4rem;
        }
        p {
            color: #fff;
            margin-left: 1rem;
            margin-top: -.3rem;
        }
    }
}

.bg {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(132, 128, 128, .4);
    z-index: 1;
    display: none;
}

// 首页导航

#footer_nav {
    height: 4.4rem;
    width: 4.4rem;
    background: #000;
    position: fixed;
    color: #fff;
    bottom: .5rem;
    left: .5rem; 
    border-radius: 50%;
    text-align: center;
    img {
        width: 1.8rem;
        height: 1.8rem;
        margin-top: .4rem;
    }
    p {
        position: relative;
        margin-top: -.2rem;
    }
}
.footer_nav_show {
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0,0,0,.6);
    top: 0;
    left: 0;
    z-index: 3;
    .list {
        li {
            height: 4.4rem;
            width: 4.4rem;
            background: #000;
            position: absolute;
            color: #fff;
            
            left: .5rem; 
            border-radius: 50%;
            text-align: center;
            img {
                width: 1.8rem;
                height: 1.8rem;
                margin-top: .4rem;
            }
            p {
                position: relative;
                margin-top: -.2rem;
                font-size: 1rem;
            }
            &:nth-child(1) {
                bottom: 15.4rem;
                left: 0;
            }
            &:nth-child(2) {
                bottom: 12.4rem;
                left: 30%;
                margin-left: -2.2rem;
            }
            &:nth-child(3) {
                bottom: 7.4rem;
                left: 45%;
                margin-left: -2.2rem;
            }
            &:nth-child(4) {
                bottom: .5rem;
                left: 50%;
                margin-left: -2.2rem;
            }
            &:nth-child(5) {
                bottom: .5rem;
                left: .5rem;
            }
        }  
    }
}
#footer_cart {
    height: 4.4rem;
    width: 4.4rem;
    background: rgb(255, 0, 0);
    position: fixed;
    color: #fff;
    bottom: .5rem;
    right: .5rem; 
    border-radius: 50%;
    text-align: center;
    z-index: 2;
    img {
        width: 1.8rem;
        height: 1.8rem;
        margin-top: .4rem;
    }
    p {
        position: relative;
        margin-top: -.2rem;
        color: #fff;
    }
}
</style>

