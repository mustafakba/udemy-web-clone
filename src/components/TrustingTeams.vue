<template>
    <div class="container mx-auto">
        <div class="content" >
            <h3 class="title">13.400 harika ekip Udemy'ye güveniyor</h3>
            <p class="explanation">Önde gelen şirketler, çalışanlarının yetkinliklerini güncel tutmasına yardımcı olmak için aynı kurslardan
                yararlanıyor.</p>
        </div>
        <div class="companies grid grid-cols-6 place-items-center mt-6 md:grid md:grid-cols-6 sm:grid sm:grid-cols-2 px-8">
            <img class="flex justify-center" v-for="(company,index) in companiesLink" :key="index" :src="companiesLink[index]" >
        </div>
    </div>
</template>

<script>
export default {
    name: "TrustingTeams",
    data() {
        return {
            companiesLink:
                [
                    "https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg",
                    "https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg",
                    "https://s.udemycdn.com/partner-logos/v4/box-dark.svg",
                    "https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg",
                    "https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg",
                    "https://s.udemycdn.com/partner-logos/v4/tcs-dark.svg"

                ]
        }
    }
}

</script>

<style scoped>
.container{
    margin-top: 65px;
    height: 100%;
    max-width: 2000px;
    align-items: center;
    background: #F7F9FA;
    width: 100%;
    padding-top:25px ;
    padding-bottom: 25px;
}
.title{
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.2px;
    color: #1c1d1f;
    line-height: 32.4px;
    font-family: "Times New Roman";
    margin-bottom: 12px;
}
.explanation{
    font-size: 16px;
    line-height: 22.4px;
    color: #1c1d1f;
    margin: 8px 0px 24px 0px;
    font-family: sans-serif;
}
.content{
    text-align: center;

}
</style>