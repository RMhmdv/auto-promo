const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
const tabsContentElems = document.querySelectorAll('[data-tabs-field]');
// design-list__item_active  data-tabs-field
for (let btn of tabsHandlerElems){
  btn.addEventListener('click', () => {
    tabsHandlerElems.forEach(item => item.classList.remove('design-list__item_active'));
    btn.classList.add('design-list__item_active');
    // console.dir(btn.dataset.tabsHandler);
      tabsContentElems.forEach(content => {
        if (content.dataset.tabsField === btn.dataset.tabsHandler) {
          content.classList.remove('hidden');
        } else {
          content.classList.add('hidden');
        }
      })
  })
}

// console.log(tabsContentElems);