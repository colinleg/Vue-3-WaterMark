<template>
  <div class="home flex justify-around">
    <div class="flex w-screen">
      <div class=" h-screen lg:w-1/4 flex flex-col items-end justify-center">
        <h1 class="font-bold text-xl"> AQUARELLES </h1>
        <ol>
          <li>Granville et la Manche</li>
          <li>Caen et le Calvados</li>
          <li>Paris, gouache sur kraft</li>
        </ol>

        <h1 class="font-bold text-xl mt-8"> CARNETS </h1>
        <ol>
          <li>Dessins Artistes A/L</li>
          <li>Dessins Artistes M/Z</li>
          <li>Rome, janvier 2017</li>
          <li>Venise, février 2012</li>
        </ol>

        <button class="mt-8">Contact</button>
        <button>Commandes</button>
        <button>Expositions</button>
      </div>
      
      <div name="container-diapo" 
        class="lg:w-2/3 h-full flex flex-col justify-center
          mx-6
      "
      >

      <diapo
        class="flex justify-center items-center"
        :img="image"
      >
        
      </diapo>

      </div>

      <div class="h-screen lg:w-1/4 flex flex-col items-start justify-center">
        <h1 class="font-bold text-xl"> PEINTURES</h1>
        <ol>
          <li>Les pins</li>
          <li>Ciels</li>
          <li>Divers</li>
        </ol>

        <h1 class="font-bold text-xl mt-8"> INSTALLATIONS</h1>

        <ol>
          <li> Carpe Diem </li>
          <li> Cartographie </li>
          <li> La machine à faire des châteaux de sable </li>
          <li> Light Motif </li>
        </ol>

        <h1 class="font-bold text-xl mt-8"> OBJETS </h1>

        <ol>
          <li> Posters de la Manche</li>
          <li> LIVRE : "Balade Granvillaise"</li>
          <li> Objets en Papier </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import diapo from '@/components/swiper/diapo.vue'

export default {


  name: 'Home',
  data(){
    return {
      show: false,
      image: 'diapo2',
      swipNav:{
        prevEl: ".prev",
        nextEl: ".next",
      }
    }
  },
  methods: {
    getImgUrl(name) {
        var images = require.context('@/assets/images', false, /\.jpg$/)
        return images('./' + name + ".jpg")
    },
    incrImage(){
      this.image= 'diapo2'
    },
    showIt(){
      console.log('show it')
      this.show = true
    },
    unShowIt(){
      console.log('unshow it')
      this.show = false
    }
  },
  components: {
    diapo
  }
}
</script>

<style scoped>
/* .swiper-container {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img{
  display: block;
  width: 100%;
  height:100%;
}

.swiper-slide div{
    border-radius: 100%;
}

.swiper-button-prev{
  color: #4893bd;
}

.swiper-button-next{
  color: #4893bd;
  margin-right: 1rem;
} */
</style>
