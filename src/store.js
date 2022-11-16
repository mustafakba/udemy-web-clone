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
                           image_url:"src/image/mustafa-murat-coskun-python.jpg",
                           author:"Mustafa Murat",
                           rate:"5 Yıldız",
                           price:"429₺",
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