window.onload=()=>{
    const path="images/";
    const images=["cat1.jpg","cat2.jpg","cat3.jpg"];
    const ele=document.getElementById("mainImage");
    let index=0;
    ele.addEventListener("click",(e)=>{
        console.log("in");
    e.target.src=path+images[++index % images.length];
    });
};
