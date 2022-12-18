<template>
    <div class="main-container grid grid-cols-3 px-60 mt-3 pb-10 ">
        <div class="content col-span-2">
            <h3 class="title">Kurs İçeriği</h3>
            <div class="episodes-area flex justify-between mt-4">
                <span>23 bölüm • 111 ders • 11 sa 3 dak toplam uzunluk</span>
                <span style="color: rgba(64,27,156,0.8);font-size: 14px;font-weight: 700;" class="cursor-pointer episodes-expands">Tüm Bölümleri Genişlet</span>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "PreviewContent"
}
</script>

<style scoped>

.title{
    font-size: 24px;
    font-weight: 700;
}
.episodes-expands:hover{
    color: rgba(64,27,156,1)}
</style>