const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const gallery = document.querySelector('#gallery')

// Activities
const items = [
    {
        title: "Wildlife and Bird Watching",
        desc: "Spot pink river dolphins, giant otters, sloths, and hundreds of bird species in reserves like Pacaya- Samiria National Reserve and Tambopata.",
        src: "bird-watching.webp"
    },
    {
        title: "Macaw Clay Lick Visits",
        desc: "Watch hundreds of colorful parrots and macaws gather at mineral-rich river cliffs, especially around Tambopata or Manu.",
        src: "macaw-clay-lick.webp"
    },
    {
        title: "Night Safari Walks",
        desc: "Explore the dark jungle with a guide to see tarantulas, caimans, tree frogs, and bioluminescent fungi.",
        src: "night-safari-walks.webp"
    },
    {
        title: "Canopy Walkways",
        desc: "Walk across high suspension bridges to view the rainforest from the treetops.",
        src: "canopy-walkways.webp"
    },
    {
        title: "River Cruises and Canoeing",
        desc: "Take boat rides or kayak along the Amazon River and its tributaries to explore oxbow lakes and spot aquatic life.",
        src: "canoeing.webp"
    },
    {
        title: "Isla de los Monos",
        desc: "A dedicated rescue and rehabilitation island near Iquitos where visitors can interact with free-roaming, mischievous monkey species.",
        src: "isla-monos.webp"
    },
    {
        title: "Adventure Sports",
        desc: "Enjoy piranha fishing, kayaking, canoeing, and jungle zip-lining.",
        src: "adventure-sports.webp"
    },
    {
        title: "Taricaya Turtle Release",
        desc: "An eco-tourism activity where travelers help conservationists artificial-nest hatch and release vulnerable baby side- necked turtles back into river tributaries.Visit local indigenous communities to learn about traditional survival skills and native medicinal plants.",
        src: "taricaya-turtle.webp"
    },
    {
        title: "Cooking Traditional Cuisine",
        desc: "Culinary workshops teaching travelers how to prepare Patarascha (seasoned fresh fish wrapped in bijao leaves and grilled over open firewood coals).",
        src: "tradional-cuisine.webp"
    },
    {
        title: "Shamanic & Ethnobotanical Hikes",
        desc: "Deep-woods walks led by indigenous healers to catalog wild jungle flora used for centuries to cure snakebites, fevers, and infections.",
        src: "shamanic-hikes.webp"
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

    if (item.title == "Wildlife and Bird Watching") {
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