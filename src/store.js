import {createStore} from 'vuex'


const store = createStore({
    state() {
        return {
            checkAWS : false,
            lesson_name:
                {
                    url :"/preview/python",
                    title: "Python ile kariyer olanaklarınızı artırın",
                    paragraph: "İster makine öğrenimi, ister finans alanında çalışıyor olun, ister web geliştirme veya veri bilimi alanında kariyer yapıyor olun, Python öğrenebileceğiniz en önemli becerilerden biridir. Python'un basit sözdizimi özellikle masaüstü, web ve iş uygulamaları için uygundur.",
                    button_title: "Python kurslarını keşfedin",
                    courses: [
                        {
                            image_url: "https://img-c.udemycdn.com/course/240x135/1235124_7c5f_6.jpg",
                            author: "Mustafa Murat Coşkun",
                            comment: "(40+ Saat) Python | Sıfırdan İleri Seviye Programlama (2020)",
                            rate: "4.7",
                            vote: "42,505",
                            price: "₺129.99",
                            last_price: "₺459.99",
                            sticker: "En çok satan",
                        }
                    ]
                },

            otherCourses :[
                {
                    image_url: "https://img-c.udemycdn.com/course/240x135/1235124_7c5f_6.jpg",
                    author: "Mustafa Murat Coşkun",
                    comment: "(40+ Saat) Python | Sıfırdan İleri Seviye Programlama (2020)",
                    rate: "4.7",
                    vote: "42,505",
                    price: "₺129.99",
                    last_price: "₺459.99",
                    sticker: "En çok satan",
                },
                {
                    image_url: "https://img-c.udemycdn.com/course/240x135/1586464_cae5_3.jpg",
                    author: "Sadi Evren Şeker",
                    comment: "Sadi Evren Şeker  Python ile Makine Öğrenmesi",
                    rate: "4.3",
                    vote: "4218",
                    price: "₺129.99",
                    last_price: "₺459.99",
                    sticker: "En çok satan",
                },
                {
                    image_url: "https://img-c.udemycdn.com/course/240x135/1408632_0134_2.jpg",
                    author: "Atil Samancioglu",
                    comment: "Atil Samancıoğlu ile Etik Hacker Olma Kursu",
                    rate: "4.7",
                    vote: "25623",
                    price: "₺429.99",
                    last_price: "₺459.99",
                    sticker: "En çok satan",
                },
                {
                    image_url: "https://img-c.udemycdn.com/course/240x135/4654606_9644.jpg",
                    author: "Elif Bala",
                    comment: "Elif Bala ile Kapsamlı İngilizce Eğitim Seti (A1-C2)",
                    rate: "4.7",
                    vote: "25623",
                    price: "₺429.99",
                    last_price: "₺459.99",
                    sticker: "En çok satan",
                },
                {
                    image_url: "https://img-c.udemycdn.com/course/240x135/1207662_42a8_5.jpg",
                    author: "Atil Samancioglu",
                    comment: "Atil Samancıoğlu ile Android Mobil Uygulama Kursu",
                    rate: "4.7",
                    vote: "25623",
                    price: "₺429.99",
                    last_price: "₺459.99",
                    sticker: "En çok satan",
                },

            ]
        }
    },
    actions: {
        fillPython({state}) {
            state.lesson_name.title = "Python ile kariyer olanaklarınızı artırın"
            state.lesson_name.paragraph = "İster makine öğrenimi, ister finans alanında çalışıyor olun, ister web geliştirme veya veri bilimi alanında kariyer yapıyor olun, Python öğrenebileceğiniz en önemli becerilerden biridir. Python'un basit sözdizimi özellikle masaüstü, web ve iş uygulamaları için uygundur.\n"
            state.lesson_name.button_title ="Python kurslarını keşfedin"
            state.lesson_name.courses[0].image_url = "https://img-c.udemycdn.com/course/240x135/1235124_7c5f_6.jpg"
            state.lesson_name.courses[0].author ="Mustafa Murat Coşkun"
            state.lesson_name.courses[0].comment ="(40+ Saat) Python | Sıfırdan İleri Seviye Programlama (2020)"
            state.lesson_name.courses[0].rate ="4.7"
            state.lesson_name.courses[0].vote ="42,505"
            state.lesson_name.courses[0].price ="₺129.99"
            state.lesson_name.courses[0].last_price ="₺459.99"
            state.lesson_name.courses[0].sticker ="En çok satan"
            state.lesson_name.url = "/preview/python"

        },
        fillExcell({state}) {
            state.lesson_name.title = "Excel ile verileri analiz edin ve görselleştirin\n"
            state.lesson_name.paragraph = "Çalıştığınız sektör ne olursa olsun Microsoft Office Excel, verileri düzenlemek ve göstermek için çok değerli bir çalışma tablosu programıdır. Excel, büyük bilgi gruplarını toplamanıza ve analiz etmenize yardımcı olacak işlevler, formüller ve pivot tabloları sunar."
            state.lesson_name.button_title = "Excel Kurslarını Keşfedin"
            state.lesson_name.courses[0].image_url = "https://img-c.udemycdn.com/course/240x135/492470_9d83_5.jpg"
            state.lesson_name.courses[0].author = "Haluk Tatar"
            state.lesson_name.courses[0].comment = "Microsoft Excel | Sıfırdan Zirveye"
            state.lesson_name.courses[0].rate = "4.7"
            state.lesson_name.courses[0].vote = "2,531"
            state.lesson_name.courses[0].price = "₺429.99"
            state.lesson_name.courses[0].last_price = ""
            state.lesson_name.courses[0].sticker = ""
            state.lesson_name.url = "/preview/excel"


        },
        fillWeb({state}) {
            state.lesson_name.title = "Web Geliştirme ile web siteleri ve uygulamalar oluşturun\n"
            state.lesson_name.paragraph = "Web geliştirme dünyası, internetin kendisi kadar geniştir. Sosyal ve meslek hayatlarımızın büyük bir kısmı internette yayınlanır. Bu da, giderek daha çok güvendiğimiz web sitelerini ve uygulamaları oluşturma, yönetme ve hata ayıklama amacıyla yeni sektörlere yol açar.\n" +
                "\n"
            state.lesson_name.button_title = "Web Geliştirme Keşfedin"
            state.lesson_name.courses[0].image_url = "https://img-c.udemycdn.com/course/240x135/1258436_2dc3_4.jpg"
            state.lesson_name.courses[0].author = "Sadık Turan"
            state.lesson_name.courses[0].comment = "Komple Uygulamalı Web Geliştirme Eğitimi"
            state.lesson_name.courses[0].rate = "4.6"
            state.lesson_name.courses[0].vote = "21,231"
            state.lesson_name.courses[0].price = "₺169.99"
            state.lesson_name.courses[0].last_price = ""
            state.lesson_name.courses[0].sticker = "En çok satan"
            state.lesson_name.url = "/preview/web"


        },
        fillJavascript({state}) {
            state.lesson_name.title = "JavaScript ile yazılım geliştirme yetkinliklerinizi ileriye taşıyın\n"
            state.lesson_name.paragraph = "İster makine öğrenimi, ister finans alanında çalışıyor olun, ister web geliştirme veya veri bilimi alanında kariyer yapıyor olun, Python öğrenebileceğiniz en önemli becerilerden biridir. Python'un basit sözdizimi özellikle masaüstü, web ve iş uygulamaları için uygundur."
            state.lesson_name.button_title = "JavaScript kurslarını keşfedin"
            state.lesson_name.courses[0].image_url = "https://img-c.udemycdn.com/course/240x135/3411232_ca80_5.jpg"
            state.lesson_name.courses[0].author = "Levent Ertunalılar"
            state.lesson_name.courses[0].comment = "Sıfırdan İleri Seviye JS Geliştirme ES+7"
            state.lesson_name.courses[0].rate = "4.6"
            state.lesson_name.courses[0].vote = "6913"
            state.lesson_name.courses[0].price = "₺429.99"
            state.lesson_name.courses[0].last_price = ""
            state.lesson_name.courses[0].sticker = "Yeni"
            state.lesson_name.url = "/preview/javascript"

        },
        fillVeri({state}) {
            state.lesson_name.title = "Veri Bilimi ile veriye dayalı kararlara öncülük edin\n"
            state.lesson_name.paragraph = "Veri bilimi her yerdedir. Daha iyi veri bilimi uygulamaları, şirketlerin gereksiz maliyetleri azaltmalarını, bilgi işlemi otomatikleştirmelerini ve pazarları analiz etmelerini sağlıyor. Temel olarak veri bilimi, rekabetçi bir küresel ortamda ilerlemenin anahtarıdır.\n" +
                "\n"
            state.lesson_name.button_title = "Veri Bilimi kurslarını keşfedin"
            state.lesson_name.courses[0].image_url = "https://img-c.udemycdn.com/course/240x135/1750344_1df6_2.jpg"
            state.lesson_name.courses[0].author = "Mustafa Vahit Keskin"
            state.lesson_name.courses[0].comment = "R ile Veri Bilimi ve Machine Learning"
            state.lesson_name.courses[0].rate = "4.6"
            state.lesson_name.courses[0].vote = "1513"
            state.lesson_name.courses[0].price = "₺429.99"
            state.lesson_name.courses[0].last_price = ""
            state.lesson_name.courses[0].sticker = ""
            state.lesson_name.url = "/preview/veri"

        },
        fillAWS({state}) {
            state.lesson_name.title = "AWS Sertifikası ile bulut bilgi işlem alanında uzmanlaşın\n"
            state.lesson_name.paragraph = "Amazon Web Services sürekli gelişen bir bulut ekosistemi olduğundan, yeni AWS hizmetlerine ve özelliklerine ayak uydurmak çok önemli olabilir. Bu nedenle bir AWS sertifikası almak harika bir BT kariyer hamlesidir. Gelecekteki işverenlerin gözünde, siz bir AWS yetkilisisiniz."
            state.lesson_name.button_title = "AWS Sertifikası kurslarını keşfedin"
            state.lesson_name.courses[0].image_url = ""
            state.lesson_name.courses[0].author = ""
            state.lesson_name.courses[0].comment = ""
            state.lesson_name.courses[0].rate = ""
            state.lesson_name.courses[0].vote = ""
            state.lesson_name.courses[0].price = ""
            state.lesson_name.courses[0].last_price = ""
            state.lesson_name.courses[0].sticker = ""
        },
        fillDraw({state}) {
            state.lesson_name.title = "Çizim ile yaratıcı yetkinliklerinizi genişletin\n"
            state.lesson_name.paragraph = "Çizim, birçok sanat formunun dayandığı temel olmanın yanı sıra, aynı zamanda stresi azaltmak ve iç yaratıcılığınızı beslemek için de mükemmel bir yoldur. Çizim bize nasıl gözlemci olunacağını, ayrıntılara dikkat etmeyi ve kendimizi ifade etmeyi öğretir.\n" +
                "\n"
            state.lesson_name.button_title = "Çizim kurslarını keşfedin"
            state.lesson_name.courses[0].image_url = "https://img-c.udemycdn.com/course/240x135/2016568_f7b6_2.jpg"
            state.lesson_name.courses[0].author = "Vidobu Eğitim"
            state.lesson_name.courses[0].comment = "A'dan Z'ye Çizim Kursu:Temel Sanattan Dijital Çizime"
            state.lesson_name.courses[0].rate = "4.3"
            state.lesson_name.courses[0].vote = "1.607"
            state.lesson_name.courses[0].price = "₺429.99"
            state.lesson_name.courses[0].last_price = ""
            state.lesson_name.courses[0].sticker = "En çok satan"
            state.lesson_name.url = "/preview/draw"

        },

    }


})

export default store