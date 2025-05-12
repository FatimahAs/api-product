   document.getElementById('usernameDisplay').textContent = localStorage.getItem('loggedInUser');

   async function fetchProducts() {
       const res = await fetch('https://fakestoreapi.com/products');
       const data = await res.json();

       const container = document.getElementById('products');
       data.forEach(product => {
           const item = document.createElement('div');
           item.className = 'product-card';
           item.innerHTML = `
          <img src="${product.image}" alt="${product.title}" />
          <h3>${product.title}</h3>
          <p>${product.price} $</p>
        `;
           container.appendChild(item);
       });
   }

   fetchProducts();


   function login(e) {
       e.preventDefault();
       const username = document.getElementById('username').value;
       localStorage.setItem('loggedInUser', username);
       window.location.href = 'index.html';
   }


   function register(e) {
       e.preventDefault();
       const username = document.getElementById('username').value;
       localStorage.setItem('userName', username);
       alert('تم إنشاء الحساب!');
       window.location.href = 'login.html';
   }