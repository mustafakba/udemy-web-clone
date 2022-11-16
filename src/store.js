import { createStore } from 'vuex'




const store =createStore({
    state(){
       return {
           lesson_name:
               {
                   title:"Python ile kariyer olanaklarınızı artırın",
                   paragraph :"İster makine öğrenimi, ister finans alanında çalışıyor olun, ister web geliştirme veya veri bilimi alanında kariyer yapıyor olun, Python öğrenebileceğiniz en önemli becerilerden biridir. Python'un basit sözdizimi özellikle masaüstü, web ve iş uygulamaları için uygundur." ,
                   button_title:"Python kurslarını keşfedin",
                   courses:[
                       {
                           image_url:"image/mustafa-murat-coskun-python.jpg",
                           author:"Mustafa Murat Coşkun",
                           comment:"(40+ Saat) Python | Sıfırdan İleri Seviye Programlama (2020)",
                           rate:"4.7",
                           vote:"42,505",
                           price:"₺129.99",
                           last_price:"₺459.99",
                           sticker:"En çok satan",
                       }
                   ]
               },
       }
    },
    actions:{

    }


})

export default store