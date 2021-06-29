Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#app',
        data: {
            imgList: [
                './img/background-1.jpg',
                './img/background-2.jpg',
                './img/background-3.jpg',
                './img/background-4.jpg'
            ],
            imgIndex: 0,
        },
        created() {
            setInterval(() => {
                this.next();
            }, 5000)
        },
        methods: {
            next: function () {

                if (this.imgIndex === (this.imgList.length - 1)) {
                    this.imgIndex = 0;
                    
                    
                } else {
                    this.imgIndex++;
                    
                }
            },

            prev: function () {

                if (this.imgIndex === 0) {
                    this.imgIndex = this.imgList.length - 1;
                    
                } else {
                    this.imgIndex--;

                }
            },

            move: function (index) {
                this.imgIndex = index;
            },

            rightDot: function (index) {
                if (index === this.imgIndex) {
                    return 'color-blue';
                } else {
                    return ''
                }
            }
        }
    }


)