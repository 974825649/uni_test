
const num = {
    num2: {
        data() {
            return {
                isnum2: 3
            }
        },
        onLoad() {
            console.log('mixin加载');
        },
        methods: {
            two2(num) {
                return num * this.isnum2;
            }
        }
    },
    num3: {
        methods: {
            two3(num) {
                return num * num * num;
            }
        }
    } 
}

export default num


