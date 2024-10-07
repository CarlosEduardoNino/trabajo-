<template>
  <body>
      <div class="container">
          <div class="grid">
              <div class="cards">
                  <img src="/api/placeholder/400/300" alt="Hotel exterior">
              </div>
              <div class="cards">
                  <h2>Grand Hotel</h2>
                  <p>Dirección: 123 Main St, Ciudad, País</p>
                  <p>Teléfono: +123 456 7890</p>
                  <p>Email: info@grandhotel.com</p>
              </div>
              <div class="cards">
                  <img src="/api/placeholder/400/300" alt="Hotel interior">
              </div>
              <div class="cards">
                  <h2>Ubicación</h2>
                  <div class="map"></div>
              </div>
              <div class="cards">
                  <h2>Contáctanos</h2>
                  <form>
                      <div class="form-group">
                          <label for="name">Nombre:</label>
                          <input type="text" id="name" name="name" required>
                      </div>
                      <div class="form-group">
                          <label for="email">Email:</label>
                          <input type="email" id="email" name="email" required>
                      </div>
                      <div class="form-group">
                          <label for="message">Mensaje:</label>
                          <textarea id="message" name="message" rows="4" required></textarea>
                      </div>
                      <div class="form-group">
                          <button type="submit">Enviar</button>
                      </div>
                  </form>
              </div>
              <div class="cards">
                  <h2>Historia</h2>
                  <p>El Grand Hotel, fundado en 1920, ha sido un ícono de lujo y hospitalidad durante más de un siglo. Con su arquitectura clásica y servicio excepcional, ha acogido a huéspedes distinguidos de todo el mundo, manteniendo su elegancia atemporal a través de las décadas.</p>
              </div>
          </div>
      </div>
  </body>
  </template>
  
  <style>
  body {
      font-family: 'Playfair Display', serif;
      background-color: #f5e3c3;
      color: #3b2f2f;
      margin: 0;
      padding: 20px;
  }
  .container {
      max-width: 1200px;
      margin: 0 auto;
      background-color: rgba(255, 255, 255, 0.9);
      border-radius: 15px;
      padding: 20px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }
  .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap:20px;
  }
  .cards {
    width:320px;
      background-color: white;
      border-radius: 15px;
      padding: 20px;
      text-align: center;
      border: 2px solid #d4af37;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .cards:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  .cards img {
      width: 100%;
      height: auto;
      border-radius: 10px;
      object-fit: cover;
  }
  .cards h2 {
      margin-top: 15px;
      font-size: 1.5em;
  }
  .map {
      width: 100%;
      height: 200px;
      background-color: #e0d4b3;
      border-radius: 10px;
  }
  .form-group {
      margin-bottom: 15px;
  }
  .form-group label {
      display: block;
      margin-bottom: 5px;
  }
  .form-group input,
  .form-group textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-sizing: border-box;
  }
  .form-group button {
      background-color: #d4af37;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
  }
  </style>
  