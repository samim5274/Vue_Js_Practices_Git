<template>
  <div class="app">

    <div>
      <product-card 
      :product="product" 
      v-for="product in products" 
      :key="product.name" 
      @buy-noe-button-clicked="buyNow"
      @add-to-cart-clicked="addCart" 
      @toggle-favourite="handleToggle">
    </product-card>
    </div>
<hr>
    <div>

      <the-card cartTitle="About Me">
        <template #default>
          <p>Hi, I'm Shamim ipsum dolor sit amet consectetur adipisicing elit. Vel, corporis!</p>
        </template>
        <template #footer>
          <a href="https://shamim.deegau.com">Shamim Hossain</a>
        </template>        
      </the-card>

      <the-card cartTitle="Apple iPhone 12 pro">
        <template #default>
          <img src="https://www.applegadgetsbd.com/_next/image?url=https%3A%2F%2Fadminapi.applegadgetsbd.com%2Fstorage%2Fmedia%2Fmedium%2FiPhone-16-Pro-Max---16-Pro-Black-Titanium-2734.jpg&w=640&q=100" alt="Image not found">
          <p>1 Year Official Warranty Support for Australia , Dubai &  Singapore Variant  Only  </p>
        </template>
        <template #footer>
          <button>Buy Now</button>
          <button>Add Cart</button>
        </template>
      </the-card>

      <the-card cartTitle="Services">
        <template #default>
          <ul>
            <li>Web developemt</li>
            <li>Software Engineering</li>
            <li>Mobaile App Development</li>
          </ul>
        </template>
      </the-card>

      <the-card cartTitle="Cart Title"></the-card>
    </div>





    <header>{{ msg }}</header>
    <contact-details v-for="contact in contacts" :key="contact.name"
    :name="contact.name" 
    :websiteAddress="contact.wehsite" 
    :address="contact.address" 
    :phone="contact.phone"></contact-details>

    <header>{{ msg }}</header>

    
  </div>
</template>

<script>
import TheCard from './TheCard.vue';
import ProductCard from './ProductCard.vue';

  export default {
    data(){
        return{
          msg: "Welcome to Vue Project",
          products: [
            {
              name: "Apple iPhone 12 pro",
              thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcdCm8navl6W6lZ8Dtp4NEEc-XbuCFm-tYww&s",
              price: "$1200",
              addToFavourite: true
            },
            {
              name: "Galaxy S24 Ultra 5G",
              thumbnail: "https://imgs.search.brave.com/OJPNeiVl3XYUBtvBFP8tKIcvAWHjD2YmdJmLmND1Qoc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mZG4u/Z3NtYXJlbmEuY29t/L2ltZ3Jvb3QvcmV2/aWV3cy8yNC9zYW1z/dW5nLWdhbGF4eS1z/MjQtdWx0cmEvbGlm/ZXN0eWxlLy0xMDI0/dzIvZ3NtYXJlbmFf/MDI4LmpwZw",
              price: "৳94500",
              addToFavourite: false
            },
            {
              name: "Oppo K13 Turbo",
              thumbnail: "https://imgs.search.brave.com/pDapt_wGG-TFzIzondZqZYbY4V6bT1_4jBYMFuFVkOI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/bWVkaWEuc2ZvcnVt/LnZuL3N0b3JhZ2Uv/YXBwL21lZGlhL3Ro/YW5oZGF0LzIwMjUv/Y2FuLWNhbmgtb3Bw/by1rMTMtdHVyYm8t/cHJvL2Nhbi1jYW5o/LW9wcG8tazEzLXR1/cmJvLXByby0xNy5q/cGc",
              price: "$42000",
              addToFavourite: true
            },
            {
              name: "Acer Super ZX Pro",
              thumbnail: "https://imgs.search.brave.com/WZbiJfEgs-imCtzfde8qKmPiR9poy1PSfXcn-3dOKV0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubXNwaW1hZ2Vz/LmluL2dlYXIvd3At/Y29udGVudC91cGxv/YWRzLzIwMjUvMDQv/QWNlci1TdXBlci1a/WC1Qcm8ucG5n",
              price: "$2500",
              addToFavourite: false
            },
          ],
            contacts:[
              {
                name: "Shamim Hossain",
                wehsite: "https://shamim.deegau.com",
                address: "Dhaka, Bangladesh",
                phone: "017621652548"
              },
              {
                name: "Biswajit",
                wehsite: "https://biswajit.com",
                address: "Dhaka, Bangladesh",
                phone: "017621654548"
              },
              {
                name: "Sazzad Hossain",
                wehsite: "https://sazzad.bd.com",
                address: "Dhaka, Bangladesh",
                phone: "017621951548"
              },
          ],
        };
    },

    methods:{
      buyNow(product){
        console.log(product);
      },
      addCart(product){
        console.log(product);
      },
      handleToggle(product){
        product.addToFavourite = !product.addToFavourite;
      }
    },

    components: {
          TheCard,
          ProductCard
        },
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: sans-serif;
    line-height: 1.8;
    text-align: justify;
  }

  header{
    background: #37008f;
    color:aqua;
    font-size: 1.9rem;
    padding: 1.9rem;
  }

  ul{
    margin-left: 2rem;
  }

  header h3{
    text-align: center;
  }
</style>
