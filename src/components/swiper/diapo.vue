<template>
    <div name="swiper-slide">

        <div 
            v-if="show"
            ref="imageCtnr" 
            class="flex-center cursor-pointer h-70vh min-w-full max-w-full"
            :style="inlineBgImage(image)"
        >
           
            <div class="h-full mt-4 hover:opacity-50"
                v-water-mark="{ 
                text: 'Sylvain Allaire',
                textColor: 'rgba(255, 255, 255, .5)',
                font: '24px Microsoft JhengHei',
                row: 100, 
                col: 230 
            }">

            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: 'SwiperSlide',
        data(){
            return{
                image: '',
                show: false
            }
        },
        props: {
            img: String,
        },
        methods: {

            inlineBgImage(src) {
                let bgImage = require('@/assets/images/' + src)

                return {
                    background: `url("${bgImage}") no-repeat center center/contain`
                }
            },
        },
        mounted(){
            this.image = `${this.img}.jpg`
            this.show = true
        }

    }
</script>