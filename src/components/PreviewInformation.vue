<template>
    <div class=" main-container ">
        <h3 class="title">
            Açıklama
        </h3>
        <div class="paragraph">
            Makine öğrenmesini merak ediyor musunuz veya işinizde yoğun olarak veri kullanıyor veya gelecekte
            makinelerin nasıl çalışacağını merak ediyor musunuz?

            Bu kurs, Doç. Dr. Şadi Evren ŞEKER tarafından hazırlanmaktadır. Şadi Evren Şeker, lisans, yüksek lisans ve
            doktorasını bilgisayar mühendisliğinde tamamlamış, yüksek lisans ve doktora sırasında yapay zeka üzerine
            çalışmış ve sonrasında doktora sonrası araştırmacı olarak veri bilimi üzerine dünyanın çeşitli ülkelerinde
            çalışmalarına devam etmiş, makine öğrenmesi, büyük veri, veri bilimi ve yapay zeka konularında çok sayıda
            akademik makale ve kitaplar yayınlamış, literatüre kazandırdığı patent ve algoritmalar yanında 20 yıla yakın
            sektörde çok farklı kurumlara eğitim, danışmalık ve yazılım hizmetleri vermenin yanında halen aktif olarak
            akademisyenliğe ve sektörde veri bilimi, yapay zeka ve büyük veri uygulamalarına devam etmektedir. Aktif
            olarak çalıştığı şirketler arasında, Türkiye ve dünyada lider olan, bankacılık, telekom, sigortacılık,
            ulaştırma, inşaat, turizm ve finans firmaları bulunmaktadır.<br>


            <strong>Bu kursta amaçlanan, hiç bilmeyen ve yeni başlayan birisini makine öğrenmesi konusunda uzman
                seviyesine çıkarmaktır.</strong> Adım adım, makine öğrenmesi dünyasına giriş yapılacak ve her bölümde
            farklı yetenekler kazandırılarak makine öğrenmesi ve bir alt çalışma alanı olarak görülebilecek veri bilimi
            konularındaki gerçek uygulamalar hakkında fikir verilecektir. Ayrıca güncel ve gözde konular olan derin
            öğrenme veya arttırımlı öğrenme gibi konulara da giriş yapılacak ve bu kavramların kullanımları ve
            uygulamaları örnekler üzerinden gösterilecektir.

            Kurs boyunca konular eğlenceli ve heyecanlı bir <strong> şekilde anlatılmaya çalışılacak ve genel bir yapı
            olarak aşağıdaki sıra izlenecektir.</strong> <br>

            <span v-if="!showMore">...</span>

        </div>
        <div class="bottom-section mt-2">
            <button v-if="!showMore" @click="changeShow()" style="color: #401b9c;" class="font-bold flex">
                <span class="mr-2">Daha Fazla Göster </span>
                <img class="bottom-arrow" src="../image/bottom-arrow.svg" alt="">
            </button>
            <div :class="{ 'show-more': !showMore }" class="my-3">
                Part 1 - Veri Önişleme (Data Preprocessing) <br>

                Part 2 - Tahmin ve Regresyon: Simple Linear Regression, Multiple Linear Regression, Polynomial
                Regression, SVR, Decision Tree Regression, Random Forest Regression <br>

                Part 3 - Sınıflandırma (Classification): Logistic Regression, K-NN, SVM, Kernel SVM, Naive Bayes,
                Decision Tree Classification, Random Forest Classification<br>

                Part 4 - Bölütleme (Kümeleme, Clustering): K-Means, Hierarchical Clustering <br>

                Part 5 - Birliktelik Kural Çıkarımı (Association Rule Learning): Apriori, Eclat<br>

                Part 6 - Arttırımlı Öğrenme (Reinforcement Learning): Upper Confidence Bound, Thompson Sampling<br>

                Part 7 - Doğal Dil İşleme (Natural Language Processing): Bag-of-words model and algorithms for NLP<br>

                Part 8 - Derin Öğrenme (Deep Learning): Artificial Neural Networks, Convolutional Neural Networks<br>

                Part 9 - Boyut Dönüşümü ve indirgemesi (Transformation, Dimensionality Reduction): PCA, LDA, Kernel
                PCA<br>

                Part 10 - Model Seçimi ve Kollektif Öğrenme: Model Selection & Boosting: k-fold Cross Validation,
                Parameter Tuning, Grid Search, XGBoost<br>

                Kurs kapsamında, gerçek hayat örnekleri kullanılacak ve kendi makine öğrenme modelinizi oluşturmanın
                yolu da gösterilecektir.<br>

                Kursun en önemli özelliklerinden birisi, kurs kapsamında, Python dilinde kod şablonları verilecek olup
                bu kod şablonlarını, kendi problemlerinizde kullanabilecek olmanızdır.<br>
                <h3 class="title mt-5">Bu kurs kimler için uygun :</h3>
                <ul>
                    <li class="flex items-center mb-2"><img class="mr-5 ml-2 " src="../image/dot.svg" alt=""> <span
                        class="">Veri ile işi olan herkes.</span></li>
                    <li class="flex items-center mb-2"><img class="mr-5 ml-2 " src="../image/dot.svg"><span class="">Geleceğin mesleklerinde çalışmak isteyen herkes.</span>
                    </li>
                    <li class="flex items-center mb-2"><img class="mr-5 ml-2 " src="../image/dot.svg"><span class="">Yapay zeka ve makine öğrenmesi konularına merakı olan herkes.</span>
                    </li>
                </ul>
            </div>

            <button v-if="showMore" @click="changeShow()" style="color: #401b9c;" class="font-bold flex mt-5">
                <span class="mr-2">Gizle </span>
                <img class="turned-bottom-arrow bottom-arrow" src="../image/bottom-arrow.svg" alt="">
            </button>


        </div>
    </div>
</template>

<script>
export default {
    name: "PreviewInformation",
    data() {
        return {
            showMore: false

        }
    },
    methods: {
        changeShow() {
            this.showMore = !this.showMore;
        }
    }
}
</script>

<style scoped>
.paragraph {

}

.title {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.2px;
    line-height: 28.8px;
    color: #1c1d1f;
}

.show-more {
    background-color: yellow;
    display: none;
}

ul img {
    width: 7px;
    height: 7px;
}

.bottom-arrow {
    width: 16px;
    height: 24px;
}

.turned-bottom-arrow {
    transition: 1s;
    transform: rotateX(180deg);
}
</style>