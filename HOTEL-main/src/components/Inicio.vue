<template>
  <div>
  
    <div class="header" id="home">
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
        :id="section.id"
        ref="sectionRefs"
      >
        <img :src="section.image" :alt="section.title" />
        <div class="text">
          <h2>{{ section.title }}</h2>
          <p>{{ section.description }}</p>
          <a class="button" href="#">Learn More</a>
        </div>
      </div>
    </div>

    <div class="services" id="services">
      <h2>Our Services</h2>
      <div class="service-grid">
        <div class="service-item" v-for="service in services" :key="service.title">
          <i :class="service.icon"></i>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>

    <div class="testimonials">
      <h2>What Our Guests Say</h2>
      <div class="testimonial-carousel">
        <div v-for="testimonial in testimonials" :key="testimonial.name" class="testimonial">
          <p>"{{ testimonial.text }}"</p>
          <h4>{{ testimonial.name }}</h4>
        </div>
      </div>
    </div>

    <div class="booking-section">
      <h2>Book Your Stay</h2>
      <form @submit.prevent="submitBooking" class="booking-form">
        <input type="date" v-model="booking.checkIn" required>
        <input type="date" v-model="booking.checkOut" required>
        <select v-model="booking.guests" required>
          <option value="" disabled selected>Number of guests</option>
          <option v-for="n in 4" :key="n" :value="n">{{ n }} {{ n === 1 ? 'guest' : 'guests' }}</option>
        </select>
        <button type="submit">Book Now</button>
      </form>
    </div>

    <div class="footer" :style="{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0B7rAD5TWK7roFOZPzNUkWhnHY1iNmd1gGQ&s')` }">
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
import { ref, onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const currentSlide = ref(0);
const sectionRefs = ref([]);

const slides = ref([
  {
    image: 'https://storage.googleapis.com/a1aa/image/UyFOrJb1DloPAhYYRF7bYtseZ7IAJoa3vvzIoMLIVZxkARzJA.jpg',
    title: 'Our Rich History',
    description: 'Founded in 1920, the Golden Palace Hotel has been a beacon of luxury and elegance for over a century. Our commitment to excellence has made us a favorite among discerning travelers and royalty alike.'
  },
  {
    image: 'https://storage.googleapis.com/a1aa/image/UaYCo9QvEY7eQKcBaqb2S4DudfZa3fdXAoOJ4a5lhjBZCENnA.jpg',
    title: 'Luxurious Lobby',
    description: 'Step into a world of opulence as you enter our grand lobby. Adorned with Venetian chandeliers, marble floors, and exquisite artwork, it sets the tone for an unforgettable stay.'
  },
  {
    image: 'https://storage.googleapis.com/a1aa/image/9VKtsPwzQVqHJlfVIJ3mJrOVx4EPDyoXDsr0Y6D1BTKlARzJA.jpg',
    title: 'Enchanting Gardens',
    description: 'Lose yourself in our meticulously manicured gardens. With rare flora, serene fountains, and hidden alcoves, it\'s a paradise for nature lovers and romantic souls.'
  },
  {
    image: 'https://storage.googleapis.com/a1aa/image/XYaz6EtYzfTUXigL9qdJ0TW2BhDS7v0mUOJHKbfSQRFQeDNnA.jpg',
    title: 'Elegant Suites',
    description: 'Experience unparalleled comfort in our spacious suites. Each room is a perfect blend of classic elegance and modern luxury, offering stunning views of the city or our lush gardens.'
  },
  {
    image: 'https://storage.googleapis.com/a1aa/image/zYFlWPfzxRXyACgy8wzjoT9puY0ftlQUGOhuqysrKchUeDNnA.jpg',
    title: 'Gourmet Dining',
    description: 'Indulge your palate at our Michelin-starred restaurant. Our master chefs create culinary masterpieces using the finest local and imported ingredients, paired with an extensive wine collection.'
  }
]);

const sections = ref([
  {
    id: 'about',
    image: 'https://storage.googleapis.com/a1aa/image/zYFlWPfzxRXyACgy8wzjoT9puY0ftlQUGOhuqysrKchUeDNnA.jpg',
    title: 'About Us',
    description: 'The Golden Palace Hotel is more than just a place to stay; it\'s a living piece of history. For over a century, we\'ve been the epitome of luxury, hosting world leaders, celebrities, and discerning travelers. Our commitment to impeccable service, attention to detail, and continuous innovation has made us a landmark in the hospitality industry.'
  },
  {
    id: 'spa',
    image: 'https://storage.googleapis.com/a1aa/image/XYaz6EtYzfTUXigL9qdJ0TW2BhDS7v0mUOJHKbfSQRFQeDNnA.jpg',
    title: 'Luxury Spa',
    description: 'Immerse yourself in tranquility at our world-class spa. From traditional treatments to cutting-edge therapies, our expert therapists offer a range of services to rejuvenate your body and soul. Enjoy our state-of-the-art facilities including a Turkish hammam, hydrotherapy pool, and meditation gardens.'
  },
  {
    id: 'rooms',
    image: 'https://storage.googleapis.com/a1aa/image/QZOgbeVf77m7mU27qXCQ87TcC9SibBizYTBJaDw66zESeDNnA.jpg',
    title: 'Rooms & Suites',
    description: 'Choose from our selection of luxurious rooms and suites, each uniquely designed to provide the utmost comfort and elegance. From cozy deluxe rooms to expansive presidential suites, every space is equipped with premium amenities and offers breathtaking views of the city or our manicured gardens.'
  },
  {
    id: 'events',
    image: 'https://storage.googleapis.com/a1aa/image/UaYCo9QvEY7eQKcBaqb2S4DudfZa3fdXAoOJ4a5lhjBZCENnA.jpg',
    title: 'Events & Weddings',
    description: 'Make your special day unforgettable at the Golden Palace. Our grand ballroom and versatile event spaces can accommodate intimate gatherings or lavish galas. Our experienced event planners will ensure every detail is perfect, from exquisite catering to stunning decor.'
  },
  {
    id: 'dining',
    image: 'https://storage.googleapis.com/a1aa/image/9VKtsPwzQVqHJlfVIJ3mJrOVx4EPDyoXDsr0Y6D1BTKlARzJA.jpg',
    title: 'Fine Dining',
    description: 'Embark on a culinary journey at our award-winning restaurants. From our Michelin-starred flagship to casual bistros, we offer a diverse range of dining experiences. Our sommeliers have curated an extensive wine list to complement every dish perfectly.'
  }
]);

const services = ref([
  { icon: 'fas fa-concierge-bell', title: '24/7 Concierge', description: 'Our attentive staff is always ready to assist you with any request.' },
  { icon: 'fas fa-wifi', title: 'High-Speed Wi-Fi', description: 'Stay connected with complimentary high-speed internet throughout the hotel.' },
  { icon: 'fas fa-car', title: 'Valet Parking', description: 'Enjoy the convenience of our professional valet parking service.' },
  { icon: 'fas fa-dumbbell', title: 'Fitness Center', description: 'Keep up with your fitness routine in our state-of-the-art gym.' },
  { icon: 'fas fa-swimming-pool', title: 'Rooftop Pool', description: 'Relax and unwind in our scenic rooftop pool with panoramic city views.' },
  { icon: 'fas fa-spa', title: 'Luxury Spa', description: 'Indulge in a variety of treatments at our world-class spa.' }
]);

const testimonials = ref([
  { name: 'John D.', text: 'An unforgettable experience! The attention to detail and service is unparalleled.' },
  { name: 'Sarah M.', text: 'The Golden Palace made our wedding day absolutely perfect. We couldn\'t have asked for more.' },
  { name: 'Robert L.', text: 'As a frequent traveler, I can say this is truly one of the best hotels I\'ve ever stayed in.' }
]);

const booking = ref({
  checkIn: '',
  checkOut: '',
  guests: ''
});

const changeSlide = (direction) => {
  currentSlide.value = (currentSlide.value + direction + slides.value.length) % slides.value.length;
};

const autoSlide = () => {
  changeSlide(1);
};

const submitBooking = () => {
  console.log('Booking submitted:', booking.value);
  // Here you would typically send this data to a server
  alert('Thank you for your booking request. We will contact you shortly to confirm your reservation.');
};

onMounted(() => {
  setInterval(autoSlide, 5000); // Change slide every 5 seconds

  nextTick(() => {
    gsap.from('.carousel-image', { opacity: 0, duration: 1, stagger: 0.5 });

    sectionRefs.value.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top bottom-=100',
            end: 'bottom top+=100',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    gsap.from('.service-item', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.services',
        start: 'top bottom-=100',
      },
    });

    gsap.from('.testimonial', {
      opacity: 0,
      x: -50,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.testimonials',
        start: 'top bottom-=100',
      },
    });
  });
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@300;400;700&display=swap');

body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background: radial-gradient(circle at top, #333, #000);
  color: #333;
  animation: pageFadeIn 1.5s ease-in-out forwards;
}

@keyframes pageFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  z-index: 1000;
  transition: background-color 0.3s ease;
}

.navbar:hover {
  background-color: rgba(0, 0, 0, 0.9);
}

.logo {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: gold;
}

.nav-links {
  display: flex;
  list-style: none;
}

.nav-links li {
  margin-left: 1.5rem;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: gold;
}

.header {
  position: relative;
  text-align: center;
  color: white;
  padding-top: 60px; /* To account for fixed navbar */
}

.carousel {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.carousel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;
}

.carousel:hover img {
  transform: scale(1.1);
}

.carousel .text {
  position: absolute;
  bottom: 20%;
  left: 10%;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 215, 0, 0.3);
  padding: 2rem;
  border-radius: 10px;
  text-align: left;
  width: 40%;
  max-width: 500px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  animation: textSlideIn 1s ease-in-out forwards;
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
  font-size: 2.5rem;
  margin: 0 0 1rem;
  color: gold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.carousel .text p {
  font-size: 1.1rem;
  color: #fff;
  line-height: 1.6;
}

.carousel .prev, .carousel .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.4s ease;
  border-radius: 50%;
}

.carousel .prev:hover, .carousel .next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.carousel .prev { left: 20px; }
.carousel .next { right: 20px; }

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  background-color: #f9f9f9;
}

.content .section {
  width: 100%;
  max-width: 1200px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 4rem;
  display: flex;
  flex-direction: row;
  height: auto;
  min-height: 400px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
}

.content .section.reverse {
  flex-direction: row-reverse;
}

.content .section:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.content .section img {
  width: 50%;
  object-fit: cover;
}

.content .section .text {
  padding: 3rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.content .section .text h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  margin: 0 0 1.5rem 0;
  color: #333;
  position: relative;
}

.content .section .text h2::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 50px;
  height: 3px;
  background-color: gold;
}

.content .section .text p {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.content .section .text .button {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  color: #333;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  align-self: flex-start;
}

.content .section .button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.7s;
}

.content .section .button:hover::before {
  left: 100%;
}

.content .section .button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.services {
  background-color: #f0f0f0;
  padding: 4rem 2rem;
  text-align: center;
}

.services h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.service-item {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.service-item i {
  font-size: 2.5rem;
  color: gold;
  margin-bottom: 1rem;
}

.service-item h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.service-item p {
  font-size: 0.9rem;
  color: #666;
}

.testimonials {
  background-color: #fff;
  padding: 4rem 2rem;
  text-align: center;
}

.testimonials h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
}

.testimonial-carousel {
  display: flex;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.testimonial {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 300px;
}

.testimonial p {
  font-style: italic;
  color: #666;
  margin-bottom: 1rem;
}

.testimonial h4 {
  color: #333;
  font-weight: bold;
}

.booking-section {
  background-color: #f0f0f0;
  padding: 4rem 2rem;
  text-align: center;
}

.booking-section h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
}

.booking-form {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.booking-form input,
.booking-form select,
.booking-form button {
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.booking-form button {
  background-color: gold;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.booking-form button:hover {
  background-color: #FFD700;
}

.footer {
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 4rem 2rem;
  position: relative;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
}

.footer p,
.footer .icons {
  position: relative;
  z-index: 1;
}

.footer p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.footer .icons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.footer .icons a {
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease, transform 0.3s ease;
}

.footer .icons a:hover {
  color: gold;
  transform: translateY(-5px);
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    padding: 1rem;
  }

  .nav-links {
    margin-top: 1rem;
  }

  .carousel .text {
    width: 80%;
    left: 10%;
  }

  .content .section {
    flex-direction: column;
    height: auto;
  }

  .content .section.reverse {
    flex-direction: column;
  }

  .content .section img,
  .content .section .text {
    width: 100%;
  }

  .testimonial-carousel {
    flex-direction: column;
    align-items: center;
  }
}

</style>