<template>
  <div>
    <!-- Contact Details Section -->
<div class="contact-section">
  <h2>Contact Us</h2>
  <div class="contact-cards">
    <div class="contact-card">
      <h3>Address</h3>
      <p>{{ address }}</p>
    </div>
    <div class="contact-card">
      <h3>Email</h3>
      <p>{{ websiteAddress }}</p>
    </div>
    <div class="contact-card">
      <h3>Name</h3>
      <p>{{ name }}</p>
    </div>
  </div>
</div>

  </div>
</template>

<script>
export default{
    inject: ["name", "websiteAddress","address"],
    props: {
        data(){
            return{}
        }
    }
}
</script>

<style>
/* Contact Section Styles */
.contact-section {
  max-width: 900px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
  font-family: "Segoe UI", Arial, sans-serif;
}

.contact-section h2 {
  font-size: 28px;
  color: #4a148c;
  margin-bottom: 30px;
}

.contact-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.contact-card {
  background: #fff;
  padding: 20px 25px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  flex: 1 1 250px;
  min-width: 250px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.contact-card h3 {
  color: #37008f;
  margin-bottom: 12px;
  font-size: 20px;
}

.contact-card p {
  font-size: 14px;
  color: #555;
  line-height: 1.6;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0,0,0,0.15);
}

</style>