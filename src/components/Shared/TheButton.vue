<template>
    <button class="episode-button mt-2 w-full flex justify-center items-center bg-white mb-5">{{this.button_data}} </button>
</template>

<script>
export default {
    name: "TheButton",
    props:['button_data'],
}
</script>

<style scoped>
button{
    max-height:45px ;
}
.episode-button {
    font-weight: 700;
    border: 1px solid #1c1d1f;
    background-color: #fff;
    padding-bottom: 15px;
    padding-top:15px;
    transition: all .2s;


}
.episode-button:hover{
    background-color: rgba(106, 111, 115, 0.1);
}
</style>