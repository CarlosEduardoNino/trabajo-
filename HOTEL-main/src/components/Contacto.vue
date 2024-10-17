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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31807.67269331996!2d-74.11967930421207!3d4.653332867136881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99f6c9159a7f%3A0xdccc25a78db7c8de!2sHotel%20Tequendama!5e0!3m2!1ses!2sco!4v1696519684351!5m2!1ses!2sco"
                width="524" height="200" style="border:0;" allowfullscreen="" loading="lazy">
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
        <div class="cardss">
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
     
      <button class="pin-button" style="top: 10px; left: 10px;"></button>
      <button class="pin-button" style="top: 10px; right: 10px;"></button>
      <button class="pin-button" style="bottom: 10px; left: 10px;"></button>
      

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
        .cardss {
            background-color: white;
            border-radius: 15px;
            padding: 20px;
            height: 200px;
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
        @media screen and (max-width: 968px) {
            .grid {
                grid-template-columns: 1fr;
            }
            .cards {
                margin-bottom: 20px;
            } 
            .pin-button {
                width: 20px;
                height: 20px;
                top: 10px;
                left: 10px;
            }
            .pin-button::after {
                width: 10px;
                height: 10px;
                top: 5px;
                left: 5px;
            }
            .social-icons {
                font-size: 1.5em;
            }    
            body{
                background-color: #f2e8d5;
                color: #3b2f2f;
                font-family: 'Times New Roman', serif;
                font-size: 16px;
                line-height: 1.5;
                margin: 0;
                padding: 0;
            }      
        }
        @media screen and (max-width: 600px) {
            .cards {
                padding: 10px;
            }
            .pin-button {
                width: 15px;
                height: 15px;
                top: 5px;
                left: 5px;
            }
            .pin-button::after {
                width: 7.5px;
                height: 7.5px;
                top: 2.5px;
                left: 2.5px;
            }
            .social-icons {
                font-size: 1em;
            }
            body{
                background-color: #f2e8d5;
                color: #3b2f2f;
                font-family: 'Times New Roman', serif;
                font-size: 16px;
                line-height: 1.5;
                margin: 0;
                padding: 0;
            }
            .container{
                padding: 10px;
                margin: 10px;
                border-radius: 10px;
                background-color: #e0d4b3;
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
          
        }
        @media screen and (max-width: 1200px) {
            .cards {
                padding: 10px;
            }
            .pin-button {
                width: 15px;
                height: 15px;
                top: 5px;
                left: 5px;
            }
            .pin-button::after {
                width: 7.5px;
                height: 7.5px;
                top: 2.5px;
                left: 2.5px;
            }
            .social-icons {
                font-size: 1em;
            }
            body{
                background-color: #f2e8d5;
                color: #3b2f2f;
                font-family: 'Times New Roman', serif;
                font-size: 16px;
                line-height: 1.5;
                margin: 0;
                padding: 0;
            }
          
        }
  </style>