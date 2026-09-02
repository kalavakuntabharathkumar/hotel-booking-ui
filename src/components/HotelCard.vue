<script setup lang="ts">
defineProps<{name:string;location:string;price:string;rating:number}>();
</script>
<template><article class="hotel"><div class="image">HOTEL</div><div class="hotel-body"><span class="muted">{{ location }}</span><h2>{{ name }}</h2><div class="row"><span>★ {{ rating }}</span><strong>{{ price }}/night</strong></div><button>Reserve</button></div></article></template>