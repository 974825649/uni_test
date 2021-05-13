<template>
    <button :class="'i-button-size' + size" :disabled="disabled" class="btn" @click="handleClick">
        <text class="float-left">
            <slot name="slot-left"></slot>
        </text>
        <slot></slot>
        <text class="float-right">
            <slot name="slot-right"></slot>
        </text>
    </button>
</template>
<script>
// 判断参数是否是其中之一
function oneOf(value, validList) {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true;
        }
    }
    return false;
}

export default {
    props: {
        size: {
            validator(value) {
                return oneOf(value, ["small", "large", "default"]);
            },
            default: "default",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        handleClick(event) {
            console.log("子组件方法");
            this.$emit("btnclick", { title: "hehe" });
        },
        sayHello() {
            window.alert("Hello");
        },
    },
};
</script>

<style lang="scss" scoped>
.btn {
    display: flex;
    justify-content: space-between;
}
.btn .float-left {
    color: blue;
}
.btn .float-right {
    color: red;
}
</style>
