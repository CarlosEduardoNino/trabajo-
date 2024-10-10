<template>

  <body>
    <div class="container">
      <div class="grid">
        <div class="cards" style="grid-row: span 2;">
          <img alt="Hotel exterior" src="https://storage.googleapis.com/a1aa/image/Mk30yAQyTVLDFNGEjlz81I9BJowZJJZv9QywGgQPHsKNCT5E.jpg" />
        </div>
        <div class="cards">
          <h2>Grand Hotel</h2>
          <p>Dirección: 123 Main St, Ciudad, País</p>
          <p>Teléfono: +123 456 7890</p>
          <p>Email: info@grandhotel.com</p>
        </div>
        <div class="cards" style="grid-row: span 2;">
          <img alt="Hotel interior" src="https://storage.googleapis.com/a1aa/image/OrOqyI2PrfV1UShq9wyeZk4f7sW1MsWv9HiYRHXZaq4nRYKnA.jpg" />
        </div>
        <div class="cards">
          <h2>Ubicación</h2>
          <div class="map">
            <iframe 
  width="100%" 
  height="200" 
  frameborder="0" 
  style="border:0" 
  src="https://www.google.com/maps/embed/v1/view?key=TU_API_KEY&center=23.4162,25.6628&zoom=6" 
  allowfullscreen>
</iframe>

          </div>
        </div>
        <div class="cards">
          <h2>Contáctanos</h2>
          <form>
            <div class="form-group">
              <label for="name">Nombre:</label>
              <input id="name" name="name" required="" type="text" />
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input id="email" name="email" required="" type="email" />
            </div>
            <div class="form-group">
              <label for="message">Mensaje:</label>
              <textarea id="message" name="message" required="" rows="4"></textarea>
            </div>
            <div class="form-group">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
        <div class="cards">
          <h2>Síguenos</h2>
          <div class="social-icons">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-whatsapp"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <!-- Botones de pin -->
      <button class="pin-button" style="top: 10px; left: 10px;"></button>
      <button class="pin-button" style="top: 10px; right: 10px;"></button>
      <button class="pin-button" style="bottom: 10px; left: 10px;"></button>
      <button class="pin-button" style="bottom: 10px; right: 10px;"></button>
      <button class="pin-button" style="top: 20%; left: 20%;"></button>
      <button class="pin-button" style="top: 20%; right: 20%;"></button>
      <button class="pin-button" style="bottom: 20%; left: 20%;"></button>
      <button class="pin-button" style="bottom: 20%; right: 20%;"></button>
    </div>
  </body>


  </template>
  
  <style>
   body {
            font-family: 'Playfair Display', serif;
            background: linear-gradient(to bottom, #d4c19c, #f2e8d5);
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
            position: relative;
        }
        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        .cards {
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
            height: 100%;
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
            color: #d4af37;
        }
        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #d4af37;
            border-radius: 5px;
            box-sizing: border-box;
            background-color: #f2e8d5;
            color: #3b2f2f;
        }
        .form-group button {
            background-color: #d4af37;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
        }
        .form-group button:hover {
            background-color: #b88a4a;
        }
        .cards p {
            margin: 2px 0;
        }
        .pin-button {
            background-color: #d4af37;
            border: none;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            position: absolute;
            cursor: pointer;
        }
        .pin-button::after {
            content: '';
            width: 15px;
            height: 15px;
            background-color: #b88a4a;
            border-radius: 50%;
            position: absolute;
            top: 7.5px;
            left: 7.5px;
        }
        .pin-button:hover {
            background-color: #b88a4a;
        }
        .social-icons {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            font-size: 2em;
            color: #d4af37;
        }
        .social-icons a {
            color: #d4af37;
            transition: color 0.3s ease;
        }
        .social-icons a:hover {
            color: #b88a4a;
        }
  </style>