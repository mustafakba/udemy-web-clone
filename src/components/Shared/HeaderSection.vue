<template>
    <div class="header justify-evenly flex lg:justify-between items-center mx-auto px-6 lg:px-8  my-auto">
        <div class="lg:hidden w-1/3  menu-icon-svg">
            <img style="width: 24px" src="../../image/menu.svg" alt="">
        </div>
        <div class="udemy-logo lg:mr-4 w-1/2 lg:w-24 ">
            <img width="91px;" src="../../image/logo-udemy.svg" alt="">
        </div>
        <div class="categories mr-4  hidden lg:block">Categories</div>
        <div class="input flex-1 relative  hidden lg:block">
            <div class="absolute search-bar-icon">
                <svg
                    aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path
                    fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                </svg>
            </div>
            <input class="search-input" style="width: 100%" type="text" placeholder="Dilediğiniz Şeyi Arayın">

        </div>
        <div class="udemy-business ml-4  hidden lg:block ">Udemy Business</div>
        <div class="teach-on-udemy ml-4  hidden lg:block ">Udemy'de Eğitim Verin</div>
        <div class="svg-basket mx-0 lg:mx-4 ">
            <img style="width: 24px; height: 24px;" src="../../image/shopping-cart.svg" alt="">
        </div>
        <button
            type="button" class=" hidden lg:block mr-4 button-width flex-nowrap text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            Oturum Aç
        </button>
        <button
            type="button" class=" hidden lg:block mr-4 flex-nowrap text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            Kaydol
        </button>
        <button
            type="button" class=" hidden lg:block flex text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            <img width="16" class="image-auto" src="../../image/language.svg" alt=""/>
        </button>
    </div>
</template>

<script>
export default {
    name: "HeaderSection"
}
</script>

<style scoped>

.header{
    height: 72px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);
}
.udemy-logo img{
    width: 91px;
    height:34px ;
}
.search-input{
    height: 46px;
    width: 100%;
    border: 0.5px solid #000;
    text-decoration: none solid rgb(28, 29, 31);
    background-color: #f8f9fb !important;
    border-radius: 22px;
    padding: 20px;
    padding-left: 52px!important;
}
.search-input:focus{
    border: 0.5px solid #000;
}
.search-input::placeholder{
    font-size: 14px;
    padding-left: 10px;
    color: rgb(106, 111, 115);

}
.search-bar-icon{
    margin-top: 14.5px;
    margin-left:25px;

}

</style>