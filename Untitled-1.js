const {Telegraf} = require('telegraf');

const bot = new Telegraf('1910783565:AAGrx285F4H7Skubnqn7xLl3pMWyM6Co1FA');

bot.start()

bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'hello there! Welcome to my new telegram bot.', {
    })
})
const menu = ['a','b','c','d','f'];
let my_list=[]
for(let a=0;a<menu.length;a+=2)
{   my_list.push( [ { text: menu[a],
                     callback_data : menu[a]},
    
     { text: menu[a+1],
        callback_data : menu[a+1]}]
      
);
   
}

// bot.hears('menu', ctx => {
 
//     console.log(ctx.from)
//     let menu1 = `great, here are have menu`;
//     ctx.deleteMessage();
//     bot.telegram.sendMessage(ctx.chat.id, menu
//         , {
//         reply_markup: {
//             inline_keyboard: [
//                 [

//                 ],

//             ]
//         }
//     })
// })
bot.hears('animals', ctx => {
    console.log(ctx.message.message_id)
    let animalMessage = `great, here are pictures of animals you would love`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, animalMessage, {
        reply_markup: {
            inline_keyboard:my_list
               
            
        }
    })
})

bot.action('ali',ctx=>ctx.reply('you send ali '))

bot.action('dog', ctx => {
    console.log('get inline keyboard dog ') ;
    ctx.reply(' i get dog CALLBACKE ')
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "res/dog.jpeg"
    })

})



bot.action('cat', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "res/cat.jpeg"
    })

})
bot.hears('phone', (ctx, next) => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Can we get access to your phone number?', requestPhoneKeyboard);

})



bot.hears("location", (ctx) => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'Can we access your location?', requestLocationKeyboard);
})

const requestPhoneKeyboard = {
    "reply_markup": {
        "one_time_keyboard": true,
        "keyboard": [
            [{
                text: "My phone number",
                request_contact: true,
                one_time_keyboard: true
            }],
            ["Cancel"]
        ]
    }
};


const requestLocationKeyboard = {
    "reply_markup": {
        "one_time_keyboard": true,
        "keyboard": [
            [{
                text: "My location",
                request_location: true,
                one_time_keyboard: true
            }],
            ["Cancel"]
        ]
    }

}
console.log('mohmd');
bot.launch();


