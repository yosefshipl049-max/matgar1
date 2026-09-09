let btn = document.querySelector('#btn');
let cart = document.querySelector('#cart');
let mark = document.querySelector('#mark');
btn.addEventListener('click', function () {
    cart.style.display = 'block';
    document.body.style.overflow = 'hidden';
});
mark.addEventListener('click', function () {
    cart.style.display = 'none';
    document.body.style.overflow = 'auto';
});
document.addEventListener('click', function (e) {
    if (
        cart.style.display === 'block' &&
        !cart.contains(e.target) &&
        !btn.contains(e.target)
    ) {
        cart.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});
let menuIcon = document.querySelector('#menuIcon');
let links = document.querySelector('.links');
menuIcon.addEventListener('click', function () {
    links.classList.toggle('active');
});
const products = [
    {
        Type: 'رجالي',
        name: 'تشيرت أساسي',
        price: '٢٤٩ ج.م',
        evaluation: '4.8',
        del: '',
        discount: ''
    },
    {
        Type: 'رجالي',
        name: 'قميص كلاسيك',
        price: '٤٢٩ ج.م',
        evaluation: '4.5',
        del: '٥٢٠ ج.م',
        discount: '-18%'
    },
    {
        Type: 'حريمي',
        name: 'هودي شتوي',
        price: '٥٩٩ ج.م',
        evaluation: '4.9',
        del: '٧٦٠ ج.م',
        discount: '-21%'
    },
    {
        Type: 'رجالي',
        name: 'جاكيت جينز',
        price: '٦٧٩ ج.م',
        evaluation: '4.6',
        del: '',
        discount: ''
    },
    {
        Type: 'رجالي',
        name: 'بنطلون جينز',
        price: '٤٨٩ ج.م',
        evaluation: '4.7',
        del: '٥٧٠ ج.م',
        discount: '-14%'
    },
    {
        Type: 'أطفال',
        name: 'سويت شيرت',
        price: '٣٢٩ ج.م',
        evaluation: '4.8',
        del: '',
        discount: ''
    },
    {
        Type: 'حريمي',
        name: 'فستان أنيق',
        price: '٧٤٩ ج.م',
        evaluation: '4.9',
        del: '٩٨٠ ج.م',
        discount: '-24%'
    },
    {
        Type: 'حريمي',
        name: 'جاكيت نسائي',
        price: '٨٢٩ ج.م',
        evaluation: '4.8',
        del: '',
        discount: ''
    },
    {
        Type: 'أحذية',
        name: 'حذاء رياضي',
        price: '٧١٩ ج.م',
        evaluation: '4.6',
        del: '٨٥٠ ج.م',
        discount: '-15%'
    },
    {
        Type: 'إكسسوارات',
        name: 'كاب',
        price: '١٥٩ ج.م',
        evaluation: '4.5',
        del: '',
        discount: ''
    },
    {
        Type: 'إكسسوارات',
        name: 'حقيبة',
        price: '٥٤٩ ج.م',
        evaluation: '4.8',
        del: '٦٦٠ ج.م',
        discount: '17%'
    },
    {
        Type: 'إكسسوارات',
        name: 'ساعة',
        price: '٣٨٩ ج.م',
        evaluation: '4.6',
        del: '',
        discount: ''
    }
];
const product = [
    {
        type: 'رجالي',
        name: 'قطع يوميه بلمسه واثقه'
    },
    {
        type: 'حريمي',
        name: 'اناقه تتحدث عنك'
    },
    {
        type: 'اطفال',
        name: 'الوان للحظات الجميله'
    },
    {
        type: 'احذيه',
        name: 'خطوتك تبدا من هنا'
    },
    {
        type: 'اكسسوارات',
        name: 'التفاصيل تصنع الفرق'
    }
];
let cards = document.querySelector('.cards');
cards.innerHTML = '';
for (let i = 0; i < products.length; i++) {
    cards.innerHTML += `
        <div class="card">
            <div>
                <img src="./image/${i + 1}.jpeg" alt="">
                <i class="fa-regular fa-heart"></i>
                <p class="p">${products[i].discount}</p>
            </div>
            <div>
                <p>${products[i].Type}</p>
                <h3>${products[i].name}</h3>
                <div>
                    <i class="fa-solid fa-star"></i>
                    <span>${products[i].evaluation}</span>
                </div>
            </div>
            <div>
                <b>${products[i].price}</b>
                <del>${products[i].del}</del>
                <button class="btn-one">+</button>
            </div>
        </div>
    `;
}
let container = document.querySelector('#container');
let card = cards.querySelectorAll('.card');
container.innerHTML = '';
for (let i = 0; i < product.length; i++) {
    container.innerHTML += `
        <div class="card">
            <div class="image">
                <img src="./image2/${i + 1}.jpeg" alt="">
                <div class="one">
                    <h2>${product[i].type}</h2>
                    <p>${product[i].name}</p>
                </div>
            </div>
        </div>
    `;
}
let search = document.querySelector('#search');
search.addEventListener('keyup', function () {
    let pro = search.value;
    for (let i = 0; i < products.length; i++) {
        if (products[i].name.includes(pro)) {
            card[i].style.display = 'block';
            card[i].scrollIntoView();
        } else {
            card[i].style.display = 'none';
        }
    }
});
let cartProducts = [];
let add = cards.querySelectorAll('.btn-one');
let cartContainer = cart.querySelector('.container');
let emptyContainer = cart.querySelector('.empty-container');
let cartTotal = cart.querySelector('.cart-total');
let cartCount = document.querySelector('#cartCount');
let subTotal = document.querySelector('#subTotal');
let totalPrice = document.querySelector('#totalPrice');
cartContainer.style.display = 'none';
cartTotal.style.display = 'none';
for (let i = 0; i < add.length; i++) {
    add[i].addEventListener('click', function () {
        cartProducts.push(products[i]);
        cartCount.innerHTML = `سلة التسوق (${cartProducts.length})`;
        emptyContainer.style.display = 'none';
        cartContainer.style.display = 'flex';
        cartTotal.style.display = 'block';
        cartContainer.innerHTML = '';
        let total = 0;
        for (let j = 0; j < cartProducts.length; j++) {
            let price = cartProducts[j].price
                .replace(' ج.م', '')
                .replace(/[٠-٩]/g, function (num) {
                    return '٠١٢٣٤٥٦٧٨٩'.indexOf(num);
                });
            total += Number(price);
            cartContainer.innerHTML += `
                <div class="cart-product">
                    <div class="cart-info">
                        <h3>${cartProducts[j].name}</h3>
                        <p>${cartProducts[j].Type}</p>
                        <b>${cartProducts[j].price}</b>
                    </div>
                    <div class="cart-image">
                        <img src="./image/${products.indexOf(cartProducts[j]) + 1}.jpeg" alt="">
                    </div>
                </div>
            `;
        }
        subTotal.innerHTML = `${total} ج.م`;
        totalPrice.innerHTML = `${total + 55} ج.م`;
    });
}