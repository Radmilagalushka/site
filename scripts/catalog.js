// Реализация поиска

let searchInput = document.querySelector(".search")
let filter = "none"
// поиск будет и по имени и по автору
function search() {
    let val = searchInput.value.toLowerCase()
    document.querySelectorAll(".book").forEach(book => {
        let name = book.querySelector(".name").innerHTML.toLowerCase(),
            author = book.querySelector(".author").innerHTML.toLowerCase(),
            type = book.getAttribute("data-filter").split(",")
        if ((name.includes(val) || author.includes(val)) && (filter == "none" || type.includes(filter))) {
            book.classList.remove("hiden")
        }
        else {
            book.classList.add("hiden")
        }
    })
};



// Фильтрация по тегам
let tags = document.querySelectorAll(".tag")
tags.forEach(tag => {
    tag.addEventListener("click", e => {
        if (tag.classList.contains("active")) {
            filter = "none"
            search()
            tag.classList.remove("active")
        }
        else {
            filter = tag.getAttribute("data-filter")
            search()
            tags.forEach(tag => { tag.classList.remove("active") })
            tag.classList.add("active")
        }
    })
})
