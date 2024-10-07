<template>
  <div class="hotel-homepage">
    <header class="header">
      <div class="logo">HOTEL</div>
      <nav class="navigation">
        <router-link to="/" class="nav-item" exact>HOME</router-link>
        <router-link to="/Habitaciones" class="nav-item">ROOMS</router-link>
        <router-link to="/Servicios" class="nav-item">SERVICES</router-link>
        <router-link to="/Contacto" class="nav-item">CONTACT</router-link>
        <router-link to="/Actividad" class="nav-item">ACTIVITIES</router-link>
        
      </nav>
    </header>
    
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HotelHomepage',
  // Add any necessary component logic here
}
</script>

<style lang="scss" scoped>
.hotel-homepage {
  font-family: 'Arial', sans-serif;
  color: #4a4a4a;
  background-color: #f0e6d2;
  
  .header {
    display: flex;
    
    width:100%;
    justify-content: space-between;
    align-items: center;
    padding: 30px 40px;
    background: linear-gradient(to bottom, #d4c19c, #f2e8d5);
    
    .logo {
      font-size: 24px;
      font-weight: bold;
      color: #8b7355;
    }
    
    .navigation {
      display: flex;
      gap: 20px;
      
      .nav-item {
        text-decoration: none;
        color: #4a4a4a;
        font-weight: bold;
        font-size: 16px;
        
        &.active {
          color: #8b7355;
        }
      }
    }
  }
  
  .main-content {
    padding: 40px;
    
    .hero {
      position: relative;
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      .hero-title {
        font-size: 72px;
        font-weight: bold;
        color: #fff;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      
      .hero-subtitle {
        font-size: 36px;
        color: #fff;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }
      
      .hotel-image {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url('hotel-exterior.jpg');
        background-size: cover;
        background-position: center;
        z-index: -1;
      }
    }
    
    .info-panel {
      display: flex;
      justify-content: space-around;
      margin-top: 40px;
      
      .info-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        .icon {
          font-size: 32px;
          color: #8b7355;
          margin-bottom: 10px;
        }
        
        span {
          font-size: 14px;
          font-weight: bold;
        }
      }
    }
    
    .gallery {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-top: 40px;
      
      .gallery-item {
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        
        &.large {
          grid-column: span 2;
          grid-row: span 2;
        }
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
          
          &:hover {
            transform: scale(1.05);
          }
        }
      }
    }
    
    .cta-section {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
      
      .cta-item {
        flex: 1;
        background-color: #fff;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin: 0 10px;
        
        h3 {
          font-size: 24px;
          font-weight: bold;
          color: #8b7355;
          margin-bottom: 10px;
        }
        
        p {
          font-size: 16px;
          margin-bottom: 20px;
        }
        
        .cta-button {
          background-color: #8b7355;
          color: #fff;
          border: none;
          padding: 10px 20px;
          font-size: 16px;
          font-weight: bold; 
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          
          &:hover {
            background-color: #6d5a43;
          }
        }
      }
    }
  }
}

// Additional styles for icons (you may need to use a proper icon library)
.icon {
  &::before {
    content: '';
    display: inline-block;
    width: 32px;
    height: 32px;
    background-size: contain;
    background-repeat: no-repeat;
  }
  
  &-wifi::before {
    background-image: url('wifi-icon.svg');
  }
  
  &-restaurant::before {
    background-image: url('restaurant-icon.svg');
  }
  
  &-spa::before {
    background-image: url('spa-icon.svg');
  }
  
  &-parking::before {
    background-image: url('parking-icon.svg');
  }
}
</style>