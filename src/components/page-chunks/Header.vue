<template>
    <header class="header">
        <div class="container">
            <div class="header__left">
                <Logo/>
            </div>
            <div class="header__right">
                <Button text="Войти" addClass="text" />
                <Button text="Подать объявление" />
            </div>
        </div>
    </header>
</template>

<script>
import Logo from '../logo/Logo'
import Button from '../forms/Button'

export default {
    name: 'Header',
    components: {
        Logo,
        Button
    }
}
</script>

<style lang="sass" scoped>
.header 
    width: 100%
    border-bottom: 2px solid grey

    .container 
        display: flex
        justify-content: space-between
        align-items: center      

    &__right 
        display: flex

        .button 
            margin-left: 20px    

</style>