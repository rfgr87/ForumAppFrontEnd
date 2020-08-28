document.addEventListener('DOMContentLoaded', () => {
    categoriesAdapter.fetchCategories()
    itemsAdapter.fetchItems()
    const itemForm = document.getElementById('item-form')
    itemForm.addEventListener('submit', itemsAdapter.createItem)
    const newFormBtn = document.getElementById('new-form-btn')
    newFormBtn.addEventListener('click', hideBtnLoadForm)
    // itemList.addEventListener('click', handleListClick)
})


