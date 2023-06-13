// DOM MANIPULATION
// Goal: Retail Site 
    // Dynamically change the Entire Site with a click of a button
    // General -- Mens -- Womens -- Children

    let majorContainer = {
        mens: {
            headImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            optionTags: ["Boots", "Flannels", "Rugged Wear", "Shaving Cream"],
            productImages: [
                {
                    name: 'Sneakers',
                    pic: "https://images.unsplash.com/photo-1527010154944-f2241763d806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                },
                {
                    name: 'Boots',
                    pic: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                },
                {
                    name: 'Flannels',
                    pic: "https://images.unsplash.com/photo-1638718297700-e828368a54e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Scarves',
                    pic: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Hoodies',
                    pic: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Hats',
                    pic: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=723&q=80"
                },
            ],
            textDescription : `A collection designed around everyday comfort, with a nod to authentic workwear traditions.`,
            lowImage: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
        },
        women: {
            headImage: "https://im.uniqlo.com/global-cms/spa/res1fd53b8da747181302080cdc632b86bdfr.jpg",
            optionTags: ["T-Shirts", "UT: Graphic Tees", "Shirts & Blouses", "Shorts", "Pants"],
            productImages: [
                {
                    name: 'T-Shirts',
                    pic: "https://im.uniqlo.com/global-cms/spa/res976e703256bccbcc7bb3ad74e8917050fr.jpg",
                },
                {
                    name: 'UT: Graphic Tees',
                    pic: "https://im.uniqlo.com/global-cms/spa/res3eba18caf0639f1ca03ede073495345cfr.jpg",
                },
                {
                    name: 'Shirts & Blouses',
                    pic: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjB0JTIwc2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60",
                },
                {
                    name: 'Shorts',
                    pic: "https://im.uniqlo.com/global-cms/spa/res0dc40777769aa428b5851384b4dde936fr.jpg",
                },
                {
                    name: 'Pants',
                    pic: "https://im.uniqlo.com/global-cms/spa/resd937213135757e86673f8d0f86c5671ffr.jpg",
                }
            ],
            textDescription: "2023 Spring/Summer Collection. A collection that moves freely between innerwear and clothes. Evolving beauty and comfort for all women.",
            lowImage: "https://api.fastretailing.com/ugc/v1/uq/gl/OFFICIAL_IMAGES/23041114957_official_feature_r-600-800"
        },
        kids: {
            headImage: "https://im.uniqlo.com/global-cms/spa/resa1f97a1bbcf0e402ab9df31f14ce98d9fr.jpg",
            optionTags: ["T-Shirts", "UT: Graphic Tees", "Sweatshirts & Hoodies", "Shorts"],
            productImages: [
                {
                    name: 'T-Shirts',
                    pic: "https://im.uniqlo.com/global-cms/spa/resc9a99d8b1c93aed1506cf8609832b1f0fr.jpg",
                },
                {
                    name: 'UT: Graphic Tees',
                    pic: "https://im.uniqlo.com/global-cms/spa/res173dbe738e7e719a97e6da47f5f897f8fr.jpg",
                },
                {
                    name: 'Sweatshirts & Hoodies',
                    pic: "https://im.uniqlo.com/global-cms/spa/resdce1882f2a01462fdca23b110c2bfce5fr.jpg",
                },
                {
                    name: 'Shorts',
                    pic: "https://im.uniqlo.com/global-cms/spa/res749c33b0490300f311015c91e9257aaffr.jpg",
                },
                {
                    name: 'Socks',
                    pic: "https://im.uniqlo.com/global-cms/spa/res40d3467b45545991f7cf615eb64c0d8dfr.jpg",
                },
                {
                    name: 'Dresses',
                    pic: "https://im.uniqlo.com/global-cms/spa/res74dcb689dcd74598861c7a83c8330474fr.jpg",
                }
            ],
            textDescription: `Kid-Approved Styles - Outfit them in comfortable looks they'll love wearing all season long.`,
            lowImage: "https://im.uniqlo.com/global-cms/spa/res20d1b70433021122c4d681f887738bb7fr.jpg"
        }
    }
// -----------------------

let mainImage = document.querySelector('.mainImg')
let topPic = document.querySelector('.topPic')
let options = document.querySelectorAll('.choice')
let productDiv = document.querySelectorAll('.productDiv')
let pic = document.querySelector('.polaroid')
let textBox= document.querySelector('.textContainer')
const products = document.querySelectorAll('.product')




const changeAll = (person) => {
    changeTopPic(person)
    changeOptions(person)
    changeProduct(person)
    changeText(person)
    changeLowPic(person)
}

// change top pic
const changeTopPic = (person) => {
    if(person === "mens"){
        topPic.src = majorContainer.mens.headImage
    } else if(person === "women"){
        topPic.src = majorContainer.women.headImage
    } else if(person === "kids"){
        topPic.src = majorContainer.kids.headImage
    }
}

// change option tags
const changeOptions = (person) => {
    if(person === "mens"){
        person = majorContainer.mens.optionTags
    } else if(person === "women"){
        person = majorContainer.women.optionTags
    } else if(person === "kids"){
        person = majorContainer.kids.optionTags
    }

    for(let i = 0; i < person.length; i++){
        options[i].innerText = person[i].toUpperCase()
    }

}

// change products displayed
const changeProduct = (person) => {
    let product = document.createElement('img')
    product.setAttribute('src', '')

    if(person === "mens"){
        person = majorContainer.mens.productImages
    } else if(person === "women"){
        person = majorContainer.women.productImages
    } else if(person === 'kids'){
        person = majorContainer.kids.productImages
    }

    for(let i = 0; i < person.length; i++){
        productDiv[i].innerHTML = `<img src='${person[i].pic}'>
        <p class= "bold">${person[i].name}</p>`
    }
}

// change text Description
const changeText = (person) => {
    if(person === "mens"){
        person = majorContainer.mens.textDescription
    } else if(person === "women"){
        person = majorContainer.women.textDescription
    } else if(person === "kids"){
        person = majorContainer.kids.textDescription
    }

    textBox.innerHTML = `<h3> ${person} </h3>`
}

// change low pic
const changeLowPic = (person) => {
    if(person === "mens"){
        person = majorContainer.mens.lowImage
    } else if(person === "women"){
        person = majorContainer.women.lowImage
    } else if(person === "kids"){
        person = majorContainer.kids.lowImage
    }
    pic.src = person
}