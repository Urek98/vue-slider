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
        methods: {
            next: function () {

                if (this.imgIndex === (this.imgList.length - 1)) {
                    this.imgIndex = 0;
                } else {
                    this.imgIndex++;
                }
            },

            prev: function () {

                if(this.imgIndex === 0){
                    this.imgIndex = this.imgList.length -1;
                } else {
                    this.imgIndex--;

                }
            },
        }
    }


)