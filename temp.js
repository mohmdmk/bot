
const menu = ['a','b','c','d'];
let my_list=[]
for(let a=0;a<menu.length;a++)
{   my_list.push( [ { text: menu[a],
                     callback_data : menu[a]}]
    );
 
   
}


console.log(my_list)