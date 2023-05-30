let navBar=document.getElementById("navbar");
let navItems=document.getElementsByClassName("nav-link");
let currencyName=["Bitcoin","Ethereum","BinanceCoin","Cardano","Dogecoin","Tether","XRP","Polkadot","InternetComputer","BitcoinCash"];
let currencyIcon=["BTC","ETH","BNB","ADA","DOGE","USDT","XRP","DOT","ICP","BCH"];
let arrayOfSrc=[
"https://i-invdn-com.akamaized.net/ico_flags/80x80/v32/bitcoin.png",
"https://i-invdn-com.akamaized.net/ico_flags/80x80/v32/ethereum.png",
"https://i-invdn-com.akamaized.net/ico_flags/80x80/v32/binance-coin.png",
"https://i-invdn-com.akamaized.net/ico_flags/80x80/v32/cardano.png",
"https://i-invdn-com.akamaized.net/ico_flags/80x80/v32/dogecoin.png",
"https://i-invdn-com.akamaized.net/ico_flags/80x80/v32/tether.png",
"https://i-invdn-com.akamaized.net/ico_flags/80x80/v32/xrp.png",
"images/par.png",
"images/com.png",
"https://i-invdn-com.akamaized.net/ico_flags/80x80/v32/bitcoin-cash.png",


]
let allData=[];


 

 



async function getallcurrency(){
    let req= await fetch(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BNB,ADA,DOGE,USDT,XRP,DOT,ICP,BCH&tsyms=USD,EUR`);
    let reqData= await req.json();

    // i added the object to the map to can be loop
    let NewMap= new Map(Object.entries(reqData))
    //make a loop
   for(let i of NewMap.values() ){
   
   allData.push(i);
  
   }
    
   displayAllcurrency()
  
}

getallcurrency();

 
 



function displayAllcurrency(){
    str=``;
    
    for(let i=0;i<currencyName.length;i++){
        
        str+=`
        
        <tr>
        <td ><img class" icon" src="${arrayOfSrc[i]}" alt=""></td>
        <td scope="row" class="font-weight-bold" >${currencyName[i]}</td>
        <td>${currencyIcon[i]}</td>
        <td id="tdcolor" >${allData[i].USD}   <i class="  fa fa-dollar-sign text-warning"></i></td>
        <td >${allData[i].EUR}   <i class=" fa fa-euro-sign text-warning"></i> </td>
        <td >${allData[i].USD * 15.65 }   <i class=" text-warning fa fa-pound-sign"></i> </td>

      </tr>
        
        
        `
        
        document.getElementById("row").innerHTML=str;
        
    }
}


 let loading= document.getElementById("loading");
 let loadingPage=setTimeout(() => {
     loading.style.display="none";
    
 }, 1500);

let navBrand=document.getElementById("xnav");
let navArray=[...navItems];

function navDisplay(){
    
   

    if(document.documentElement.scrollTop>500){

       
       navBar.classList.add("bg-light");
      document.getElementById("arrow").style.opacity="0";
      document.getElementById("navbar-toggler").style.backgroundImage="url('images/iconmenu2.png')";

       for(let i=0 ; i<navArray.length;i++){
        navArray[i].classList.remove("text-warinng");
        navArray[i].classList.add("text-dark");
       
 ;
 
    }
        

    }else{
        document.getElementById("arrow").style.opacity="1";
        navBar.classList.remove("bg-light")
        navBar.style.backgroundColor="black";
        document.getElementById("navbar-toggler").style.backgroundImage="url('images/iconmenu.png')";

      

        
        for(let i=0 ; i<navArray.length;i++){
            navArray[i].classList.remove("text-dark");
            navArray[i].classList.add("text-warinng");
            console.log(navBrand)
           
        }
            
        
    }
}


window.addEventListener("scroll",navDisplay)



function changeColor(){

   

}


