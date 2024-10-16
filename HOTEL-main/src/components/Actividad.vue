<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="(activity, index) in activities" :key="index">
        <div :class="['card', `card-${index + 1}`]" v-motion-slide-visible>
          <img
            :src="activity.image"
            :alt="activity.altText"
            class="card-img-top"
            :style="{ width: activity.imageWidth, height: activity.imageHeight }"
          />
          <div class="card-body text-center">
            <h5 :class="['card-title', `title-${index + 1}`]">{{ activity.title }}</h5>
            <p class="card-text">{{ activity.type }}</p>
            <p :class="['card-description', `description-${index + 1}`]">{{ activity.description }}</p>
            <div class="icon-bar">
              <i :class="['fas', activity.icon1]"></i>
              <i :class="['fas', activity.icon2]"></i>
              <i :class="['fas', activity.icon3]"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MotionPlugin } from '@vueuse/motion'

const activities = ref([
  {
    title: 'Kayaking Adventure',
    type: 'Water Sport',
    description: 'Embark on a thrilling kayaking journey through rapids and calm waters.',
    image: '/api/placeholder/600/400',
    altText: 'Person kayaking in white water rapids',
    imageWidth: '100%',
    imageHeight: '250px',
    icon1: 'fa-water',
    icon2: 'fa-life-ring',
    icon3: 'fa-map-marked-alt'
  },
  {
    title: 'Mountain Hiking',
    type: 'Outdoor Activity',
    description: 'Explore breathtaking trails and reach new heights in stunning mountain landscapes.',
    image: '/api/placeholder/600/400',
    altText: 'Hiker on a mountain trail with a scenic backdrop',
    imageWidth: '100%',
    imageHeight: '300px',
    icon1: 'fa-hiking',
    icon2: 'fa-mountain',
    icon3: 'fa-compass'
  },
  {
    title: 'Zen Yoga Retreat',
    type: 'Wellness',
    description: 'Find inner peace and improve flexibility in our tranquil yoga sessions.',
    image: '/api/placeholder/600/400',
    altText: 'Person doing yoga pose in a serene natural setting',
    imageWidth: '100%',
    imageHeight: '280px',
    icon1: 'fa-om',
    icon2: 'fa-spa',
    icon3: 'fa-heart'
  },
  {
    title: 'Gourmet Cooking Class',
    type: 'Culinary Experience',
    description: 'Learn to create exquisite dishes under the guidance of world-class chefs.',
    image: '/api/placeholder/600/400',
    altText: 'Chef demonstrating cooking techniques to a group',
    imageWidth: '100%',
    imageHeight: '220px',
    icon1: 'fa-utensils',
    icon2: 'fa-hat-chef',
    icon3: 'fa-wine-glass-alt'
  },
  {
    title: 'Wildlife Photography',
    type: 'Creative Workshop',
    description: 'Capture the beauty of nature and wildlife through your lens.',
    image: '/api/placeholder/600/400',
    altText: 'Photographer taking picture of a wild animal',
    imageWidth: '100%',
    imageHeight: '260px',
    icon1: 'fa-camera',
    icon2: 'fa-paw',
    icon3: 'fa-tree'
  },
  {
    title: 'Stargazing Night',
    type: 'Astronomy Event',
    description: 'Explore the wonders of the night sky with expert astronomers.',
    image: '/api/placeholder/600/400',
    altText: 'Silhouette of people looking at a starry sky',
    imageWidth: '100%',
    imageHeight: '240px',
    icon1: 'fa-star',
    icon2: 'fa-moon',
    icon3: 'fa-telescope'
  },
  {
    title: 'Surf Camp',
    type: 'Water Sport',
    description: 'Ride the waves and learn surfing techniques from professional instructors.',
    image: '/api/placeholder/600/400',
    altText: 'Surfer riding a big wave',
    imageWidth: '100%',
    imageHeight: '270px',
    icon1: 'fa-water',
    icon2: 'fa-tint',
    icon3: 'fa-sun'
  },
  {
    title: 'Rock Climbing Adventure',
    type: 'Extreme Sport',
    description: 'Challenge yourself on natural rock formations with expert guidance and safety equipment.',
    image: '/api/placeholder/600/400',
    altText: 'Rock climber scaling a cliff face',
    imageWidth: '100%',
    imageHeight: '290px',
    icon1: 'fa-mountain',
    icon2: 'fa-hand-rock',
    icon3: 'fa-harness'
  },
  {
    title: 'Pottery Workshop',
    type: 'Arts and Crafts',
    description: 'Discover the art of ceramics and create your own unique pottery pieces.',
    image: '/api/placeholder/600/400',
    altText: 'Hands shaping clay on a pottery wheel',
    imageWidth: '100%',
    imageHeight: '230px',
    icon1: 'fa-paint-brush',
    icon2: 'fa-palette',
    icon3: 'fa-magic'
  }
])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

body {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  font-family: 'Poppins', sans-serif;
}

.card {
  border: none;
  border-radius: 15px;
  margin: 20px 10px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}

.card:hover .card-img-top {
  transform: scale(1.05);
}

.card-body {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
}

.card-type {
  font-size: 1rem;
  color: #6c757d;
  font-weight: 500;
  margin-bottom: 1rem;
}

.card-description {
  font-size: 0.9rem;
  color: #495057;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.icon-bar {
  display: flex;
  justify-content: center;
  gap: 1rem;
  color: #6c757d;
  font-size: 1.2rem;
  margin-top: 1rem;
}

.icon-bar i {
  transition: color 0.3s ease-in-out;
}

.icon-bar i:hover {
  color: #007bff;
}

/* Unique styles for each card */
.card-1 { background-color: #e8f5e9; }
.card-2 { background-color: #fff3e0; }
.card-3 { background-color: #e1f5fe; }
.card-4 { background-color: #fce4ec; }
.card-5 { background-color: #f3e5f5; }
.card-6 { background-color: #e8eaf6; }
.card-7 { background-color: #f1f8e9; }
.card-8 { background-color: #fff8e1; }
.card-9 { background-color: #e0f2f1; }

.title-1, .title-2, .title-3, .title-4, .title-5, .title-6, .title-7, .title-8, .title-9 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  position: relative;

}

.description-1, .description-2, .description-3, .description-4, .description-5, .description-6, .description-7, .description-8, .description-9 {
  font-size: 0.9rem;
  line-height: 1.6;
}
</style>