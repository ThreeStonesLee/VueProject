<template>
    <div id="start">
        <div class="start_content">
            <header class="start_header">
                <img src="../assets/images/canju.png" alt=""> 修改 用餐人数
            </header>
            <p class="notice">请选择正确的用餐人数，小二马上给你送餐具</p>
            <div class="content">
                <ul class="user_list">
                    <li v-for="(item, index) in uesrList" :key='index' :class="{'active': parseInt(peopleList.p_num)==index+1 }"> 
                        <span>{{ item }}</span>
                    </li>
                </ul>
                <div class="mark_input">
                    <input type="text" v-model="p_mark" placeholder="请输入您的口味要求">
                </div>
                <ul class="mark_list">
                    <li>
                        <span>打包带走</span>
                    </li>
                    <li>
                        <span>不要放辣椒</span>
                    </li>
                    <li>
                        <span>微辣</span>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 路由跳转 -->
        <!-- <router-link to='/home'>
            <div id="start" class="start" @click="addPeopleInfo()">
                <span>开始点菜</span>
            </div>
        </router-link> -->
        <div id="start_ok" class="start_ok" @click="addPeopleInfo()">
            <span>确定修改</span>
        </div>
        <div id="start_cancel" class="start_cancel">
            <router-link to='/cart'>
                <span>取消</span>
            </router-link>  
        </div>
        
    </div>
</template>
<script>
import Config from '../model/config.js';
export default {
    data() {
        return {
            'p_num': '1人',
            'p_mark': '',
            'api': Config.api,
            'peopleList': [],
            'uesrList': [],
        }
    },
    methods: {
        addChangeEvent() {
            var that = this; //保存this
            var list = document.querySelectorAll('.user_list li');
            for(var i = 0; i < list.length; i ++) {
                list[i].onclick = function() {
                    for(var j = 0; j < list.length; j ++) {
                        //去掉所有的li的类，然后给当前的li添加一个active
                        list[j].className = '';
                    }
                    this.className = 'active';
                    that.p_num = this.querySelector('span').innerHTML.trim();
                }
            }

            var mark_list = document.querySelectorAll('.mark_list li');
            for(var i = 0; i < mark_list.length; i ++) {
                mark_list[i].onclick = function() {
                    for(var j = 0; j < mark_list.length; j ++) {
                        //去掉所有的li的类，然后给当前的li添加一个active
                        mark_list[j].className = '';
                    }
                    this.className = 'active';
                    that.p_mark = that.p_mark + ' ' + this.querySelector('span').innerHTML.trim();
                }
            }
        },

        addPeopleInfo() {
            var api = this.api + 'api/addPeopleInfo';
            this.$http.post(api, {
                uid: 'a002',
                p_num: this.p_num,
                p_mark: this.p_mark
            }).then((response) => {
                // console.log(response)
                if(response.body.success) {
                    this.$router.push({path: 'cart'})
                }
            },(err) => {
                console.log(err);
            })
        },
        getPeopleInfoList() {
            var api = this.api + 'api/peopleInfoList?uid=a002';
            this.$http.get(api).then((response) => {
                // console.log(response)
                this.peopleList = response.body.result[0];
                // console.log(this.peopleList)
                this.p_mark = this.peopleList.p_mark;
            }, (err) => {
                console.log(err);
            })
        }
    },
    mounted() {
        for(var i = 0; i < 12; i ++) {
            this.uesrList.push(i + 1 + '人');
        }
        this.$nextTick(function() {
            this.addChangeEvent();
        })
        this.getPeopleInfoList()
    }
}
</script>
<style lang='scss'>
.start_content {
    .start_header {
        width: 10rem;
        height: 3.2rem;
        line-height: 3.2rem;
        background: #000;
        color: #fff;
        margin: 5rem auto 0; 
        border-radius: .5rem;
        img {
            height: 2.2rem;
            line-height: 2.2rem;
            position: relative;
            top: .5rem;
            margin-left: 1rem;
        }
    }
    .notice {
        color: red;
        text-align: center;
        margin: 1rem 0;
    }
    .mark_input {
        padding: 1rem;
        input {
            height: 3rem;
            line-height: 3rem;
            width: 100%;
            border: 1px solid #eee;
        }
    }
    .user_list, .mark_list {
        display: flex;
        flex-wrap: wrap;
        padding: .5rem;
        li {
            width: 25%;
            padding: .5rem;
            box-sizing: border-box;
            span {
                display: block;
                width: 100%;
                height: 3.2rem;
                line-height: 3.2rem;
                text-align: center;
                background-color: #fff;
                border-radius: .5rem;
                border: 1px solid #ccc;
            }
        }
        li.active {
            span {
                background-color: red;
                border: 1px solid red;
                color: #fff;
            }
        }
    }
} 

.start_ok {
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    height: 6rem;
    width: 6rem;
    background-color: red;
    color: #fff;
    border-radius: 50%;
    span {
        display: block;
        width: 2rem;
        margin: 0 auto;
        position: relative;
        top: 1.5rem;
    }
}

.start_cancel {
    position: fixed;
    bottom: 5rem;
    left: 5rem;
    height: 6rem;
    width: 6rem;
    line-height: 3rem;
    background-color: red;
    color: #fff;
    border-radius: 50%;
    span {
        display: block;
        color: #fff;
        width: 2rem;
        margin: 0 auto;
        position: relative;
        top: 1.5rem;
    }
}
</style>


