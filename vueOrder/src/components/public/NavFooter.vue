<template>
    <div id="navfooter">
        <div id="footer_nav" class="footer_nav" @click="flag = !flag">
            <img src="../../assets/images/navigation.png" alt="">
        <p>导航</p>
        </div>

        <div class="footer_nav_show" v-if="flag">
            <ul class="list">
                <li>
                    <img src="../../assets/images/menu.png" alt="">
                    <p>菜单</p>
                </li>
                <li>
                    <img src="../../assets/images/cart.png" alt="">
                    <p>购物车</p>
                </li>
                <li>
                    <img src="../../assets/images/order.png" alt="">
                    <p>我的订单</p>
                </li>
                <li>
                    <img src="../../assets/images/wallet.png" alt="">
                    <p>结账</p>
                </li>
                <li @click="flag = !flag">
                    <img src="../../assets/images/close.png" alt="">
                    <p>返回</p>
                </li>
            </ul>
        </div>
<!-- 
        <div id="footer_cart" class="footer_cart"> 
            <img src="../../assets/images/cart.png" alt="">
            <p>购物车</p>
            <span class="num">11</span>
        </div> -->

    </div>
</template>
<script>
export default {
    data() {
        return {
            flag: false,
        }
    }
}
</script>
<style lang="scss">

</style>


