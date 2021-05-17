<template>
    <button class="inject-button" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
export default {
    inject: ['name'],
    methods: {
        handleClick() {
            console.log('触发inject-button');

            console.log(this.name);
        }
    },
};
</script>

<style lang="scss" scoped>
.inject-button {
    display: flex;
    justify-content: center;
}
</style>
