"use strict"; 

$(document).ready(() => {
    $.get("https://www.reddit.com/r/shiba.json").then((response) => {
        const sweetthangs = response.data.children; 

        for (let i= 0; i <= sweetthangs.length; i++) {
            console.log(sweetthangs[i])
            $("body").append (`
            <section>
                <h3>Title ${sweetthangs[i].data.title}<h3>
                <p>Author: ${sweetthangs[i].data.author}</p>   
                <p>Ups: ${sweetthangs[i].data.ups} </p>   
                <p>Created: ${sweetthangs[i].data.created} </p>
                <img src="${sweetthangs[i].data.thumbnail}">
                <a href="https://www.reddit.com${sweetthangs[i].data.permalink}">Link</a>
            `)
        }
    })

}); 