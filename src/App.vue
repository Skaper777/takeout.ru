<template>
    <div id="app">
        <Header />
        <router-view />
        <Footer />
    </div>
</template>

<script>
import Header from "./components/page-chunks/Header";
import Footer from "./components/page-chunks/Footer";

export default {
    components: {
        Header,
        Footer,
    },
};
</script>

<style lang="sass">
#app
    height: 100vh
    position: relative
       
</style>
