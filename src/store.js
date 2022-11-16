import { createStore } from 'vuex'




const store =createStore({
    state(){
       return {
           lesson_name:
               {
                   title:"",
                   paragraph :"",
                   button_title:"",
                   courses:[
                       {
                           image_url:"",
                           author:"",
                           rate:"",
                           price:"",
                           sticker:"",
                       }
                   ]
               },
       }
    },
    actions:{

    }


})

export default store