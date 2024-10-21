<template>
  <div class="hotel-rooms-container">
    <div class="sidebar">
      <h1 class="main-title">HOTEL ROOMS</h1>
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
              <span class="price">${{ room.price }}</span>
            </div>
          </div>
          <button class="details-button" @click="openModal(room)">Ver detalles</button>
        </div>
      </div>
    </div>
    
 
    <div v-if="selectedRoom" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="closeModal">&times;</button>
        <img :src="selectedRoom.image" :alt="selectedRoom.name" class="modal-image" />
        <h2>{{ selectedRoom.name }}</h2>
        <p class="modal-description">{{ selectedRoom.description }}</p>
        <div class="modal-details">
          <span class="modal-price">${{ selectedRoom.price }} / noche</span>
          <ul class="room-features">
            <li>Wi-Fi gratuito</li>
            <li>Aire acondicionado</li>
            <li>Minibar</li>
            <li>TV de pantalla plana</li>
          </ul>
        </div>
        <button class="book-now-button">Reservar ahora</button>
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
  { name: "SINGLE ROOM", price: "220", image: "https://tse1.mm.bing.net/th?id=OIG4.GYVLx9Ugn_roJfWvMZA5&pid=ImgGn", description: "Cozy room with all essential amenities" },
  { name: "FAMILY ROOM", price: "226", image: "https://tse1.mm.bing.net/th?id=OIG1.5oLpGy4YYiXeYesQbtJX&pid=ImgGn", description: "Perfect for families seeking comfort" },
  { name: "FAMILY ROOM", price: "226", image: "https://tse4.mm.bing.net/th?id=OIG3.tKaKxmhyayqLVmIrrjyl&pid=ImgGn", description: "Ideal space for family vacations" },
  { name: "FAMILY ROOM", price: "226", image: "https://tse3.mm.bing.net/th?id=OIG2.hftpH4duE.XAqv.RaPVP&pid=ImgGn", description: "Roomy and comfortable for families" },
  { name: "DELUXE SUITE", price: "226", image: "https://tse3.mm.bing.net/th?id=OIG3.lEmLCm.YqvySbAZRMY85&pid=ImgGn", description: "Exclusive suite with premium features" },
  { name: "JUNGLE SUITE", price: "226", image: "https://tse1.mm.bing.net/th?id=OIG3.VcY1Vyojlh8CikfODCOu&pid=ImgGn", description: "Unique themed suite for adventure lovers" },
]);

const selectedRoom = ref(null);

const openModal = (room) => {
  selectedRoom.value = room;
};

const closeModal = () => {
  selectedRoom.value = null;
};
</script>

<style scoped>
body {
  background: linear-gradient(to bottom, #d4c19c, #f2e8d5);
  font-family: 'Arial', sans-serif;
  
}

.hotel-rooms-container {
  display: flex;
  gap:20px;
  background: linear-gradient(135deg, #e6d7b9 0%, #d9c8a3 50%, #c7b28e 100%);
  padding: 40px;
  font-family: 'Times New Roman', serif;
}

.sidebar {
  border-radius: 20px;
    height: 600px;
    width: 300px;
    margin-left: -21px;
    padding: 20px;
    border: solid 4px black;
    padding-right: 40px;
}

.curtain {
  background: linear-gradient(to bottom, #f0e6d2, #d9c8a3);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 
    0 5px 15px rgba(0,0,0,0.1),
    inset 0 -10px 20px -10px rgba(0,0,0,0.2);
  position: relative;
  overflow: hidden;
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
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
  height: 250px;
  object-fit: cover;
}

.room-info {
  padding: 15px;
  text-align: center;
  background-color: #fff9e6;
}

.room-info h3 {
  font-size: 1.1rem;
  margin: 0 0 10px;
  color: #8b6d3f;
  font-weight: bold;
}

.room-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
}

.room-description {
  font-size: 0.8rem;
  color: #8b6d3f;
  margin-bottom: 10px;
  text-align: center;
}

.price-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.key-icons {
  font-size: 0.8rem;
  color: #daa520;
  margin-bottom: 5px;
}

.price {
  font-size: 1.4rem;
  color: #daa520;
  font-weight: bold;
}

.details-button {
  background-color: #daa520;
  color: white;
  border: none;
  padding: 8px 15px;
  font-size: 0.9rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.details-button:hover {
  background-color: #b8860b;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: #fff9e6;
  padding: 30px;
  border-radius: 15px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.close-button {
  position: absolute;
    top: -8px;
    right: 1px;
    font-size: 34px;
    background: none;
    border: none;
    cursor: pointer;
    color: #8b6d3f;
}

.modal-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
}

.modal-content h2 {
  color: #8b6d3f;
  font-size: 1.8rem;
  margin-bottom: 15px;
}

.modal-description {
  color: #8b6d3f;
  font-size: 1rem;
  margin-bottom: 20px;
  line-height: 1.6;
}

.modal-details {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.modal-price {
  font-size: 1.4rem;
  color: #daa520;
  font-weight: bold;
}

.room-features {
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: right;
}

.room-features li {
  color: #8b6d3f;
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.book-now-button {
  background-color: #daa520;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
}

.book-now-button:hover {
  background-color: #b8860b;
}

@media screen and (max-width: 768px) {
  .modal-content {
    padding: 20px;
  }

  .modal-content h2 {
    font-size: 1.6rem;
  }

  .modal-description {
    font-size: 0.9rem;
  }

  .modal-details {  
    flex-direction: column;
    align-items: flex-start;
  }
  body{
    overflow-x: hidden;
  }
  .hotel-rooms-container{
    flex-direction: column;
    align-items: center;
  }
  .sidebar{
    width: 100%;
    height: auto;
    margin-bottom: 20px;
   justify-content: center;
   align-items: center;
   align-content: center;
    font-size:large;
  }
  .room-cards{
    width: 100%;
  }
  .room-card{
    width: 100%;
  }
  
}
</style>