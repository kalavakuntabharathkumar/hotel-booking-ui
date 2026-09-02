<script setup lang="ts">
const props=defineProps<{modelValue:number}>(); const emit=defineEmits<{(e:"update:modelValue",v:number):void}>();
</script>
<template><label class="field"><span>Guests</span><select :value="props.modelValue" @change="emit('update:modelValue',Number(($event.target as HTMLSelectElement).value))"><option :value="1">1 guest</option><option :value="2">2 guests</option><option :value="3">3 guests</option><option :value="4">4 guests</option></select></label></template>