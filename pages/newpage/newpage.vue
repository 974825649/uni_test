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

        <i-button @click.native="btnclick" ref="comBtn">
            按钮2
        </i-button>

        <injectButton>
            inject-Button
        </injectButton>
    </view>
</template>

<script>
import iButton from "./i-button";
import injectButton from "./inject-button";
export default {
    name: "ibutton",
    components: {
        iButton,
        injectButton,
    },
    provide: {
        name: "Aresn",
    },
    methods: {
        btnclick(val) {
            console.log("父组件value", val);
        },
        handleref() {
            this.$refs.comBtn.sayHello();
        },
    },
};
</script>

<style>
</style>