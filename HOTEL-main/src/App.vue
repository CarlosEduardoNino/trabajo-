<template>
  <div class="hotel-homepage">
    <header class="header">
      <div class="logo">HOTEL</div>
      <nav class="navigation">
        <router-link to="/" class="nav-item" exact>
          <i class="fas fa-home"></i> HOME
        </router-link>
        <router-link to="/Habitaciones" class="nav-item">
          <i class="fas fa-bed"></i> ROOMS
        </router-link>
        <router-link to="/Servicios" class="nav-item">
          <i class="fas fa-concierge-bell"></i> SERVICES
        </router-link>
        <router-link to="/Contacto" class="nav-item">
          <i class="fas fa-envelope"></i> CONTACT
        </router-link>
        <router-link to="/Actividad" class="nav-item">
          <i class="fas fa-bicycle"></i> ACTIVITIES
        </router-link>
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
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

  body {
    background: linear-gradient(to bottom, #d4c19c, #f2e8d5);
    font-family: 'Playfair Display', serif;
    margin: 0;
    padding: 0;
  }
  
  .hotel-homepage {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);

    .logo {
      font-size: 36px;
      font-weight: bold;
      color: #fff;
    }

    .navigation {
      display: flex;
      gap: 30px;

      .nav-item {
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        font-size: 18px;
        transition: color 0.3s ease;
        display: flex;
        align-items: center;

        i {
          margin-right: 8px;
        }

        &.active {
          color: #d4c19c;
        }

        &:hover {
          color: #d4c19c;
        }
      }
    }
  }

  .main-content {
    padding: 40px;
    margin-top: 100px;
    background: linear-gradient(to bottom, #d4c19c, #f2e8d5);

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