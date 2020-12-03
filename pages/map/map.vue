<template>
    <view>
        <view class="title">
            <view class="title__text">经度：{{ location.longitude }} </view>
            <view class="title__text green">纬度：{{ location.latitude }} </view>
        </view>
        <view class="map">
            <view class="mapWrap">
                <map class="mapContainer" :latitude="location.latitude" :longitude="location.longitude" :markers="covers" :positon="position" show-location @tap="tap" scale='15' show-compass :circles='circles'></map>
            </view>
        </view>
        <view @tap="toAddress">
            到这去吧
        </view>
    </view>
</template>

<script>
export default {
    name: "test",
    data() {
        return {
            location: {
                longitude: 116.39742,
                latitude: 39.909,
            },
            covers: [
                {
                    id: 1,
                    longitude: "",
                    latitude: "",
                    iconPath: "../../static/map/location.png",
                    width: 28,
                    height: 28,
                    title: `点击显示标题`,
                    callout: {
                        content: `气泡`,
                        color: "#333",
                        fontSize: "16",
                        borderRadius: "10",
                        bgColor: "#ffffff",
                        padding: "10",
                        display: "ALWAYS",
                    },
                },
            ],
            polyline: [
                //济南北京连线
                {
                    points: [
                        { longitude: 117.117004, latitude: 36.650793 }, //济南经纬度
                        { longitude: 116.402893, latitude: 39.903416 }, //北京经纬度
                    ],
                    color: "#000000",
                    width: 1,
                    dottedLine: "true",
                },
            ],
            position: [
                {
                    left: 100,
                    top: 100,
                },
            ],
            circles: [
                {
                    //在地图上显示圆
                    longitude: 116.39942,
                    latitude: 39.909,
                    fillColor: "#ffffff", //填充颜色
                    color: "#000000", //描边的颜色
                    radius: 60, //半径
                    strokeWidth: 4, //描边的宽度
                },
            ],
        };
    },
    onLoad() {
        console.log(111);
        this.covers[0].longitude = this.location.longitude;
        this.covers[0].latitude = this.location.latitude;
        console.log(this.covers[0]);

        this.getLocation();
    },
    methods: {
        getLocation() {
            console.log(222);
            uni.getLocation({
                type: "wgs84",
                success: function (res) {
                    console.log("当前位置的经度：" + res.longitude);
                    console.log("当前位置的纬度：" + res.latitude);
                    alert('success' + JSON.stringify(res))
                },
                fail: function (res) {
                    alert("fail" + JSON.stringify(res));
                },
                complete: function (res) {
                    alert("complete" + JSON.stringify(res));
                },
            });
        },
        tap(e) {
            console.log(e.detail);
        },
        toAddress() {
            console.log(this.location.longitude);
            uni.openLocation({
                latitude: this.location.latitude,
                longitude: this.location.longitude + 0.001,
                success: function () {
                    console.log("success");
                },
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.title {
    display: flex;
    justify-content: space-around;
    &__text {
        color: blue;
    }
    .green {
        color: green;
    }
}
.map {
    .mapWrap {
        padding: 10rpx 24rpx;
        .mapContainer {
            width: 100%;
            height: 1000rpx;
        }
    }
}
</style>