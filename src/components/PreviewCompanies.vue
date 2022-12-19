<template>
    <div class="main-container grid grid-cols-3 px-60 py-5">
        <div class="for-border col-span-2">
            <h3 class="title mb-2">En iyi şirketler, çalışanlarına bu kursu sunmaktadır</h3>
            <div class="content-container">
                <span>Bu kurs, dünya genelindeki işletmelerin güvendiği ve en yüksek puan alan kurslardan oluşan koleksiyonumuz için seçilmiştir.
                    <span class="underline cursor-pointer" style="color: #401b9c ;">Daha fazla bilgi edinin</span>
                </span>
                <div class="companies flex justify-between mt-5">
                    <img class="flex justify-center" v-for="(company,index) in companiesLink" :key="index" :src="companiesLink[index]" >
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "PreviewCompanies",
    data() {
        return {
            companiesLink:
                [
                    "https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg",
                    "https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg",
                    "https://s.udemycdn.com/partner-logos/v4/box-dark.svg",
                    "https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg",
                    "https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg",

                ]
        }
    }
}
</script>

<style scoped>
.title {
    font-size: 18px;
    letter-spacing: -.2px;
    font-weight: 700;
    color: #1c1d1f;
}

.main-container {
    color: #1c1d1f;
}


.for-border {
    border: 1px solid #D1D7DC;
    padding: 17.5px 50px 25px 25px;


}

</style>