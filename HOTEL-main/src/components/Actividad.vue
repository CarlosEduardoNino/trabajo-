<template>
    <div class="container">
      <div class="row">
        <div class="col-md-3" v-for="(activity, index) in activities" :key="index">
          <div class="card">
            <img
              :src="activity.image"
              :alt="activity.altText"
              class="card-img-top"
              width="600"
              height="400"
            />
            <div class="card-body text-center">
              <h5 class="card-title">{{ activity.title }}</h5>
              <p class="card-text">Course</p>
              <p class="card-text">{{ activity.description }}</p>
              <div class="icon-bar">
                <i class="fas fa-heart"></i>
                <i class="fas fa-share"></i>
                <i class="fas fa-comment"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const activities = [
    {
      title: 'Kayaking',
      description: 'Cursus et nisl sit amet dolor interdum fermentum. Integer nec odio. Praesent libero.',
      image: 'https://storage.googleapis.com/a1aa/image/bRhs9ixFf33sPKckL0P0QM5PW9EjCreoC10LzDjPz2sRXLkTA.jpg',
      altText: 'Illustration of kayaking in a serene lake with mountains in the background',
    },
    {
      title: 'Hiking',
      description: 'Cursus et nisl sit amet dolor interdum fermentum. Integer nec odio. Praesent libero.',
      image: 'https://storage.googleapis.com/a1aa/image/LVBMaehpEtXZXqpLf4RJy6cOeRjIRMp9ebgxwIDgOeAH7ahcC.jpg',
      altText: 'Illustration of hiking in a mountainous area',
    },
    {
      title: 'Yoge Tetraat',
      description: 'Cursus et nisl sit amet dolor interdum fermentum. Integer nec odio. Praesent libero.',
      image: 'https://storage.googleapis.com/a1aa/image/b4n9ZL54LTohFxjU3zCX0QgdSBWHgTeoEA0WlPtMhgOtrFyJA.jpg',
      altText: 'Illustration of a person doing yoga with a hot air balloon in the background',
    },
    {
      title: 'Spa Tasting',
      description: 'Cursus et nisl sit amet dolor interdum fermentum. Integer nec odio. Praesent libero.',
      image: 'https://storage.googleapis.com/a1aa/image/VfOxxEuet2muS0zvqIJXrKxw8G8z30wLaOz7iSPtkxvcXLkTA.jpg',
      altText: 'Illustration of a serene spa setting with mountains in the background',
    },
    {
      title: 'Hocking Tessings',
      description: 'Cursus et nisl sit amet dolor interdum fermentum. Integer nec odio. Praesent libero.',
      image: 'https://storage.googleapis.com/a1aa/image/p3Hh4Q2SwPJcAF46V47rftrgG6Tm2sCKrM4OvksdArlprFyJA.jpg',
      altText: 'Illustration of a large estate with mountains in the background',
    },
    {
      title: 'Wine Tasteat',
      description: 'Cursus et nisl sit amet dolor interdum fermentum. Integer nec odio. Praesent libero.',
      image: 'https://storage.googleapis.com/a1aa/image/ZaUlRniDNAahARgwUgfRBUyeM3CszjDPnvsaXCriGenuuWInA.jpg',
      altText: 'Illustration of wine tasting with a person holding a glass of wine and a vineyard in the background',
    },
    {
      title: 'Yoohe Teasses',
      description: 'Cursus et nisl sit amet dolor interdum fermentum. Integer nec odio. Praesent libero.',
      image: 'https://storage.googleapis.com/a1aa/image/eNUbuKp4Tp1UTyuXU5yrSLRMx68YKEfywIo8CouYSKVbXLkTA.jpg',
      altText: 'Illustration of a person riding a horse with mountains in the background',
    },
    {
      title: 'Cookback Classes',
      description: 'Cursus et nisl sit amet dolor interdum fermentum. Integer nec odio. Praesent libero.',
      image: 'https://storage.googleapis.com/a1aa/image/XSrMwMVxRjobLZjQXXQwHclq04kN0SrAMSI7AUeeZ3iUXLkTA.jpg',
      altText: 'Illustration of a cooking class with a chef and students in a kitchen',
    },
    {
      title: 'Golfing',
      description: 'Cursus et nisl sit amet dolor interdum fermentum. Integer nec odio. Praesent libero.',
      image: 'https://storage.googleapis.com/a1aa/image/2nmb2gHPQmYeZ6WZPbRcQnV8bMUrcMdGhBJUs3zLIIjqrFyJA.jpg',
      altText: 'Illustration of a dartboard and golf balls',
    },
  ];
  </script>
  
  <style scoped>
  body {
    background-color: #d3bfa7;
    font-family: 'Arial', sans-serif;
  }
  
  .card {
    border: none;
    border-radius: 15px;
    margin: 10px;
    background-color: #f5f0e6;
  }
  
  .card img {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  
  .card-title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .card-text {
    font-size: 0.9rem;
    color: #6c757d;
  }
  
  .icon-bar {
    color: #6c757d;
  }
  </style>
  