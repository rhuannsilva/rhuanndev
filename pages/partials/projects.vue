<template>
    <div class="container mx-auto p-10">
        <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <div id="card-project" class="relative -top-24 rounded-md overflow-hidden group cursor-pointer">
                <img src="/bradesco.png" alt="Descrição do Projeto" class="w-full h-full rounded-md object-fill transition-transform duration-300 group-hover:scale-105 group-hover:brightness-[.2]">
                <div class="absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p class="p-4 text-[#fff]">Integração de metodo de pagamento PIX por API</p>
                </div>
            </div>
            <div id="card-project" class="relative -top-24 rounded-md overflow-hidden group cursor-pointer">
                <img src="/nubank.png" alt="Descrição do Projeto" class="w-full h-full rounded-md object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-[.2]">
                <div class="absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p class="p-4 text-[#fff]">Integração de metodo de pagamento PIX e Nupay por API</p>
                </div>
            </div>
            <div @click="toHref()" id="card-project" class="relative -top-24 rounded-md overflow-hidden group cursor-pointer">
                <img src="/novomundo.png" alt="Descrição do Projeto" class="w-full h-full rounded-md object-fill transition-transform duration-300 group-hover:scale-105 group-hover:brightness-[.2]">
                <div class="absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p class="p-4 text-[#fff]">Relações institucionais Novo Mundo</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

function toHref(){
    window.open('https://ri.novomundo.com.br/', '_blank');
}
</script>