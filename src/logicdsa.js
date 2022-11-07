// const dsa=document.getElementById('dsa');

// const justTry=(e)=>{
//     console.log('ok');
//     console.log(e.target.id);
// }

// dsa.onclick=justTry;

const renderData=()=>{
    if(localStorage.getItem('mainData')==null){
        
        return;
    }else{

    
    const ourData=JSON.parse(localStorage.getItem('mainData'));
//     const mainPage=document.getElementById('mainPage');
//     mainPage.innerHTML='';
//     for(i=0;i<ourData.length;i++){
//         mainPage.innerHTML+=`
//         <div class='make-border' >
            
//             <div id="showImg">
        
//             </div>
//             <div id="showData">
//                 <h1>${ourData[i]['title']}</h1>
//                 <p>${ourData[i]['ourNote']}</p>    
//             </div>
//             <div id="tools">
//                 <button>cyan</button>
//                 <button>blue</button>
//                 <button>edit</button>
//                 <p>${ourData[i]['ourTag']}</p>
//             </div>
        
//         </div>`
//         ;
    
// }

const ourDsa=document.getElementById('ourDsa');
    console.log('ourDsa is : ',ourDsa);
    for(i=0;i<ourData.length;i++){
        console.log('trying')
        if(ourData[i]['ourTag']==='dsa'){
            console.log('gotit')
        ourDsa.innerHTML+=`
        <div class='make-border' >
            
            <div id="showData">
                <h1>${ourData[i]['title']}</h1>
                <pre>${ourData[i]['ourNote']}</pre>    
            </div>
            <div id="tools">
                <button>cyan</button>
                <button>blue</button>
                <button>edit</button>
                <p>${ourData[i]['ourTag']}</p>
            </div>
        </div>`
        ;
    }else{
        console.log('not matched');
    }
}
}
};
renderData();

