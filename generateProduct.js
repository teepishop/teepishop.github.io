const fs = require('fs')
let arrCategories = []
for (let i = 1; i <= 5; i++) {
    let category_title = 'Name Category ' + i
    let category_url = 'category-' + i
    let category_name = 'category' + i
    arrCategories.push({
        title: category_name,
        name: category_name,
        url: category_url
    })
    let arrProduct = []
    for (let j = 1; j <= 10; j++) {
        let product_title = 'Name Product ' + i + '-' + j
        let product_image = 'https://dummyimage.com/600x400/000/fff&text=category+' + i + '+product+' + j
        let product_price = new Date().getTime().toString().slice(-3)
        let product_url = 'product-detail-' + i + '-' + j
        let product_description = 'description product ' + i + '-' + j
        arrProduct.push({
            title: product_title,
            image: product_image,
            price: product_price,
            url: product_url,
            description: product_description
            
        })
        fs.writeFileSync('products/' + product_url + '.md',
            `---
layout: product_detail
description: ${product_description}
product_title: ${product_title}
category_name: ${category_name}
category_url: ${category_url}
category_title : ${category_title}
permalink: ${product_url}
---`)
    }

    fs.writeFileSync('./_data/products/category' + i + '.json', JSON.stringify(arrProduct))
    // Generate file .md in categories
    fs.writeFileSync('./categories/' + category_url + '.md',
        `---
layout: category
description: Tổng hợp các bài viết ${category_name}
category_title : ${category_title}
category_name: ${category_name}
permalink: ${category_url}
---`)
}
// Generate categories.json
fs.writeFileSync('./_data/categories.json', JSON.stringify(arrCategories))