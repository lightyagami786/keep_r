

const renderData=()=>{
    if(localStorage.getItem('mainData')==null){
        
        return;
    }else{

    
    const ourData=JSON.parse(localStorage.getItem('mainData'));
    const mainPage=document.getElementById('mainPage');
    mainPage.innerHTML='';
    for(i=0;i<ourData.length;i++){
        mainPage.innerHTML+=`
        <div class='make-border' >
            
            <div id="showImg">

            </div>
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
    
}

// const ourDsa=document.getElementById('ourDsa');
//     console.log('ourDsa is : ',ourDsa);
//     for(i=0;i<ourData.length;i++){
//         console.log('trying')
//         if(ourData[i]['ourTag']==='dsa'){
//             console.log('gotit')
//         ourDsa.innerHTML+=`
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
//     }else{
//         console.log('not matched');
//     }
    
// }

}


};
renderData();

const getData=()=>{
    
    const ourNote=document.getElementById('ourNote');
    
    const ourTag=document.getElementById('tags');
    
    const ourTitle=document.getElementById('ourTitle');
    
    const ourTitleValue=ourTitle.value;
    const ourNoteValue=ourNote.value;
    const ourTagValue=ourTag.value;
    const ourImgSrc=document.getElementById('ourImage');
    console.log(ourImgSrc.files[0]);
    console.log(ourNoteValue);
    console.log(ourTagValue);
    console.log(ourTitleValue);
    const pipo=JSON.parse(localStorage.getItem('mainData'));
    console.log(pipo);
    const ourLatestValue={
        title:ourTitleValue,
        ourTag:ourTagValue,
        ourNote:ourNoteValue
    }
    console.log('pipo ',pipo);
    if(pipo==null){
        console.log('=');
        localStorage.setItem('mainData',JSON.stringify([ourLatestValue]));
        renderData();
    }else{
        console.log('(');
        localStorage.setItem('mainData',JSON.stringify([...pipo,ourLatestValue]));
        renderData();
    }
}

const ourId=document.getElementById("mainPage");
console.log(ourId);


