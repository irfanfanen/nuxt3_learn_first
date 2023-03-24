<template>
  <div>
    <NuxtLayout>
      <header>
          <ul>
            <li><NuxtLink to="/">Home |</NuxtLink></li>
            <li><NuxtLink to="/events">Event |</NuxtLink></li>
            <li><NuxtLink to="/events/1">Event 1</NuxtLink></li>
          </ul>
      </header>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
