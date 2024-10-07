<template>
  <div>
    <body>
      
  
      <section class="hero">
          <div class="container">
              <div class="hero-content">
                  <h1>HOTEL</h1>
                  <h2>History</h2>
                  <p>Experience the epitome of luxury and elegance in our historic hotel. Immerse yourself in timeless beauty and unparalleled service.</p>
                  <a href="#" class="btn">Read More</a>
              </div>
          </div>
      </section>
  
      <section class="story">
          <div class="container">
              <h2>THE STORY OF HOTEL</h2>
              <p>Our hotel stands as a testament to timeless elegance and unparalleled luxury. With a rich history dating back centuries, every corner of our establishment tells a story of grandeur and sophistication. From the moment you step through our doors, you'll be transported to an era of classic refinement, complemented by modern comforts and impeccable service.</p>
              
              <div class="features">
                  <div class="feature">
                      <img src="https://storage.googleapis.com/a1aa/image/81vzFHnhq5qCHNBxKufnUPXzrhdDJX5ZQmc0p91JvQ3YuGyJA.jpg" alt="Lobby">
                      <h3>LOBBY</h3>
                  </div>
                  <div class="feature">
                      <img src="https://storage.googleapis.com/a1aa/image/Rt7N03oPxgJwBBhe4qwzbhpqRTHLo70E4hef0mfcYhTQz1QOB.jpg" alt="Rooms">
                      <h3>ROOMS</h3>
                  </div>
                  <div class="feature">
                      <img src="https://storage.googleapis.com/a1aa/image/7qyIGaogRypMPJ8m7rjmcc0LPznFW7I0y5W3erLODAHZuGyJA.jpg" alt="Restaurant">
                      <h3>RESTAURANT</h3>
                  </div>
                  <div class="feature">
                      <img src="https://storage.googleapis.com/a1aa/image/V1m57MjDbW7lM1nfDbf4gUt2sNUAU5l0VntoNR7BkBG1cNkTA.jpg" alt="Events">
                      <h3>EVENTS</h3>
                  </div>
              </div>
  
              <div class="pagination">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
          </div>
      </section>
  </body>
</div>
</template>

<script setup>
// Aquí puedes agregar lógica de JavaScript si es necesario
</script>

<style>
        :root {
            --primary-color: #c19b76;
            --secondary-color: #2c2c2c;
            --text-color: #ffffff;
            --accent-color: #e0c9a6;
        }

        body, html {
            margin: 0;
            padding: 0;
            font-family: 'Roboto', sans-serif;
            color: var(--text-color);
            background-color: var(--secondary-color);
            overflow-x: hidden;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 20px;
        }

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
        }

        .logo {
            font-family: 'Playfair Display', serif;
            font-size: 32px;
            font-weight: 700;
            color: var(--primary-color);
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        nav ul {
            display: flex;
            list-style-type: none;
        }

        nav ul li {
            margin-left: 30px;
        }

        nav ul li a {
            color: var(--text-color);
            text-decoration: none;
            text-transform: uppercase;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 1px;
            transition: color 0.3s ease;
        }

        nav ul li a:hover {
            color: var(--primary-color);
        }

        .btn {
            background-color: var(--primary-color);
            color: var(--text-color);
            padding: 12px 24px;
            text-decoration: none;
            display: inline-block;
            border-radius: 5px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: background-color 0.3s ease;
        }

        .btn:hover {
            background-color: var(--accent-color);
        }

        .hero {
            background-image: url('https://files.oaiusercontent.com/file-2no90azF5slEplJpPLJVyE4v?se=2024-10-07T00%3A30%3A02Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Df1c74ba1-8619-4765-a8eb-1b7c06eaeae1.webp&sig=XFe9dtAxwl74PHndBC9LhR/aznFs0pvEUOu/j/Ijy4k%3D');
            background-size: cover;
            background-position: center;
            height: 100vh;
            display: flex;
            align-items: center;
            position: relative;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to right, rgba(44,44,44,0.8), rgba(44,44,44,0.4));
        }

        .hero-content {
            max-width: 50%;
            position: relative;
            z-index: 1;
        }

        .hero h1 {
            font-family: 'Playfair Display', serif;
            font-size: 96px;
            margin-bottom: 20px;
            color: var(--primary-color);
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .hero h2 {
            font-family: 'Playfair Display', serif;
            font-size: 64px;
            margin-bottom: 20px;
            color: var(--text-color);
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .hero p {
            font-size: 18px;
            margin-bottom: 30px;
            line-height: 1.6;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }

        .story {
            padding: 100px 0;
            text-align: center;
            background-color: var(--secondary-color);
            position: relative;
        }

        .story::before {
            content: '';
            position: absolute;
            top: -50px;
            left: 0;
            right: 0;
            height: 100px;
            background: linear-gradient(to bottom, transparent, var(--secondary-color));
        }

        .story h2 {
            font-family: 'Playfair Display', serif;
            font-size: 48px;
            margin-bottom: 30px;
            color: var(--primary-color);
        }

        .story p {
            font-size: 18px;
            line-height: 1.8;
            max-width: 800px;
            margin: 0 auto 50px;
            color: var(--text-color);
        }

        .features {
            display: flex;
            justify-content: space-between;
            margin-top: 50px;
        }

        .feature {
            text-align: center;
            width: 22%;
        }

        .feature img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin-bottom: 20px;
            object-fit: cover;
            border: 3px solid var(--primary-color);
            box-shadow: 0 0 20px rgba(193, 155, 118, 0.3);
        }

        .feature h3 {
            font-family: 'Playfair Display', serif;
            font-size: 24px;
            margin-bottom: 10px;
            color: var(--primary-color);
        }

        .pagination {
            display: flex;
            justify-content: center;
            margin-top: 50px;
        }

        .pagination span {
            width: 12px;
            height: 12px;
            background-color: var(--primary-color);
            border-radius: 50%;
            margin: 0 8px;
            cursor: pointer;
            transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .pagination span:hover {
            transform: scale(1.2);
            background-color: var(--accent-color);
        }

        @media (max-width: 768px) {
            .hero-content {
                max-width: 90%;
            }

            .hero h1 {
                font-size: 72px;
            }

            .hero h2 {
                font-size: 48px;
            }

            .features {
                flex-wrap: wrap;
            }

            .feature {
                width: 45%;
                margin-bottom: 30px;
            }
        }
    </style>