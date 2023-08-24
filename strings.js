
// var string1  = "working on the strings"
// function values() {
//     console.log("hiiiii");
//     string1 = "working on the strings";
//     string2 = "working on the strings";
//     console.log("kkkk");
//     if (string1.match(string2)) {
//     console.log(string2,"lllll");

//         return true;
//     } else {
//     console.log(string1);

//         return false; 
    
//     }
// }
// values()
function print(){
   let windows = "Is a operating system";
   let mac = "Is a operating systems";
   if (windows.match(mac)){
    console.log(mac);
    return true;
   }else{
    console.log(windows);
    return false;
   }
}
print()