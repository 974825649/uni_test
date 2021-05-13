<template>
    <view class="">
        <view class="">新页面</view>
        <i-button size="large">
            <template slot="slot-left">
                左边信息
            </template>
            按钮1
            <template slot="slot-right">
                右边信息
            </template>
        </i-button>

        <i-button @click.native="btnclick">
            按钮2
        </i-button>

        <i-button @click.native="handleref" ref="comBtn">
            按钮3
        </i-button>
    </view>
</template>

<script>
import iButton from "./i-button";
export default {
    name: "ibutton",
    components: { iButton },
    methods: {
        btnclick(val){
            console.log('父组件value',val);
        },
        handleref(){
            this.$refs.comBtn.sayHello();
        }
    },
};
</script>

<style>
</style>