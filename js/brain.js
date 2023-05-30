var myCountainer=document.getElementById("container"),
    myChild1=document.getElementById("child1"), 
    myChild2=document.getElementById("child2"),
    myForm=document.getElementById("form"),
    myInput1=document.getElementById("name"), 
    myInput2=document.getElementById("password"),
    myInput3=document.getElementById("login"),
    myArrow=document.getElementById("arrow"),
    myChange=document.getElementById("change"),
    myHid=document.getElementById("hid"),
    myHid2=document.getElementById("hid2"),
    myXinput1=document.getElementById("xip1"),
    myXinput2=document.getElementById("xip2"),
    myXinput3=document.getElementById("xip3"),
    myXinput4=document.getElementById("xip4"),
    myButton=document.getElementById("buttonx");

    myArrow.onclick=function(){
        "use strict";
        myChild2.classList.remove("child2");
        myChild2.classList.add("child2Activ");
        myChild1.classList.remove("child1");
        myChild1.classList.add("child1Activ");
        myHid.style.display="flex";
        myHid2.style.display="flex";
        myXinput1.focus();
       
    }
    myChange.onclick=function(){
        "use strict";
        myHid.style.display="none";
        myHid2.style.display="none";
        myChild2.classList.remove("child2Activ");
        myChild2.classList.add("child2");
        myChild1.classList.remove("child1Activ");
        myChild1.classList.add("child1");

            
       
    }
myInput1.onfocus=function(){
    "use strict";
    this.setAttribute("placeholder","");
    this.style.boxShadow="1px 1px 5px #fff"
}
myInput1.onblur=function(){
    "use strict";
    this.setAttribute("placeholder","Type Your Email");
    this.style.boxShadow=""
}
myInput2.onfocus=function(){
    "use strict";
    this.setAttribute("placeholder","");
    this.style.boxShadow="1px 1px 5px #fff"
}
myInput2.onblur=function(){
    "use strict";
    this.setAttribute("placeholder","Type Your Password");
    this.style.boxShadow=""
}
myInput3.onclick=function(){
    "use strict";
    
    this.style.boxShadow="1px 1px 5px #006"
    this.style.transform="scale(.8,.8)"
  
}
myInput3.onblur=function(){
    "use strict";
    
    
    this.style.transform="scale(1,1)"
 
}
myXinput1.onfocus=function(){
    "use strict";
    this.setAttribute("placeholder","");
    this.style.boxShadow="1px 1px 5px #fff";
   
   this.style.borderBottom="1px solid #000";

}
myXinput1.onblur=function(){
    "use strict";
    this.setAttribute("placeholder","Username");
    this.style.boxShadow=""
    this.style.borderBottom="1px solid #000";
    this.style.borderBottom="1px solid #0000003b";
    
}
myXinput2.onfocus=function(){
    "use strict";
    this.setAttribute("placeholder","");
    this.style.boxShadow="1px 1px 5px #fff";
    this.style.borderBottom="1px solid #000";
}
myXinput2.onblur=function(){
    "use strict";
    this.setAttribute("placeholder","Email");
    this.style.boxShadow=""
    this.style.borderBottom="1px solid #0000003b";
}
myXinput3.onfocus=function(){
    "use strict";
    this.setAttribute("placeholder","");
    this.style.boxShadow="1px 1px 5px #fff";
    this.style.borderBottom="1px solid #000";
}
myXinput3.onblur=function(){
    "use strict";
    this.setAttribute("placeholder","Password");
    this.style.boxShadow=""
    this.style.borderBottom="1px solid #0000003b";
}
myXinput4.onfocus=function(){
    "use strict";
    this.setAttribute("placeholder","");
    this.style.boxShadow="1px 1px 5px #fff";
    this.style.borderBottom="1px solid #000";
 
}
myXinput4.onblur=function(){
    "use strict";
    this.setAttribute("placeholder","Confirm password");
    this.style.boxShadow=""
    this.style.borderBottom="1px solid #0000003b";
}
let loading= document.getElementById("loading");
let loadingPage=setTimeout(() => {
    loading.style.display="none";
   
}, 2000);