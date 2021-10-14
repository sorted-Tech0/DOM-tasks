let s1 = document.querySelector("#s1");
let s2 = document.querySelector("#s2");
let s3 = document.querySelector("#s3");

document.documentElement.addEventListener("keydown", (e) => {
    let key = e.key;
    if(key === "1"){
        s1.scrollIntoView();
    } else if(key === "2"){
        s2.scrollIntoView();
    } else if(key === "3"){
        s3.scrollIntoView();
    } else if(key === "t"){
        window.scrollTo(0,0)
    } else if(key === "b"){
        let body = document.querySelector("body");
        let dimensions = body.getBoundingClientRect();
        window.scrollTo(0, dimensions.height);
    }
})