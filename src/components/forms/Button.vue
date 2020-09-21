<template>
    <div class="button" :class="addClass ? `button--${addClass}` : false">
        <button>{{text}}</button>
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: ['text', 'addClass']
}
</script>

<style lang="sass" scoped>
.button 
    button 
        border: none
        padding: 10px
        font-weight: bold
        border-radius: 10px
        color: white
        background-color: #59B43C
        cursor: pointer
        font-size: 16px        

    &--text 
        button 
            background: none 
            text-decoration: underline 
            color: #59B43C


</style>