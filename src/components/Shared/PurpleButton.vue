<template>
    <button class="episode-button mt-2 w-full flex justify-center items-center bg-white mb-5">{{this.button_data}} </button>
</template>

<script>
export default {
    name: "PurpleButton",
    props:['button_data'],
}
</script>

<style scoped>
button{
    max-height:45px ;
}
.episode-button {
    z-index: 10;
    color: #FFffff;
    background-color: #8710D8;
    opacity: .9;
    font-weight: 700;
    border: 1px solid rgba(28, 29, 31, 0.01);
    padding-bottom: 15px;
    padding-top:15px;
    transition: all .2s;


}
.episode-button:hover{
    opacity: 1;
}
</style>