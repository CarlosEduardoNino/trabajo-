<template>
  <div>
    <div class="header">
      <div class="carousel">
        <img
          v-for="(slide, index) in slides"
          :key="index"
          :src="slide.image"
          :alt="slide.title"
          class="carousel-image"
          :style="{ display: currentSlide === index ? 'block' : 'none' }"
        />
        <div class="text" id="carousel-text">
          <h1>{{ slides[currentSlide].title }}</h1>
          <p>{{ slides[currentSlide].description }}</p>
        </div>
        <button class="prev" @click="changeSlide(-1)">❮</button>
        <button class="next" @click="changeSlide(1)">❯</button>
      </div>
    </div>
    
    <div class="content">
      <div
        v-for="(section, index) in sections"
        :key="index"
        class="section"
        :class="{ 'reverse': index % 2 !== 0 }"
      >
        <img :src="section.image" :alt="section.title" />
        <div class="text">
          <h2>{{ section.title }}</h2>
          <p>{{ section.description }}</p>
          <a class="button" href="#">Learn More</a>
        </div>
      </div>
    </div>
    <div class="footer" style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0B7rAD5TWK7roFOZPzNUkWhnHY1iNmd1gGQ&s');">
      <p>Contact Us</p>
      <div class="icons">
        <a href="#"><i class="fas fa-phone"></i></a>
        <a href="#"><i class="fas fa-envelope"></i></a>
        <a href="#"><i class="fas fa-map-marker-alt"></i></a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

onMounted(() => {
  gsap.from('.carousel-image', { opacity: 0, duration: 1, stagger: 0.5 });
});

const currentSlide = ref(0);
const slides = ref([
  {
    image: 'https://storage.googleapis.com/a1aa/image/UyFOrJb1DloPAhYYRF7bYtseZ7IAJoa3vvzIoMLIVZxkARzJA.jpg',
    title: 'Our History',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    image: 'https://storage.googleapis.com/a1aa/image/UaYCo9QvEY7eQKcBaqb2S4DudfZa3fdXAoOJ4a5lhjBZCENnA.jpg',
    title: 'Luxurious Lobby',
    description: 'Experience the grandeur of our opulent lobby with golden chandeliers and elegant decor.'
  },
  {
    image: 'https://storage.googleapis.com/a1aa/image/9VKtsPwzQVqHJlfVIJ3mJrOVx4EPDyoXDsr0Y6D1BTKlARzJA.jpg',
    title: 'Beautiful Gardens',
    description: 'Stroll through our beautiful gardens adorned with golden statues and a serene fountain.'
  },
  {
    image: 'https://storage.googleapis.com/a1aa/image/XYaz6EtYzfTUXigL9qdJ0TW2BhDS7v0mUOJHKbfSQRFQeDNnA.jpg',
    title: 'Elegant Rooms',
    description: 'Relax in our elegantly designed rooms with luxurious amenities and stunning views.'
  },
  {
    image: 'https://storage.googleapis.com/a1aa/image/zYFlWPfzxRXyACgy8wzjoT9puY0ftlQUGOhuqysrKchUeDNnA.jpg',
    title: 'Fine Dining',
    description: 'Enjoy gourmet meals prepared by our world-class chefs in a sophisticated setting.'
  }
]);

const sections = ref([
  {
    image: 'https://storage.googleapis.com/a1aa/image/zYFlWPfzxRXyACgy8wzjoT9puY0ftlQUGOhuqysrKchUeDNnA.jpg',
    title: 'About Us',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    image: 'https://storage.googleapis.com/a1aa/image/XYaz6EtYzfTUXigL9qdJ0TW2BhDS7v0mUOJHKbfSQRFQeDNnA.jpg',
    title: 'Spa',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    image: 'https://storage.googleapis.com/a1aa/image/QZOgbeVf77m7mU27qXCQ87TcC9SibBizYTBJaDw66zESeDNnA.jpg',
    title: 'Rooms & Suites',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    image: 'https://storage.googleapis.com/a1aa/image/UaYCo9QvEY7eQKcBaqb2S4DudfZa3fdXAoOJ4a5lhjBZCENnA.jpg',
    title: 'Events',
    description: 'Host your events in our luxurious halls with top-notch facilities and services.'
  },
  {
    image: 'https://storage.googleapis.com/a1aa/image/9VKtsPwzQVqHJlfVIJ3mJrOVx4EPDyoXDsr0Y6D1BTKlARzJA.jpg',
    title: 'Beaches',
    description: 'Relax on our beautiful beaches with golden sand and crystal-clear waters.'
  }
]);

const changeSlide = (direction) => {
  currentSlide.value = (currentSlide.value + direction + slides.value.length) % slides.value.length;
};

const autoSlide = () => {
  changeSlide(1);
};

onMounted(() => {
  setInterval(autoSlide, 5000); // Change slide every 5 seconds
});
</script>

<style scoped>
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background: radial-gradient(circle at top, #333, #000); /* Fondo oscuro con gradiente */
  animation: pageFadeIn 1.5s ease-in-out forwards; /* Animación para la carga de la página */
}

@keyframes pageFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.header {
  position: relative;
  text-align: center;
  color: white;
}

.carousel {
  position: relative;
  width: 100%;
  max-height: 800px;
  overflow: hidden;
  background-attachment: fixed;
  background-size: cover;
}

.carousel img {
  width: 100%;
  height: 800px;
  transition: transform 0.5s ease-in-out;
}

.carousel:hover img {
  transform: scale(1.1); /* Zoom suave al hacer hover */
}

.carousel .text {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: black;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 10px;
  text-align: left;
  width: 30%;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  animation: textSlideIn 1s ease-in-out forwards; /* Texto deslizándose hacia arriba */
}

@keyframes textSlideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.carousel .text h1 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5em;
  margin: 0;
  color: gold;
  animation: shine 1s alternate infinite;
}

@keyframes shine {
  0% { box-shadow: 0 0 10px gold; }
  100% { box-shadow: 0 0 20px gold; }
}

.carousel .text p {
  font-size: 1.2em;
  color: white;
}

.carousel .prev, .carousel .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 1.5em;
  transition: all 0.4s ease;
}

.carousel .prev {
  left: 10px;
}

.carousel .next {
  right: 10px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.content .section {
  width: 100%;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  height: 320px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
  animation: cardSlideIn 1s ease-in-out forwards; /* Animación de aparición */
}

@keyframes cardSlideIn {
  from {
    opacity: 0;
    transform: translateY(50px) rotate(-5deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotate(0);
  }
}

.content .section.reverse {
  flex-direction: row-reverse;
  animation: slideInReverse 1s ease-in-out forwards;
}

@keyframes slideInReverse {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.content .section:hover {
  transform: translateY(-10px); /* Elevación al hacer hover */
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.content .section img {
  width: 50%;
  object-fit: cover;
}

.content .section .text {
  padding: 40px;
  width: 50%;
}

.content .section .text h2 {
  font-family: 'Lora', serif;
  font-size: 1.8em;
  margin: 0 0 20px 0;
  color: #333;
  letter-spacing: 1px;
  line-height: 1.4;
}

.content .section .text p {
  font-size: 1.1em;
  color: #666;
  margin-bottom: 20px;
  letter-spacing: 1px;
  line-height: 1.4;
}

.content .section .text .button {
  display: inline-block;
  padding: 10px 20px;
  background: linear-gradient(45deg, #FFD700, #DAA520);
  color: black;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  animation: buttonAppear 0.8s ease-out; /* Aparición suave del botón */
}

@keyframes buttonAppear {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.content .section .button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.7s;
}

.content .section .button:hover::before {
  left: 100%;
}

.content .section .button:hover {
  background-color: #d4af37;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
}

.footer {
  background-image: url('https://thumbs.dreamstime.com/b/interior-de-un-cuarto-ba%C3%B1o-lujo-con-jacuzzi-el-lujoso-y-acogedor-ba%C3%B1era-hidromasaje-165763768.jpg');
  background-size: cover;
  color: white;
  text-align: center;
  padding: 40px 20px;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2);
}

.footer .icons {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.footer .icons a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-size: 1.5em;
  transition: transform 0.3s ease, color 0.3s ease;
  display: inline-block;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.footer .icons a:nth-child(2) {
  animation-delay: 0.3s;
}

.footer .icons a:nth-child(3) {
  animation-delay: 0.6s;
}

.footer .icons a:hover {
  color: gold;
  transform: translateY(-5px) scale(1.1);
}

</style>