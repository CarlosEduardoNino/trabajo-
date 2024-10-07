
<template>
  <div class="hotel-rooms-container">
    <div class="sidebar">
      <h1 class="main-title">HOTEL ROOMS</h1>
      <h2 class="subtitle">HOTEL ROOMS</h2>
      <h3 class="subsubtitle">NOW</h3>
      <div class="description">
        <p>Experience luxury and comfort</p>
        <p>in our expertly designed rooms</p>
        <p>Unforgettable stays await you</p>
        <p>Book your perfect room today</p>
      </div>
    </div>
    <div class="room-cards">
      <div class="room-card" v-for="(room, index) in rooms" :key="index">
        <img :src="room.image" :alt="room.name" class="room-image" />
        <div class="room-info">
          <h3>{{ room.name }}</h3>
          <div class="room-details">
            <span class="room-description">{{ room.description }}</span>
            <div class="price-container">
              <span class="key-icons">&#x1F511;&#x1F511;&#x1F511;</span>
              <span class="price">{{ room.price }}</span>
            </div>
          </div>
          <button class="details-button">Ver detalles</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const rooms = ref([
  { name: "DELUXE SUITE", price: "220", image: "https://tse3.mm.bing.net/th?id=OIG4.bl0grvcs6F.lKm8ztc_d&pid=ImgGn", description: "Elegant and spacious suite with modern amenities" },
  { name: "DELUXE SUITE", price: "120", image: "https://tse3.mm.bing.net/th?id=OIG2.E16Kddi5isOlEiZsBbVn&pid=ImgGn", description: "Luxurious suite with stunning views" },
  { name: "FAMILY ROOM", price: "220", image: "https://tse4.mm.bing.net/th?id=OIG4.YmNqDKMpcqnVRb06EFhx&pid=ImgGn", description: "Comfortable room for the whole family" },
  { name: "FAMILY ROOM", price: "220", image: "https://tse2.mm.bing.net/th?id=OIG4.7DTqamFO_d8MQm.EvKWz&pid=ImgGn", description: "Spacious accommodation for family stays" },
  { name: "SAMGLY ROOM", price: "220", image: "https://tse1.mm.bing.net/th?id=OIG4.GYVLx9Ugn_roJfWvMZA5&pid=ImgGn", description: "Cozy room with all essential amenities" },
  { name: "FAMILY ROOM", price: "226", image: "https://tse1.mm.bing.net/th?id=OIG1.5oLpGy4YYiXeYesQbtJX&pid=ImgGn", description: "Perfect for families seeking comfort" },
  { name: "FAMILY ROOM", price: "226", image: "https://tse4.mm.bing.net/th?id=OIG3.tKaKxmhyayqLVmIrrjyl&pid=ImgGn", description: "Ideal space for family vacations" },
  { name: "FAMILY ROOM", price: "226", image: "https://tse3.mm.bing.net/th?id=OIG2.hftpH4duE.XAqv.RaPVP&pid=ImgGn", description: "Roomy and comfortable for families" },
  { name: "AUUZE SUITE", price: "226", image: "https://tse3.mm.bing.net/th?id=OIG3.lEmLCm.YqvySbAZRMY85&pid=ImgGn", description: "Exclusive suite with premium features" },
  { name: "JAUGLE SUITE", price: "226", image: "https://tse1.mm.bing.net/th?id=OIG3.VcY1Vyojlh8CikfODCOu&pid=ImgGn", description: "Unique themed suite for adventure lovers" },
  { name: "SINGLE ROUM", price: "230", image: "https://tse2.mm.bing.net/th?id=OIG3.zlVPt.SLWFnug0qlYhBM&pid=ImgGn", description: "Compact and stylish room for solo travelers" },
  { name: "KANDENTAL SUITE", price: "226", image: "https://tse2.mm.bing.net/th?id=OIG4.My.SLC_3yf.0VmGJWx_S&pid=ImgGn", description: "Elegant suite with a touch of luxury" },
  { name: "PRESIDENTAL SUITE", price: "226", image: "https://tse2.mm.bing.net/th?id=OIG1.49HAG68oK2TGqA3HNEi0&pid=ImgGn", description: "Ultimate luxury for discerning guests" },
  { name: "PREMIDENTAL SUITE", price: "220", image: "https://tse2.mm.bing.net/th?id=OIG3.E057Jzt8SZy359v70Bmk&pid=ImgGn", description: "Premium suite with exclusive amenities" },
  { name: "PRESIDENTAL SUITE", price: "220", image: "https://tse1.mm.bing.net/th?id=OIG3.MoMUrPyU4Wx5mJb1jJ13&pid=ImgGn", description: "Top-tier suite for a memorable stay" },
]);
</script>

<style scoped>


.hotel-rooms-container {
  display: flex;
  background: linear-gradient(135deg, #e6d7b9 0%, #d9c8a3 50%, #c7b28e 100%);
  padding: 40px;
  font-family: 'Times New Roman', serif;
}



.sidebar {
  width: 250px;
  padding-right: 40px;
}

.main-title {
  color: #8b6d3f;
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-weight: normal;
}

.subtitle {
  color: #b9a889;
  font-size: 1.8rem;
  margin-bottom: 5px;
  font-weight: normal;
}

.subsubtitle {
  color: #b9a889;
  font-size: 1.2rem;
  margin-bottom: 20px;
  font-weight: normal;
}

.description {
  color: #8b6d3f;
  font-size: 0.9rem;
  line-height: 1.4;
}

.room-cards {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  flex-grow: 1;
}

.room-card {
  background-color: #f9f4e8;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.room-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(218, 165, 32, 0.2), 0 10px 10px rgba(218, 165, 32, 0.15);
}
 

.room-image {
  width: 100%;
  height: 120px;
  object-fit: cover;
}

.room-info {
  padding: 10px;
  text-align: center;
  background-color: #fff9e6; /* Fondo ligeramente dorado */
}

.room-info h3 {
  font-size: 0.9rem;
  margin: 0 0 5px;
  color: #8b6d3f;
  font-weight: normal;
}

.room-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}

.room-description {
  font-size: 0.7rem;
  color: #8b6d3f;
  text-align: left;
  flex: 1;
  margin-right: 10px;
}

.price-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.key-icons {
  font-size: 0.6rem;
  color: #daa520; /* Color dorado */
  margin-bottom: 2px;
}

.price {
  font-size: 1.2rem;
  color: #daa520; /* Color dorado */
  font-weight: bold;
}

.details-button {
  background-color: #daa520; /* Botón dorad
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 0.8rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.details-button:hover {
  background-color: #b8860b; /* Dorado más oscuro al hacer hover */
}
</style>
