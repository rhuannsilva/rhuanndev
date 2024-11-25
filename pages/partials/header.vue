<template>
    <nav class="h-20 flex items-center">
        <div class="flex items-center text-center container mx-auto justify-between">
            <div id="logo">
                <p class="text-blue-default pl-5 font-extrabold text-2xl">&#123;&#123; rhuannsilva &#125;&#125;</p>
            </div>
            <div class="pr-5">
                <button @click="navigateTo" class="bg-blue-default text-[#FFF] px-4 py-2 rounded-md">Entre em contato</button>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">

const navigateTo = () => {
    window.open('https://api.whatsapp.com/send?phone=5562991052632', '_blank');
}
</script>