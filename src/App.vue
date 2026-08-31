<script setup lang="ts">
import { ref } from "vue";
import DatePicker from "./components/DatePicker.vue";
import FilterPanel from "./components/FilterPanel.vue";
import HotelCard from "./components/HotelCard.vue";
import Modal from "./components/Modal.vue";
const destination=ref("Hyderabad"); const guests=ref(2); const show=ref(false);
</script>
<template>
  <main>
    <header><div><p class="eyebrow">COMPONENT LIBRARY DEMO</p><h1>Hotel Booking UI</h1><p>Reusable Vue + TypeScript booking components.</p></div><button @click="show=true">View details</button></header>
    <section class="controls"><DatePicker label="Check-in"/><DatePicker label="Check-out"/><FilterPanel v-model="guests"/></section>
    <section class="cards">
      <HotelCard name="Skyline Residency" location="Banjara Hills" price="₹4,800" :rating="4.6"/>
      <HotelCard name="Lakeview Suites" location="HITEC City" price="₹5,600" :rating="4.8"/>
      <HotelCard name="Central Grand" location="Gachibowli" price="₹3,900" :rating="4.4"/>
    </section>
    <Modal v-if="show" title="Booking summary" @close="show=false">
      <p>Destination: {{ destination }}</p><p>Guests: {{ guests }}</p>
    </Modal>
  </main>
</template>