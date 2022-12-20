<template>
    <div class="main-container grid grid-cols-3 px-60 mt-3 pb-10 ">
        <div class="content col-span-2">
            <h3 class="title">Kurs İçeriği</h3>
            <div class="episodes-area flex justify-between mt-4 mb-4">
                <span>23 bölüm • 111 ders • 11 sa 3 dak toplam uzunluk</span>
                <span style="color: rgba(64,27,156,0.8);font-size: 14px;font-weight: 700;"
                      class="cursor-pointer episodes-expands">Tüm Bölümleri Genişlet</span>
            </div>
            <div v-for="(item,index) in collapse" :key=index class="">
                <button class="collapse-button border flex justify-between w-full text-left " type="button"
                        data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false"
                        aria-controls="collapseExample">
                             <span class="flex">
                                 <img src="../image/tick.svg" alt="">
                                 <span class=" ml-2 button-title">{{ collapse[index].title }}</span>
                             </span>
                            <span class="course-length">{{ collapse[index].length[0] }}</span>

                </button>
                <div class="collapse border" id="collapseExample">
                    <div class="collapse-explanation flex justify-between">
                        <div class="left-section flex justify-center items-center">
                            <img class="w-4 h-4 mr-2" src="../image/play.svg" alt="">
                            <div class="collapse-course-content text-underline-color">{{ collapse[index].content[3] }}</div>
                        </div>
                        <div class="right-section flex">
                            <span class="mr-3.5 text-underline-color">Önizleme</span>
                            <div class="length">02:00</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: "PreviewContent",

    data() {
        return {
            collapse: [
                {
                    title: 'Kursa Giriş',
                    content: ['Kursun Genel Tanımı', 'Kurs İçeriği', 'Neden Python Öğrenmeliyiz', 'Kursta Nasıl Çalışmalıyız ?'],
                    length: ['5 ders 11 dak']
                },
                {
                    title: 'Gerekli Ortamların Kurulması',
                    content: ['Anaconda Dağıtımı ile Python ve Jupyter Kurulumu\n', 'Python Dosyaları ve Pycharm Kurulumu\n', 'Jupyter Notebook Kullanımı\n', 'Çalışma Dokümanları'],
                    length: ['15 ders 21 dak']
                },
                {
                    title: 'Temel Objeler ve Veri Yapıları',
                    content: ['Pythonda Sayı Veri Tipleri - Integer ve Float Veri Tipleri', 'Pythonda Karakter Dizileri - Stringler\n', 'Kodlama Egzersizi - Temel Python Objeleri ve Veri Yapıları\n', 'Çalışma Dokümanları'],
                    length: ['25 ders 111 dak']
                },
                {
                    title: 'Dolor Sit Amet',
                    content: ['Pythonda Sayı Veri Tipleri - Integer ve Float Veri Tipleri', 'Pythonda Karakter Dizileri - Stringler\n', 'Kodlama Egzersizi - Temel Python Objeleri ve Veri Yapıları\n', 'Çalışma Dokümanları'],
                    length: ['25 ders 111 dak']
                },
                {
                    title: 'Lorem Ipsum ',
                    content: ['Pythonda Sayı Veri Tipleri - Integer ve Float Veri Tipleri', 'Pythonda Karakter Dizileri - Stringler\n', 'Kodlama Egzersizi - Temel Python Objeleri ve Veri Yapıları\n', 'Çalışma Dokümanları'],
                    length: ['25 ders 111 dak']
                }


            ]
        }
    }

}

</script>

<style scoped>
.collapse-button {
    padding:15px 25px ;
    background-color:#F7F9FA ;
    color: #1c1d1f;
    font-weight: 700;
    font-size: 16px;
}
.border{
    border: 1px solid rgba(106, 111, 115, 0.3);

}
.course-length{
    color: #6a6f73;
    font-size: 14px;
    font-weight: 500;
}
.collapse-explanation{
    padding:15px 25px ;
}
.collapse-explanation .preview{
    color: #401b9c;
}
.title {
    font-size: 24px;
    font-weight: 700;
}
.text-underline-color{
    cursor: pointer;
    color: #401b9c;
    text-decoration:underline;
}

.episodes-expands:hover {
    color: rgba(64, 27, 156, 1)
}
</style>