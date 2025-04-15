let selectedProduct;

async function fetchData() {
  const res = await fetch('products.json');
  const data = await res.json();

  const allProducts = data.products[0];
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  // Find product by ID
  for (let category in allProducts) {
    const found = allProducts[category].find(p => p.id == productId);
    if (found) {
      selectedProduct = found;
      break;
    }
  }

  renderProductDetails();
}

function renderProductDetails() {
  const container = document.getElementById('product-details');
  if (!selectedProduct) {
    container.innerHTML = '<p>Product not found.</p>';
    return;
  }

  container.innerHTML = `
    <div class="bg-white min-h-screen">
      <div class="max-w-6xl mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row gap-8">
        
          <!-- Thumbnails -->
          <div class="flex md:flex-col gap-4 items-center md:items-start">
            ${[selectedProduct.thumbnail, ...selectedProduct.images.slice(0, 2)]
              .map(img => `
                <img onclick="changeImage('${img}')" src="${img}" alt="Thumbnail" class="w-20 h-20 object-cover rounded cursor-pointer opacity-60 hover:opacity-100" />
              `).join('')}
          </div>

          <!-- Main Image -->
          <div class="flex-1">
            <img id="mainImage" src="${selectedProduct.thumbnail}" alt="Product Image" class="w-full h-auto rounded shadow-md" />
          </div>

          <!-- Product Info -->
          <div class="flex-1">
            <h1 class="text-3xl font-bold mb-4">${selectedProduct.title}</h1>
            <p class="text-gray-600 mb-4">${selectedProduct.description}</p>

   <div class="flex gap-3" id="size-selector">
  <button class="size-btn w-10 h-10 rounded-full bg-black text-white text-sm font-semibold flex items-center justify-center ring-1 ring-black">
    S
  </button>
  <button class="size-btn w-10 h-10 rounded-full text-sm font-semibold flex items-center justify-center ring-1 ring-black hover:bg-gray-100">
    M
  </button>
  <button class="size-btn w-10 h-10 rounded-full text-sm font-semibold flex items-center justify-center ring-1 ring-black hover:bg-gray-100">
    L
  </button>
  <button class="size-btn w-10 h-10 rounded-full text-sm font-semibold flex items-center justify-center ring-1 ring-black hover:bg-gray-100">
    XL
  </button>
  <button class="size-btn w-10 h-10 rounded-full text-sm font-semibold flex items-center justify-center ring-1 ring-black hover:bg-gray-100">
    2XL
  </button>
</div>






            <p class="text-2xl font-semibold mb-6">₹${selectedProduct.price}</p>

            <!-- Quantity Selector -->
           <div class="mb-6">
  <label class="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
  <div class="flex items-center space-x-2">
    <button type="button" onclick="changeQuantity(-1)" class="px-3 py-1 text-xl font-bold bg-gray-300 rounded hover:bg-gray-400">-</button>
    <div id="quantity-display" class="w-16 text-center border rounded p-2">1</div>
    <button type="button" onclick="changeQuantity(1)" class="px-3 py-1 text-xl font-bold bg-gray-300 rounded hover:bg-gray-400">+</button>
  </div>
</div> 

                  <!-- Sold Out Button -->
<div class="mb-6">
  <button class="sold-out-btn">Sold Out</button>
</div>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  `;

 
  if (selectedProduct.quantity > 0) {
    const buyBtn = document.getElementById('buy-btn');
    const contactForm = document.getElementById('contact-form');
    buyBtn.addEventListener('click', () => {
      contactForm.style.display = 'block';
      contactForm.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

function changeImage(img) {
  const mainImage = document.getElementById('mainImage');
  mainImage.src = img;
}

function changeQuantity(amount) {
  const quantityInput = document.getElementById('quantity');
  let current = parseInt(quantityInput.value, 10);
  quantityInput.value = Math.max(1, current + amount);
}


let currentQuantity = 1;

function changeQuantity(amount) {
  currentQuantity = Math.max(1, currentQuantity + amount);
  document.getElementById('quantity-display').textContent = currentQuantity;
}


fetchData();
