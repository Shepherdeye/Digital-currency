let loading = document.getElementById("loading");

let divContent = document.querySelectorAll(".col-md-6");

let divContentArray=[...divContent];

console.log(divContentArray)

let loadingPage=setTimeout(() => {
    
    loading.style.display="none";
    
 }, 1500);

 /**********************************************************************************/

 let curranyInfo = 
 [
     {
        defenation:"منصة   Gate.io :",
        nameid:"Gate.io",
        Explain:`مؤخرا اصبحت من افضل المنصات واسهلها استعمالا ، انصح بها مع بينانس او حتى لو كنت تريد التداول فيها وحدها فهي مليئة بالعملات الجدد.`,
        image_url:"images/Gate io.jpg",
        url:"https://www.gate.io/signup/1648360"
     }
     ,
     {
        defenation:"منصة هيوبي Huobi  :",
        nameid:"Huobi",
        Explain:`منصة للعملات الرقمية ، تأسست في الصين وتدعم حوالي 250 عملة مشفرة. لدى Huobi نسختان مختلفتان – Huobi OTC (الذي يسمح بتداول العملات المشفرة بعملات عادية وبدون رسوم صفرية) و Huobi Pro (أي لإمكانيات التداول المتقدمة).
        تعتبر هاته المنصة شبيهة لمنصة بينانس حيث لديها قاعدة جيدة من المتداولين ،حجم تداول جيد ، وواجهة مستخدم جميلة بالإضافة لتطبيق الجوال الرائع .
        لدى ممصة هيوبي ايضا عملتها الخاصة HT.`,
        image_url:"images/Huobi.jpg",
        url:"https://www.huobi.de.com/en-us/register/?invite_code=aty53"
     }
     ,
     {
        defenation:" OKEX  منصة اوككس :",
        nameid:"OKEX",
        Explain:`هي واحدة من المنصات الأكثر شعبية التي تدعم أكثر من 145 عملة مشفرة ، ومقرها في هونغ كونغ. لديهم حتى العملة- OKB الخاصة بهم. لدى OKEx رسوم تداول معقولة حوالي 0.02٪ إلى 0.2٪ من رسوم الآخد و البائع.
        لا يتأخر OKEx عندما يتعلق الأمر بالتداول يوميًا ، فهو يعالج ما يقرب من 1.5 مليون دولار في العقود الآجلة للبيتكوين يوميًا. إنها أحد منصات تداول العملات العالمية الموثوقة ودات حجم التداول العالي .`,
        image_url:"images/OKEX.jpg",
        url:"https://www.okex.com/join/2729372"
     }
     ,
     {
        defenation:"منصة كوكوين           KuCoin :",
        nameid:"KuCoin",
        Explain:`KuCoinهي عبارة عن منصة تداول رائعة حصلت على الكثير من الإهتمام على مدار الستة أشهر الماضية. لا يمثل هذا الإهتمام مفاجئة بالنظر إلى الفريق الذي يقف خلفها وسهولة الاستخدام والتنقل في واجهة المستخدم.
        من حيث الحجم أيضًا ، فإنها تحتل المرتبة 25 في CMC ولديها برنامج بحيت يواصلون فيه إضافة عملات / رموز جديدة في المنصة الخاصة بهم بانتظام.
        تدعم منصة التداول هاته عملات كتيرة الا انها تعاني قليلا من مشكلة السيولة.`,
        image_url:"images/KuCoin.jpg",
        url:"https://www.kucoin.com/?rcode=27betcu&lang=en_US"
     }
     ,
     {
        defenation:"منصة بيتركس  Bittrex :",
        nameid:"Bittrex",
        Explain:`هي منصة للعملات المشفرة مقرها الولايات المتحدة في سياتل هاته المنصة مشهورة ايضا بين المتداولين ، حيث يعتبر الأمن العامل الأكثر تفرداً بها ، مما يجعلها أحد أفضل منصات تبادل العملة المشفرة في عام 2019. وهناك أكثر من 190 عملة إلكترونية مدرجة هناك ، دون حوالي 284 زوجًا فريدًا.
        تتقاضى Bittrex نسبة 0.25٪ من كل عملية تداول. يمكن لشركة Bittrex معالجة التداولات بمجرد حدوثها بفضل تصميمها باستخدام الحوسبة المرنة، تحتاج للتحقق من هويتك للاستعمال هاته المنصة.`,
        image_url:"images/Bittrex.jpg",
        url:"https://global.bittrex.com/"
     }
 ]

 function displayInfo(){
    let str="";
    
    for(let i = 0 ; i < curranyInfo.length ; i++){

    divContentArray[i].addEventListener("click",function(){
        str= `
       
        <img class="w-100 pb-3" src="${curranyInfo[i].image_url}">
        <h1 style="Line-height:2">${curranyInfo[i].defenation}</h1>
        <p>${curranyInfo[i].Explain}</p>
        <a href="${curranyInfo[i].url}" class="btn btn-primary" target="_blank">لينك المنصة<a>
    `
    document.getElementById("exampleModalLabel").innerHTML=curranyInfo[i].nameid;
    document.getElementById("DC-info").innerHTML = str;

    })
     
 }}