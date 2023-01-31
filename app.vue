<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Works on Firefox */
* {
  scrollbar-width: auto;
  scrollbar-color: #7cd0ff rgba(255, 255, 255, .4);
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 8px;
}

*::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 10px;
}

*::-webkit-scrollbar-thumb {
  background-color: #7cd0ff;
  border-radius: 20px;
  border: 1px solid #7cd0ff;
}
/*.page {
  height: 100%;
  width: min(95vw, 700px);
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}*/
</style>
