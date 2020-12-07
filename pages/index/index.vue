<template>
    <view class="container">
        <!-- <picker mode="date" :value="picker_date" start="2015-09-01" end="2017-10-01" @change="bindDateChange">
            <view class="picker">
                当前选择: {{ picker_date }}
            </view>
        </picker> -->
       
        <view class="btnWrap">

            <button type="primary" class="btn" @click="jump(url.test)"> 测试代码 </button>
            <button type="primary" class="btn" @click="modal"> 测试弹窗 </button>
            <button type="primary" class="btn" @click="jump(url.text)"> 测试 text </button>
            <button type="primary" class="btn" @click="jump(url.watch)"> 测试 watch </button>
            <button type="primary" class="btn" @click="jump(url.map)"> 测试 map </button>

        </view>

        <view class="">
            <view class="">
                第一次版本提交 111111
                第二次版本提交 222222
                第三次版本提交 333333
            </view>
        </view>

        <!-- <view>
            <block class="" v-for="(item,index) in apple" :key="index">
                <view v-if="index < 2">
                    <view style="color: blue"> 
                        <text >{{ item.appleName }} </text>
                    </view>
                </view>
                <view v-else>
                    <view style="color: red"> 
                        <text >{{ item.appleName }} </text>
                    </view>     
                </view>
            </block>
        </view>       -->
    </view>
</template>

<script>
// import num from '@/common/mixin/mixin'
export default {
    // mixins:[ num.num2 ],
    data() {
        return {
            isActive: true,
            activeClass: 'activeClass',
            errorClass: 'errorClass',
            picker_date: '',
            h5: '',
			url: {
                text: `/pages/text/text`,
                watch: `/pages/watch/watch`,
                test: `/pages/test/test`,
                map: `/pages/map/map`,
			},
            apple: [
                {
                    appleName: 'apple1',
                },
                {
                    appleName: 'apple2',
                },
                {
                    appleName: 'apple3',
                },
                {
                    appleName: 'apple4',
                },
            ],
            
        };
    },
    methods: {
		// bindDateChange(e){
		// 	console.log(e);
        //     this.picker_date = e.detail.value                         
        // },
        modal() {
            uni.showModal({
                title: '提示',
                content: '这是一个模态弹窗',
                success: function (res) {
                    if (res.confirm) {
                        console.log('用户点击确定');
                    } else if (res.cancel) {
                        console.log('用户点击取消');
                    }
                }
            });
        },
        jump(path) {
            console.log(path);
            uni.navigateTo({
                url: path
            });
        },
    },

};
</script>

<style>
.container {
    padding: 20px;
    font-size: 14px;
    line-height: 24px;
}
.active {
    color: blue;
}
.container .activeClass {
    background: rgb(32, 32, 32);
}
.container .errorClass {
    color: #fff;
}

.btnWrap{ display: flex; flex-wrap: wrap; justify-content: space-between; box-sizing: border-box;}
.btnWrap .btn{ width: 40%; margin: 10rpx 20rpx}
</style>
