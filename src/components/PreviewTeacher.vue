<template>
    <div class="main-container grid grid-cols-3 px-60 py-5">
        <div class="col-span-2">
            <h3 class="title mt-2">Eğitmen</h3>
            <div class="teacher-info mt-2">
                <div class="name pb-2 underline font-bold text-xl">Prof. Dr. Sadi Evren Şeker</div>
                <div class="job">Researcher in Computer Science and Business Analytics</div>
                <div class="personal-information flex items-center mt-2">
                    <div class="teacher-image mr-4">
                        <img class="teacher-image" src="https://img-c.udemycdn.com/user/200_H/7848688_6af7_5.jpg" alt="">
                    </div>
                    <div class="personal-values">
                        <div class="all-info">
                            <img src="../image/black-star.svg" alt="">
                            <span class="info-value">4.4 Eğitmen Puanı</span>
                        </div>
                        <div class="all-info">
                            <img src="../image/award.svg" alt="">
                            <span class="info-value">11.311 Yorum</span>
                        </div>
                        <div class="all-info">
                            <img src="../image/users.svg" alt="">
                            <span class="info-value">38.592 Öğrenci</span>
                        </div>
                        <div class="all-info">
                            <img src="../image/play.svg" alt="">
                            <span class="info-value">6 Kurs</span>
                        </div>
                    </div>
                </div>
                <div class="biography mt-4">
                    <h4>Biography</h4>
                    <p>
                        After completing his BSc, MSc and Ph.D in computer science and engineering, <strong>he has joined University of Texas at Dallas as a Post-Doc researcher</strong>. Dr. Şadi Evren ŞEKER who has taught courses on many different subjects in 6 different countries and 17 different universities. Recently in 2017, left the university he taught in the USA and he has returned to Turkey.
                    </p>
                    <p>
                        Şadi Evren ŞEKER has a lot of reputable <strong> academic articles and patent. Also he is very active in the field</strong> information technology in Turkey since 2000. He is still actively managing his own company in big data, data science and artificial intelligence.
                    </p>
                    <button v-if="!showMore"  @click="changeShow()" style="color: #401b9c;" class="font-bold flex">
                        <span class="mr-2">Daha Fazla Göster </span>
                        <img class="bottom-arrow" src="../image/bottom-arrow.svg" alt="">
                    </button>
                    <div :class="{ 'show-more': !showMore }" >
                    <h4>Biyografi</h4>
                    <p>
                        Lisans, Yüksek Lisans ve Doktora eğitimlerini <strong> Bilgisayar Mühendisliği alanında tamamladıktan </strong>sonra doktora sonrası araştırmacı olarak University of Texas at Dallas'ta akademik çalışmalarda bulunmuştur, 6 ayrı ülkede ve 17 ayrı üniversitede çok farklı konularda dersler anlatmış olan Şadi Evren ŞEKER, en son 2017 yılında, ABD'de ders verdiği üniversiteden ayrılarak Türkiye'ye dönmüştür.
                    </p>
                    <p>
                        Çok sayıda kitapları, saygın akademik makaleleri ve patenti olan Şadi Evren ŞEKER, ayrıca Türkiye'de 2000 yılından beri aktif olarak bilişim alanında faaliyet gösteren çok sayıda şirkette çalışmış ve halen büyük veri, veri bilimi ve yapay zeka konularında aktif olarak kendi şirketinin yöneticiliğini yapmaktadır.
                    </p>
                    <p>
                        Ayrıca bir sosyal sorumluluk projesi olarak Bilgisayar Kavramları oluşumunu 2007 yılında kurmuş, bilgisayarkavramlari sitesinde 2000'e yakın Türkçe içeriği ilk defa orijinal olarak yayınlamış ve 2014 yılında da YouTube ortamına geçerek 1300'ün üzerinde eğitim ve bilgilendirici röportaj, sohbet ve soru-cevap videosu çekmiştir.

                    </p>
                    </div>
                    <button v-if="showMore"  @click="changeShow()" style="color: #401b9c;" class="font-bold flex mt-5">
                        <span class="mr-2">Gizle </span>
                        <img  class="turned-bottom-arrow bottom-arrow" src="../image/bottom-arrow.svg" alt="">
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "PreviewTeacher",
    data(){
        return{
            showMore : false

        }
    },
    methods:{
        changeShow(){
            this.showMore = !this.showMore ;
        }
    }
}
</script>

<style scoped>
.title{
    font-size: 26px;
    color: #1c1d1f;
    font-weight: 700    ;
}
.name{
    color: #8710D8;
    opacity: .9;
    cursor: pointer;
}
.name:hover{
    opacity: 1;
}
.job{
    line-height: 22.4px;
    font-size: 16px;
    color: #6a6f73;
}
.all-info{
    display: flex;
    margin-top: 8px;
    margin-bottom: 8px;
}
.teacher-image{
    width: 112px;
    height: 112px;
    border-radius: 50%;
}
.all-info img{
    width: 16px;
    height: 20px;
}
.info-value{
    font-size: 16px;
    color: #1c1d1f;
    line-height: 19.6px;
    text-align: left;
    margin-left: 16px;
}
.biography h4{
    font-weight: 700;
}
.biography p{
    margin-top: 7px;
    margin-bottom: 10px;
}
.show-more {
    background-color: yellow;
    display: none;
}
.bottom-arrow{
    width: 16px;
    height: 24px;
}
.turned-bottom-arrow{
    transition: 1s;
    transform: rotateX(180deg);
}
</style>