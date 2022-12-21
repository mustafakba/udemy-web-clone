<template>

        <div>
            <h3 class="font-bold text-2xl mb-5">Gereksinimler</h3>
            <ul>
                <li class="flex items-center mb-2"><img class="mr-5 ml-2 " src="../image/dot.svg" alt=""> <span class="">Öğrenme Arzusu</span></li>
                <li  class="flex items-center mb-2"> <img  class="mr-5 ml-2 " src="../image/dot.svg"><span class="">Lise düzeyinde matematik bilgisi</span></li>
                <li  class="flex items-center mb-2"> <img  class="mr-5 ml-2 " src="../image/dot.svg"><span class="">İstatistik ve herhangi bir programlama dili tecrübesine gerek yoktur.</span></li>
            </ul>
        </div>

</template>

<script>
export default {
    name: "PreviewRequirement"
}
</script>

<style scoped>
ul li{
}
img{
    width: 7px;
    height: 7px;
}

</style>