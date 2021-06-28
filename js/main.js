var elsTabsItem = document.querySelectorAll('.tabs__item');
var elsTabsLink = document.querySelectorAll('.tabs__link');
var elsPanel = document.querySelectorAll('.panels__item');

// Har bir link clickga quloq solsin. Har biriga link deb murojaat qilamiz. O'zimiz nom beramiz
elsTabsLink.forEach(function (link) {
  // Har bir linkka click reaksiyasini beramiz
  link.addEventListener('click', function (evt) {
    // Linkning tabiiy reaksiyasi (sakrash)ning oldi olinadi
    evt.preventDefault();
    
    // Hamma li lardan active klassni olib tashlaymiz. Har biriga item deb murojaat qilamiz
    elsTabsItem.forEach(function (item) {
      item.classList.remove('tabs__item--active');
    });
    
    // Bosilgan linkning otasiga active klassini qo'shamiz
    link.parentElement.classList.add('tabs__item--active');
    
    // Hamma panellarni yopamiz
    elsPanel.forEach(function (panel) {
      panel.classList.remove('panels__item--active');
    });
    
    // Bog'langan panelni topamiz
    document.querySelector(link.getAttribute('href')).classList.add('panels__item--active');
  });
});