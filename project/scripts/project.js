const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const gallery = document.querySelector('#gallery')

const items = [
    {
        title: "Jaguar",
        desc: "The largest cat in the Americas, acting as an elusive apex predator in deep jungle areas.",
        src: "animals.webp"
    },
    {
        title: "Iquitos",
        desc: "The world's largest city inaccessible by road, serving as the main northern gateway for Amazon River cruises and jungle lodges.",
        src: "iquitos.webp"
    },
    {
        title: "Puerto Maldonado",
        desc: "Located in the southern Amazon and easily reached via a short flight from Cusco.",
        src: "puerto-maldonado.webp"
    },
    {
        title: "Lago Sandoval",
        desc: "A spectacular, mirror-like oxbow lake in the Tambopata Reserve, famous for housing multi- generational families of endangered giant river otters.",
        src: "lago-sandoval.webp"
    },
    {
        title: "Catarata Gocta",
        desc: "One of the world's tallest waterfalls, dropping over 700 meters deep within the northern high- altitude Amazonian cloud forest.",
        src: "catarata-gocta.webp"
    },
    {
        title: "Belen Floating Market",
        desc: 'A bustling, historic open-air market in Iquitos built entirely on stilts and rafts, nicknamed the "Venice of the Amazon".',
        src: "belen-floating-market.webp"
    },
    {
        title: "Kuelap Fortress",
        desc: 'A massive, walled ancient city built by the Chachapoyas culture ("Warriors of the Clouds") perched high in the mountainous jungle border.',
        src: "kuelap-fortress.webp"
    },
    {
        title: "Cultural & Medicinal Tours",
        desc: "Visit local indigenous communities to learn about traditional survival skills and native medicinal plants.",
        src: "cultural-medicinal-tours.webp"
    }
]
// Nav Menu
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

function createCard(item) {
    const card = document.createElement("div")
    card.setAttribute("class", "card")
    const img = document.createElement("img")
    img.setAttribute("src", `images/${item.src}`)
    img.setAttribute("class", "info-img")

    if (item.title == "Jaguar") {
        img.classList.add("top-focus")
    }

    img.setAttribute("alt", item.title)
    img.setAttribute("loading", "lazy")
    card.appendChild(img)
    const title = document.createElement("h2")
    title.textContent = item.title
    card.appendChild(title)
    const description = document.createElement("p")
    description.textContent = item.desc
    card.appendChild(description)

    gallery.appendChild(card)
}

function renderItems(list, renderFunc) {
    list.forEach(element => {
        renderFunc(element)
    });
}

renderItems(items, createCard)