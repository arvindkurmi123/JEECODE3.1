let hello = document.querySelector('#helloTag');
let scrembles = document.querySelector('#changer');
function changeColor(color, delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            // console.log("colorchangercalled");
            hello.style.color = color;
            resolve('colorChanged');
        }, delay);
    });
}
let textElements = '';
let cursor = true;
function addScremble(char,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            textElements = textElements+`${char}`;
            // console.log(textElements);
            // console.log(scrembles.innerHTML);
            scrembles.innerHTML = `${textElements}|`;
            resolve("text added");
        }, delay);
    });
}
function removeScremble(delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            textElements = textElements.substring(0,textElements.length-1);
            // console.log(textElements);
            // console.log(scrembles.innerHTML);
            scrembles.innerHTML = `${textElements}|`;
            // console.log(scrembles.innerHTML);
            resolve("text removed");
        }, delay);
    });
}
function blinkcursor(char,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            // console.log(textElements);
            // console.log(scrembles.innerHTML);
            scrembles.innerHTML = `${textElements}|`;
            // console.log(scrembles.innerHTML);
            resolve("cursor blinked");
        }, delay);
    });
}
function Cursor(char,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            // console.log(textElements);
            // console.log(scrembles.innerHTML);
            scrembles.innerHTML = `${textElements}`;
            // console.log(scrembles.innerHTML);
            resolve("cursor blinked");
        }, delay);
    });
}
async function colorBlinker(){
    await changeColor('red',1000);
    await changeColor('orange',1000);
    await changeColor('green',1000);
    await changeColor('blue',1000);
    // await changeColor('yellow',1000);
    await changeColor('purple',1000);
    await changeColor('rgb(39, 39, 39)',1000);

}

async function infinite(){
    while(true){
        await colorBlinker();
    }
}
infinite();

async function printline(){
    let count = 5;
    while(true){
        let line = "Be the one among many ";
        for(char in line){
            await addScremble(line.charAt(char),100);
        }
        await Cursor('',400);
        await blinkcursor('',800);
        await Cursor('',400);
        for(char in line){
            await removeScremble(100);
        }
        await blinkcursor('',800);
        await Cursor('',400);
        
        line = "Track Your Progress! ";
        for(char in line){
            await addScremble(line.charAt(char),100);
        }
        await Cursor('',400);
        for(char in line){

            await removeScremble(100);
        }
        await blinkcursor('',800);
        await Cursor('',400);
        line = "Prepare for JEE ";
        for(char in line){
            await addScremble(line.charAt(char),100);
        }
        await Cursor('',400);
        await blinkcursor('',800);
        await Cursor('',400);
        for(char in line){

            await removeScremble(100);
        }
        await blinkcursor('',800);
        await Cursor('',400);

    }
}

printline();