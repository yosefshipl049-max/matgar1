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
    if (cart.style.display === 'block' && !cart.contains(e.target) && !btn.contains(e.target)) {
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
        discount: '',
        image: '1.jpeg'
    },
    {
        Type: 'رجالي',
        name: 'قميص كلاسيك',
        price: '٤٢٩ ج.م',
        evaluation: '4.5',
        del: '٥٢٠ ج.م',
        discount: '-18%',
        image: '2.jpeg'
    },
    {
        Type: 'حريمي',
        name: 'هودي شتوي',
        price: '٥٩٩ ج.م',
        evaluation: '4.9',
        del: '٧٦٠ ج.م',
        discount: '-21%',
        image: '3.jpeg'
    },
    {
        Type: 'رجالي',
        name: 'جاكيت جينز',
        price: '٦٧٩ ج.م',
        evaluation: '4.6',
        del: '',
        discount: '',
        image: '4.jpeg'
    },
    {
        Type: 'رجالي',
        name: 'بنطلون جينز',
        price: '٤٨٩ ج.م',
        evaluation: '4.7',
        del: '٥٧٠ ج.م',
        discount: '-14%',
        image: '5.jpeg'
    },
    {
        Type: 'أطفال',
        name: 'سويت شيرت',
        price: '٣٢٩ ج.م',
        evaluation: '4.8',
        del: '',
        discount: '',
        image: '6.jpeg'
    },
    {
        Type: 'حريمي',
        name: 'فستان أنيق',
        price: '٧٤٩ ج.م',
        evaluation: '4.9',
        del: '٩٨٠ ج.م',
        discount: '-24%',
        image: '7.jpeg'
    },
    {
        Type: 'حريمي',
        name: 'جاكيت نسائي',
        price: '٨٢٩ ج.م',
        evaluation: '4.8',
        del: '',
        discount: '',
        image: '8.jpeg'
    },
    {
        Type: 'أحذية',
        name: 'حذاء رياضي',
        price: '٧١٩ ج.م',
        evaluation: '4.6',
        del: '٨٥٠ ج.م',
        discount: '-15%',
        image: '9.jpeg'
    },
    {
        Type: 'إكسسوارات',
        name: 'كاب',
        price: '١٥٩ ج.م',
        evaluation: '4.5',
        del: '',
        discount: '',
        image: '10.jpeg'
    },
    {
        Type: 'إكسسوارات',
        name: 'حقيبة',
        price: '٥٤٩ ج.م',
        evaluation: '4.8',
        del: '٦٦٠ ج.م',
        discount: '17%',
        image: '11.jpeg'
    },
    {
        Type: 'إكسسوارات',
        name: 'ساعة',
        price: '٣٨٩ ج.م',
        evaluation: '4.6',
        del: '',
        discount: '',
        image: '12.jpeg'
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
                <img src="./image/${products[i].image}" alt="">
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
let hearts = cards.querySelectorAll('.fa-heart');
let message = document.querySelector('#message');
for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', function () {
        hearts[i].style.color = 'red';
        message.innerHTML = 'تم اضافة المنتج الي المفضله';
        message.style.display = 'block';
        setTimeout(function () {
            message.style.display = 'none';
        }, 1000);
    });
}
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
let cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
let add = cards.querySelectorAll('.btn-one');
let cartContainer = cart.querySelector('.container');
let emptyContainer = cart.querySelector('.empty-container');
let cartTotal = cart.querySelector('.cart-total');
let cartCount = document.querySelector('#cartCount');
let cartNumber = document.querySelector('#cartNumber');
let subTotal = document.querySelector('#subTotal');
let totalPrice = document.querySelector('#totalPrice');
cartContainer.style.display = 'none';
cartTotal.style.display = 'none';
function showCart() {
    if (cartProducts.length > 0) {
        emptyContainer.style.display = 'none';
        cartContainer.style.display = 'flex';
        cartTotal.style.display = 'block';
        cartContainer.innerHTML = '';
        let total = 0;
        for (let j = 0; j < cartProducts.length; j++) {
            let price = cartProducts[j].price.replace('ج.م', '').replace(/[٠-٩]/g, function (num) {
                return '٠١٢٣٤٥٦٧٨٩'.indexOf(num);
            });
            total += Number(price);
            cartContainer.innerHTML += `
                <div class="cart-product">
                    <div class="cart-info">
                        <h3>${cartProducts[j].name}</h3>
                        <p>${cartProducts[j].Type}</p>
                        <b>${cartProducts[j].price}</b>
                        <button class="delete-product" data-index="${j}">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                    <div class="cart-image">
                        <img src="./image/${cartProducts[j].image}" alt="">
                    </div>
                </div>
            `;
        }
        cartNumber.innerHTML = cartProducts.length;
        cartCount.innerHTML = `سلة التسوق (${cartProducts.length})`;
        subTotal.innerHTML = `${total} ج.م`;
        totalPrice.innerHTML = `${total + 55} ج.م`;
    } else {
        emptyContainer.style.display = 'flex';
        cartContainer.style.display = 'none';
        cartTotal.style.display = 'none';
        cartNumber.innerHTML = '0';
        cartCount.innerHTML = 'سلة التسوق (1)';
        subTotal.innerHTML = '0 ج.م';
        totalPrice.innerHTML = '55 ج.م';
    }
}
for (let i = 0; i < add.length; i++) {
    add[i].addEventListener('click', function () {
        cartProducts.push(products[i]);
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
        message.innerHTML = 'تم اضافة المنتج الي السله';
        message.style.display = 'block';
        setTimeout(function () {
            message.style.display = 'none';
        }, 1000);
        showCart();
    });
}
showCart();
cartContainer.addEventListener('click', function (e) {
    let button = e.target.closest('.delete-product');
    if (button) {
        let index = button.dataset.index;
        cartProducts.splice(index, 1);
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
        showCart();
    }
});
let ownerEmail = 'yosefshipl049@gmail.com';
let checkoutButton = cart.querySelector('.cart-total .btn-one');
checkoutButton.addEventListener('click', function (e) {
    e.stopPropagation();
    if (cartProducts.length === 0) {
        message.innerHTML = 'السلة فارغة';
        message.style.display = 'block';
        setTimeout(function () {
            message.style.display = 'none';
        }, 1000);
        return;
    }
    let orderDetails = '';
    let total = 0;
    for (let i = 0; i < cartProducts.length; i++) {
        let price = cartProducts[i].price.replace('ج.م', '').replace(/[٠-٩]/g, function (num) {
            return '٠١٢٣٤٥٦٧٨٩'.indexOf(num);
        });
        total += Number(price);
        orderDetails += `${i + 1}- ${cartProducts[i].name} - ${cartProducts[i].Type} - ${cartProducts[i].price}\n`;
    }
    let finalTotal = total + 55;
    cart.style.display = 'block';
    document.body.style.overflow = 'hidden';
    cart.innerHTML = `
        <div class="checkout-page">
            <div class="checkout-header">
                <div>
                    <h2>إتمام الطلب</h2>
                    <p>أدخل بياناتك لإتمام الطلب</p>
                </div>
                <i class="fa-solid fa-xmark checkout-close"></i>
            </div>
            <hr>
            <form class="checkout-form" action="https://formsubmit.co/b38198e0851b2b062e146d010a10cdb5" method="POST">
                <label>البريد الإلكتروني</label>
                <input type="email" name="email" placeholder="اكتب البريد الإلكتروني" required>
                <label>رقم الهاتف</label>
                <input type="number" name="phone" placeholder="اكتب رقم الهاتف" required>
                <div class="checkout-order">
                    <h3>تفاصيل الطلب</h3>
                    <p>${orderDetails}</p>
                    <div class="checkout-final">
                        <span>الإجمالي النهائي</span>
                        <b>${finalTotal} ج.م</b>
                    </div>
                </div>
                <input type="hidden" name="order" value="${orderDetails.replace(/"/g, '&quot;')}">
                <input type="hidden" name="total" value="${finalTotal} ج.م">
                <input type="hidden" name="_subject" value="طلب جديد من YOSEF STORE">
                <input type="hidden" name="_template" value="table">
                <button type="submit" class="checkout-submit">تأكيد الطلب</button>
            </form>
        </div>
    `;
    cart.querySelector('.checkout-close').addEventListener('click', function (e) {
        e.stopPropagation();
        cart.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    cart.querySelector('.checkout-form').addEventListener('submit', function () {
        localStorage.removeItem('cartProducts');
    });
});