<template>
    <div class="container">
        <div class="footer-top grid lg:grid-cols-2 md:grid-cols-1 place-content-between">
            <div class="left-section grid grid-cols-3 ">
                <div class="section-footer-menu">
                    <div>Udemy Business</div>
                    <div>Udemy'de Eğitim Verin</div>
                    <div>Uygulamayı Edinin</div>
                    <div>Hakkımızda</div>
                    <div>İletişim</div>
                </div>
                <div class="section-footer-menu">
                    <div>Kariyer</div>
                    <div>Blog</div>
                    <div>Yardım ve Destek</div>
                    <div>İş Ortaklığı</div>
                    <div>Yatırımcılar</div>
                </div>
                <div class="section-footer-menu">
                    <div>Koşullar</div>
                    <div>Gizlilik Politikası</div>
                    <div>Çerez Ayarları</div>
                    <div>Site Haritası</div>
                    <div>Erişilebilirlik beyanı</div>
                </div>

            </div>
            <div class="right-section flex justify-end">
                <div class="language-button">
                    <button
                        type="button" class="flex justify-center items-center button-width flex-nowrap text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <div>
                            <svg width="16px" height="16px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="languageIconTitle" stroke="#000000" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="#fff" color="#fff"> <title id="languageIconTitle">Language</title> <circle cx="12" cy="12" r="10"/> <path stroke-linecap="round" d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z"/> <path stroke-linecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15"/> </svg></div>
                        <span class="ml-2">Türkçe</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="footer-bottom grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 place-content-between lg:mt-16 md:mt-10 sm:mt-6">
            <div class="udemy-logo">
                <img class="w-1/6" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="">
            </div>
            <div class=" copyright-text flex justify-end">
                © 2022 Udemy, Inc.
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TheFooter",
}
</script>

<style scoped>
.container{
    background-color: #1c1d1f;
    padding: 32px;
}
.section-footer-menu div{
    font-size: 14px;
    cursor: pointer;
    line-height: 19.6px;
    text-align: left;
    color: #F8F9FB;
    margin-bottom: 12px;
}
.section-footer-menu span:hover{
    text-decoration: underline;
}
.language-button button{
    transition: .2s;
    opacity: .9;
    color: #F8F9FB;
    background: transparent;
}
.language-button button:hover{
    opacity: 1;
}
.copyright-text{
    color: #F8F9FB;
}
</style>