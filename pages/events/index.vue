<script setup>
    const { sayHello } = useUtils();
    sayHello();

    const { x, y } = useMouse()
</script>

<!-- <script setup lang="ts">
    const { $sayHellox } = useNuxtApp();
    $sayHellox("irfan")
</script> -->

<template>
    <!-- <img src="~/assets/one.jpg" alt="" srcset=""> -->
    <!-- <img src="@/assets/one.jpg" alt="" srcset=""> -->
    <IconEmot />
    <img src="1.jpg" alt="" srcset="">
    <div>Event Page</div>
    <div>pos: {{x}}, {{y}}</div>
</template>