<template>
    <div>
        <div class="header flex items-center pl-6 pr-24">
            <ul class="header-left-section flex items-center">
                <li>
                    <img
                        class="img-logo"
                        style="width: 91px; height: 34px"
                        src="../../image/logo-udemy.svg"
                        alt=""
                    />
                </li>
                <li class="px-4 py-2.5 categories">
                    <a class="li-text">Categories</a>
                    <div class="card-popup py-5">
                        <p class="popup-text">
                            Ekibinize en iyi 17.000+ Udemy kursuna istedikleri zaman
                            istedikleri yerden erişebilme imkanı sağlayın.
                        </p>
                        <button
                            type="button"
                            class="shrink-0 font-bold text-base text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        >
                            Udemy Business Ürününü Deneyin
                        </button>
                    </div>
                </li>
            </ul>
            <div class="flex items-center content-center w-full">
                <ul class="search-bar flex items-center content-center">
                    <form class="flex items-center w-full">
                        <label for="simple-search" class="sr-only">Search</label>
                        <div style="width: 100%" class="relative">
                            <div
                                class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                            >
                                <svg
                                    aria-hidden="true"
                                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="simple-search"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Dilediğiniz Şeyi Arayın"
                                required=""
                            />
                        </div>
                    </form>
                </ul>
                <ul
                    class="ml-2.5 header-right-section flex items-center justify-end w-100 sm:justify-start"
                >
                    <li
                        class="py-3.5 li-text mx-2.5 li-text hidden xl:block relative udemy-business"
                    >
                        Udemy Business
                        <div class="card-popup">
                            <p class="popup-text">
                                Ekibinize en iyi 17.000+ Udemy kursuna istedikleri zaman
                                istedikleri yerden erişebilme imkanı sağlayın.
                            </p>
                            <button
                                type="button"
                                class="shrink-0 font-bold text-base text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                            >
                                Udemy Business Ürününü Deneyin
                            </button>
                        </div>
                    </li>
                    <li
                        class="py-3.5 mx-2.5 li-text hidden sm:block relative teach-udemy"
                    >
                        Teach on Udemy
                        <div style="width: 287px !important" class="card-popup">
                            <p class="popup-text">
                                Bildiklerinizi fırsata dönüştürün ve tüm dünyada milyonlarca
                                kişiye ulaşın.
                            </p>
                            <button
                                type="button"
                                class="font-bold text-base text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                            >
                                Daha Fazla Bilgi Edinin
                            </button>
                        </div>
                    </li>
                    <li class="py-3.5 mx-2.5 shopping-basket">
                        <img
                            width="20"
                            class="image-auto py-2.5"
                            src="../../image/shopping-cart.svg"
                            alt=""
                        />
                        <div style="" class="card-popup">
                            <p class="popup-text">Sepetiniz Boş.</p>
                            <a href="#">Alışverişe Devam Et.</a>
                        </div>
                    </li>
                    <div class="buttons flex items-center content-center ml-3">
                        <button
                            type="button"
                            class="button-width flex-nowrap text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        >
                            Oturum Aç
                        </button>
                        <button
                            type="button"
                            class="flex-nowrap text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        >
                            Kaydol
                        </button>
                        <button
                            type="button"
                            class="flex text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        >
                            <img
                                width="16"
                                class="image-auto"
                                src="../../image/language.svg"
                                alt=""
                            />
                        </button>
                        <div class=""></div>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TheHeader",
};
</script>

<style scoped>
.header {
    width: 100%;
    height: 72px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);
}

.img-logo {
    min-width: 91px;
    min-height: 34px;
}

.img-logo:hover {
    cursor: pointer;
}

.li-text {
    flex-shrink: 0;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: -0.2px;
    color: #1c1d1f;
}

.li-text:hover {
    color: #5624d0;
}

.search-bar {
    width: 70%;
}

#simple-search {
    height: 46px;
    width: 100%;
    border: 0.5px solid #000;
    text-decoration: none solid rgb(28, 29, 31);
    background-color: #f8f9fb !important;
    border-radius: 22px;
}

#simple-search:focus {
    border: 0.5px solid #000;
}

#simple-search::placeholder {
    font-size: 12px;
    color: rgb(106, 111, 115);
}

.header-right-section {
    padding: 19px 0px;
}

.buttons button {
    font-weight: 700;
    border: 1px solid #1c1d1f;
    margin: 0 5px !important;
    display: flex;
    align-items: center;
    padding: 14px;
    max-height: 38px;
}

.button-width {
    min-width: 110px;
}

.image-auto {
    max-width: 1000px;
}

.udemy-business:hover > div {
    display: block;
}

.card-popup {
    z-index: 55;
    background-color: #f8f9fb;
    color: #1c1d1f;
    line-height: 22px;
    letter-spacing: -0.2px;
    padding: 20px;
    width: 307px;
    height: 187px;
    position: absolute;
    top: 70px;
    display: none;
    text-align: center;
}

.card-popup button {
    background-color: #000000;
    flex-shrink: 0;
}

.card-popup:hover {
    display: block;
}

.popup-text {
    font-weight: 700;
    margin-bottom: 12px;
    line-height: 22px;
    font-size: 19px;
}

.categories {
}

.categories:hover > div {
    display: block;
}

.categories .card-popup {
    font-weight: 300;
    color: #6a6f73;
    font-size: 10px !important;
    line-height: 22.4px;
    padding: 12px 0;
    width: 288px;
}

.udemy-business {
    padding: 24px 0px;
}

.teach-udemy {
    padding: 24px 0px;
}

.teach-udemy:hover > div {
    display: block;
}

.shopping-basket .card-popup {
    font-weight: 300;
    color: #6a6f73;
    font-size: 10px !important;
    line-height: 22.4px;
    height: 90px !important;
    padding: 12px 0;
    width: 288px;
}

.shopping-basket .card-popup .popup-text {
    font-size: 16px;
    font-weight: 500;
    margin-top: 5px;
}

.shopping-basket .card-popup a {
    color: #401b9c;
    font-size: 14px !important;
    font-weight: 700;
    line-height: 16.8px;
    letter-spacing: -0.2px;
}

.shopping-basket:hover > div {
    display: block;
}
</style>
