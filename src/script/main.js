
fetch("http://127.0.0.1:5500/public/db.json")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    
    const productCard = document.querySelector(".product__card-render");

    data.forEach((product,index) => {
        productCard.innerHTML += `
        <div class="col l-2-4 m-4 c-6">
            <a href="index.html" class="product-item">
                <div class="product-item__img" style="background-image: url(${product?.imageURL});"></div>
                    <h4 class="product-item__heading">${product?.title}</h4>
                    <div class="product-item__price">
                        <span class="product-item__price-old">₫${product?.oldPrice}</span>
                        <span class="product-item__price-new">₫${product?.newPrice}</span>
                    </div>
                    <!-- has modif -->
                    <!-- product-item__active--liked -->
                    <div class="product-item__active  ">
                        <span class="product-item__active-like">
                            <i class="product-item__active-empty fa-regular fa-heart"></i>
                            <i class="product-item__active-fill fa-solid fa-heart"></i>
                        </span>
                        <div class="product-item__active-rating">
                                <i class="fa-solid fa-star product-item__active-rating--gold-star"></i>
                                <i class="fa-solid fa-star product-item__active-rating--gold-star"></i>
                                <i class="fa-solid fa-star product-item__active-rating--gold-star"></i>
                                <i class="fa-solid fa-star product-item__active-rating--gold-star"></i>
                                <i class="fa-solid fa-star "></i>
                        </div>
                        <span class="product-item__sell">Đã bán ${product?.countSell > 1000 ? "1k+" : product?.countSell } </span>
                        </div>
                        <div class="product-item__ogirin">
                            <span class="product-item__ogirin-brand">${product?.brandName} </span>
                            <span class="product-item__ogirin-name">${product?.countryName}</span>
                        </div>
                        ${product?.favourite === true ? `<div class="product-item__favourite">
                            <span><i class="fa-solid fa-check"></i>Yêu thích</span>
                        </div>` : "" }
                        <div class="product-item__sale">
                        <span class="product-item__sale-lbl">Giảm</span>
                        <span class="product-item__sale-percent">${product?.countSell}%</span>
                </div>
            </a>
        </div>
        `;
        
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error); // Handle any errors
  });

