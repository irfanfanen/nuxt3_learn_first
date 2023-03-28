<script setup>
// import { useCounterStore } from '~/stores/myStore'
// const store = useCounterStore()
// console.log(store)

// const response = await $fetch('/api/hello')
// console.log(response)

const {data: products, pending} = await useLazyFetch("/api/products");
// const {data: products} = await useFetch("/api/products")
// console.log(toRaw(products.value))

//
// const { sayHello } = useUtils();
// sayHello();

// const { x, y } = useMouse()
</script>

<!-- <script setup lang="ts">
    const { $sayHellox } = useNuxtApp();
    $sayHellox("irfan")
</script> -->

<template>
    <!-- <img src="~/assets/one.jpg" alt="" srcset=""> -->
    <!-- <img src="@/assets/one.jpg" alt="" srcset=""> -->
    <!-- <IconEmot /><IconArrow /><IconChart /><IconCircle />
    <ContentDoc /> -->
    <!-- <p>{{ response.api }} from Api</p> -->
    <!-- <p>{{ store.name }} hi</p> -->
    <!-- <img src="1.jpg" alt="" srcset=""> -->
    <br>
    <div>Event Page</div>
    <div>{{ pending ? "Loading" : products }}</div>
    <!-- <div>pos: {{x}}, {{y}}</div> -->
    <p>
        <!-- data: {{ pending ? "Loading" : products }} -->
    </p>
</template>