<script setup lang="ts">
import { ref } from "vue";
defineProps<{label:string}>(); const date=ref("");
</script>
<template><label class="field"><span>{{ label }}</span><input v-model="date" type="date"/></label></template>