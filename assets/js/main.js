document.addEventListener('DOMContentLoaded', ()=>{
  const products = [
    {
      id:1,
      name:'Headphone Stellar',
      price:'Rp 350.000',
      image:'assets/img/headphone-stellar.jpg',
      fullDesc:'Headphone Stellar: kenyamanan superior, suara jernih, bass kuat, cocok untuk musik dan gaming. Bahan premium, garansi 1 tahun.'
    },
    {
      id:2,
      name:'Speaker Nova',
      price:'Rp 480.000',
      image:'assets/img/speaker-nova.jpg',
      fullDesc:'Speaker Nova: portable, suara penuh, koneksi Bluetooth stabil, baterai tahan lama hingga 12 jam. Ideal untuk party kecil.'
    },
    {
      id:3,
      name:'Smartwatch Aero',
      price:'Rp 1.250.000',
      image:'assets/img/smartwatch-aero.jpg',
      fullDesc:'Smartwatch Aero: fitur kebugaran lengkap, layar AMOLED, notifikasi pintar, dan ketahanan air IP68 untuk penggunaan aktif seharian.'
    },
    {
      id:4,
      name:'Kamera Pocket Z1',
      price:'Rp 3.900.000',
      image:'assets/img/camera-z1.png',
      fullDesc:'Kamera Pocket Z1 dengan lensa 20MP, stabilisasi 3-axis, perekaman 4K, desain ringkas untuk content creator on-the-go.'
    },
    {
      id:5,
      name:'Tas Laptop Nimbus',
      price:'Rp 299.000',
      image:'assets/img/tas-nimbus.png',
      fullDesc:'Tas Laptop Nimbus: material water resistant, kompartemen rapi, cocok untuk laptop 15 inch, desain elegan dan ringan.'
    },
    {
      id:6,
      name:'Charger Turbo 65W',
      price:'Rp 199.000',
      image:'assets/img/charger-turbo.png',
      fullDesc:'Charger Turbo 65W: pengisian cepat untuk laptop dan smartphone, multi-proteksi, port USB-C ganda.'
    }
  ];

  const productsGrid = document.getElementById('productsGrid');
  const modal = document.getElementById('productModal');
  const modalImage = document.getElementById('modalImage');
  const modalName = document.getElementById('modalName');
  const modalPrice = document.getElementById('modalPrice');
  const modalDesc = document.getElementById('modalDesc');
  const modalClose = document.querySelector('.modal-close');

  function truncateShort(text){
    // Batasi 15 kata dan 50 karakter
    const words = text.split(/\s+/).slice(0,15).join(' ');
    if(words.length<=50) return words + (words.length < text.length ? '…' : '');
    // kalau masih panjang, potong ke 50 karakter tanpa memotong kata
    let cut = text.slice(0,50);
    if(cut.indexOf(' ')>0){
      cut = cut.slice(0, cut.lastIndexOf(' '));
    }
    return cut + '…';
  }

  function createCard(p){
    const el = document.createElement('div'); el.className='product-card';
    el.innerHTML = `
      <img src="${p.image}" alt="${p.name}"/>
      <div class="product-meta">
        <div class="product-name">${p.name}</div>
        <div class="price">${p.price}</div>
      </div>
      <div class="desc">${truncateShort(p.fullDesc)}</div>
      <div class="card-actions">
        <button class="btn btn-outline" data-id="${p.id}" data-action="detail">Lihat Detail</button>
        <button class="btn btn-primary" data-id="${p.id}" data-action="wa">WhatsApp</button>
      </div>
    `;
    return el;
  }

  products.forEach(p=> productsGrid.appendChild(createCard(p)));

  // Event delegation untuk tombol
  productsGrid.addEventListener('click', (e)=>{
    const btn = e.target.closest('button'); if(!btn) return;
    const id = Number(btn.dataset.id);
    const action = btn.dataset.action;
    const item = products.find(x=>x.id===id);
    if(action==='detail') openModal(item);
    if(action==='wa') openWhatsApp(item);
  });

  function openModal(item){
    modalImage.src = item.image;
    modalName.textContent = item.name;
    modalPrice.textContent = item.price;
    modalDesc.textContent = item.fullDesc;
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
  }
  function closeModal(){
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow='';
  }
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e)=>{ if(e.target===modal) closeModal(); });

  function openWhatsApp(item){
    const message = `Halo%20TD%20Shop%20%F0%9F%91%8B%0ASaya%20tertarik%20dengan%20produk%20${encodeURIComponent(item.name)}%20(${encodeURIComponent(item.price)})%0AInfo%20lebih%20lanjut%2C%20tolong%20bantu%20ya.`;
    const url = `https://api.whatsapp.com/send?text=${message}`;
    window.open(url,'_blank');
  }

  // Header burger menu
  const burger = document.querySelector('.burger');
  burger.addEventListener('click', ()=>{
    const nav = document.querySelector('.nav');
    nav.style.display = nav.style.display==='flex' ? '' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.right = '1rem';
    nav.style.top = '64px';
    nav.style.background = 'rgba(7,12,22,0.9)';
    nav.style.padding = '0.75rem';
    nav.style.borderRadius = '10px';
  });

  // Year
  document.getElementById('year').textContent = new Date().getFullYear();

});
