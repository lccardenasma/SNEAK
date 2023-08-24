const inputSearch = document.getElementById('input-search')
const gallery = document.getElementById('gallery')
const menu = document.querySelector('.header__navGroup')
const categories = document.querySelectorAll('.main_menuItem')
const listButton = document.getElementById('list-button')
const gridButton = document.getElementById('grid-button')
const lineMenuTop = document.getElementById('line-menu-top')
const lineMenuCenter = document.getElementById('line-menu-center')
const lineMenuBottom = document.getElementById('line-menu-bottom')

let pageInit = 6;

const toogleSearch = () => {
  inputSearch.classList.toggle('hide');
  inputSearch.classList.toggle('show');
};

const toogleMenu = () => {
  menu.classList.toggle('close');
  menu.classList.toggle('open');
  const isOpen = menu.classList.contains('open');

  lineMenuCenter.style.display = isOpen ? 'none' : 'initial';
  const rotation = isOpen ? '45deg' : '0deg';
  const translation = isOpen ? '4px' : '0px';
  const width = isOpen ? '40px' : '30px';

  lineMenuTop.style.width = width;
  lineMenuBottom.style.width = width;
  lineMenuTop.style.transform = `rotate(${rotation}) translate(${translation}, ${translation})`;
  lineMenuBottom.style.transform = `rotate(-${rotation}) translate(${translation}, -${translation})`;
};

const displayImages = (data) => {
  const htmlString = data
    .map((image) => {
      return `
          <div class="massonry__item">
            <img class="massonry__item__image" src="${image.url}" key="${image.id}">
            <div class="massonry__item__description" id="massonry_description">
              <p class="name-logo">Creative Logo</p> <br> <p class="description">${image.author}</p>
            </div>
            </div>
          </div>`;
    })
    .join('');
  gallery.innerHTML = htmlString;
};

const getImages = async (page = 6) => {
  try {
    let res = await fetch(`http://localhost:3000/images?_limit=${page}`)
    images = await res.json();
    displayImages(images)
  } catch (err) {
    console.error(err);
  }
};

const activeButton = (category) => {
  categories.forEach((item) => {
    if (item.innerText.toLowerCase() == category) {
      item.classList.add('main_menuItem--selected')
    }
    else {
      item.classList.remove('main_menuItem--selected')
    }
  })
}

const counterPage = () => {
  pageInit = pageInit + 3;
  getImages(pageInit);
}

const filterCategory = async (category) => {
  if (category !== 'all') {
    activeButton(category)
    try {
      let res = await fetch(`http://localhost:3000/images?category=${category}`)
      images = await res.json();
      displayImages(images)
    } catch (err) {
      console.error(err);
    }
  }
  else if (category === 'all') {
    activeButton(category);
    getImages()
  }
}

const toogleGallery = async (galleryOption) => {
  const isListView = galleryOption === 'list';
  listButton.classList.toggle('layouts__item--selected', isListView);
  gridButton.classList.toggle('layouts__item--selected', !isListView);
  gallery.classList.toggle('massonry', !isListView);
  gallery.classList.toggle('view-list', isListView);
};

function lazyLoad(target) {
  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-lazy');
        img.setAttribute('src', src);
        img.classList.add('fadeIn');
        observer.disconnect();
      }
    });
  });
  obs.observe(target);
}

const slider = document.getElementById('slider');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0;

const showItems = (startIndex) => {
  const items = [...slider.children];
  const maxItemsToShow = window.screen.width < 1280 ? 3 : 5;

  items.forEach((item, index) => {
    item.style.display = index >= startIndex && index < startIndex + maxItemsToShow ? 'block' : 'none';
  });
};

const handleResize = () => {
  const currentIndex = 0;
  showItems(currentIndex);
};

window.addEventListener('resize', handleResize);

showItems(0);

const moveToIndex = (index) => {
  currentIndex = index;
  showItems(currentIndex);
};

prevButton.addEventListener('click', () => {
  if (currentIndex === 0) {
    moveToIndex(slider.children.length - 3);
  } else {
    moveToIndex(currentIndex - 1);
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex === slider.children.length - 3) {
    moveToIndex(0);
  } else {
    moveToIndex(currentIndex + 1);
  }
});

showItems(currentIndex);


getImages(6)