<template>
    <view>

        <view>
            单价：<input type="text" v-model="price" placeholder="请输入单价" style="border: 1px solid #999" />
            <!-- <view class=""> modelData：{{ modelData }} </view> -->
        </view>

        <view>
            数量1：<input type="text" v-model="num" placeholder="请输入数量" style="border: 1px solid #999" />
            <!-- <view class=""> computerData：{{ computerData }} </view> -->
        </view>

        <view>
            数量2：<input type="text" v-model="num2" placeholder="显示数量2" style="border: 1px solid #999" />
            <!-- <view class=""> computerData：{{ computerData }} </view> -->
        </view>

        <view class="">总价： {{total}}</view>
        <view class=""><button type="primary" @click="clear">清空</button></view>

    </view>
</template>

<script>
export default {
    name: "watch",
    data() {
        return {
            price: '',
            num: '',
            num2: '',
        };
    },
    methods: {
        clear(e) {
            console.log(e);
            this.price = this.num = "";
        },
    },
    computed: {
        total() {
            return this.price * this.num;
        },
    },
    watch: {
        num() {
            this.num2 = this.num ? this.num * 1 + 1 : "";
        },
    },
};
</script>

<style>
</style>
