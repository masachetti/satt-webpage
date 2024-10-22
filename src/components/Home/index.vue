<script setup lang="ts">
import BenefitsSection from "@/components/Home/BenefitsSection.vue";
import Header from "@/components/Header/Header.vue";
import Banner from "@/components/Home/Banner.vue";
import PricesSection from "@/components/Home/PricesSection.vue";
import ContentSection from "@/components/Home/ContentSection.vue";
import Footer from "@/components/Home/Footer.vue";
</script>

<template>
  <main class="w-full flex flex-col items-center">
    <Header></Header>
    <Banner></Banner>
    <BenefitsSection></BenefitsSection>
    <PricesSection></PricesSection>
    <ContentSection></ContentSection>
    <Footer></Footer>
  </main>
</template>

<style scoped></style>
