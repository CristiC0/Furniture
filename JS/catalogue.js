// All products array
var products = [
    {
        type: "sofa",
        name: "Luciano",
        desc:
            "Luciano's a striking contrast of texture and shapes. We love the chunky arms, deep, dimpled seat cushions and contemporary metal legs. Screening the final episode of your favourite TV series? This corner sofa is made for social seating, so make an event of it. Pass the popcorn.",
        img: "../Images/Catalogue/CatalogueProducts/sofa1.webp",
        imgMain: "../Images/Catalogue/CatalogueProducts/sofa11.webp",
        imgOther1: "../Images/Catalogue/CatalogueProducts/sofa12.webp",
        imgOther2: "../Images/Catalogue/CatalogueProducts/sofa13.webp",
        price: 2000,
        height: "86",
        width: "278",
        depth: "93/154",
        weight: "91",
    },
    {
        type: "sofa",
        name: "Scott",
        desc:
            "Nothing says luxury quite like Scott. A sleek silhouette with pulled detail cushions, upholstered in plush velvet – it oozes sophistication. The clean lines nod to mid-century design, and there’s plenty of room to snuggle up.",
        img: "../Images/Catalogue/CatalogueProducts/sofa3.webp",
        imgMain: "../Images/Catalogue/CatalogueProducts/sofa31.webp",
        imgOther1: "../Images/Catalogue/CatalogueProducts/sofa32.webp",
        imgOther2: "../Images/Catalogue/CatalogueProducts/sofa33.webp",
        price: 1299,
        height: "84",
        width: "259",
        depth: "100/171",
        weight: "79",
    },
    {
        type: "bed",
        name: "Skye",
        desc:
            "You spend a third of your life sleeping, so spend it well with Skye. This elegant bed sets the tone with its tall, button-backed headboard and plush upholstery. We added sprung birch slats, too – guaranteeing comfort and support while you sleep.",
        img: "../Images/Catalogue/CatalogueProducts/bed1.webp",
        imgMain: "../Images/Catalogue/CatalogueProducts/bed11.webp",
        imgOther1: "../Images/Catalogue/CatalogueProducts/bed12.webp",
        imgOther2: "../Images/Catalogue/CatalogueProducts/bed13.webp",
        price: 599,
        height: "238",
        width: "265",
        depth: "213",
        weight: "88",
    },
    {
        type: "sofa",
        name: "Delphi",
        desc:
            "The spare room doesn't have to feel neglected – just ask Delphi. We love this sofa bed's revival-inspired silhouette, rounded legs and easy click-clack mechanism. And we're not just saying that because we designed it.",
        img: "../Images/Catalogue/CatalogueProducts/sofa2.webp",
        imgMain: "../Images/Catalogue/CatalogueProducts/sofa21.webp",
        imgOther1: "../Images/Catalogue/CatalogueProducts/sofa22.webp",
        imgOther2: "../Images/Catalogue/CatalogueProducts/sofa23.webp",
        price: 549,
        height: "80",
        width: "210",
        depth: "86",
        weight: "45",
    },
    {
        type: "dining",
        name: "Boone",
        desc:
            "Boone = roomy. You can seat 6 around that contemporary concrete top. This dining table's sleeker than the rest. Just look at those black matte powder coated legs – so striking, but so clean, too. ",
        img: "../Images/Catalogue/CatalogueProducts/dining1.webp",
        imgMain: "../Images/Catalogue/CatalogueProducts/dining11.webp",
        imgOther1: "../Images/Catalogue/CatalogueProducts/dining12.webp",
        imgOther2: "../Images/Catalogue/CatalogueProducts/dining13.webp",
        price: 645,
        height: "76",
        width: "190",
        depth: "100",
        weight: "117",
    },
    {
        type: "seating",
        name: "Erdee",
        desc:
            "You know the drill – curved lines, rounded wooden legs, flat-woven padded upholstery. Erdee's the triple threat of Nordic design. With chairs this good looking, no one will mind what you're serving up – just pick your fabric colour and order in. ",
        img: "../Images/Catalogue/CatalogueProducts/seating1.webp",
        imgMain: "../Images/Catalogue/CatalogueProducts/seating11.webp",
        imgOther1: "../Images/Catalogue/CatalogueProducts/seating12.webp",
        imgOther2: "../Images/Catalogue/CatalogueProducts/seating13.webp",
        price: 299,
        height: "84",
        width: "50",
        depth: "59",
        weight: "8.1",
    },
    {
        type: "bed",
        name: "Reema",
        desc:
            "Reema's beauty is all natural. A bed that adds vintage vibes to any bedroom, in on-trend black stained wood and cane. Ready to relax? It’s light, airy – and one of a kind. Add blush-toned accent pieces to bring the look together.",
        img: "../Images/Catalogue/CatalogueProducts/bed2.webp",
        imgMain: "../Images/Catalogue/CatalogueProducts/bed21.webp",
        imgOther1: "../Images/Catalogue/CatalogueProducts/bed22.webp",
        imgOther2: "../Images/Catalogue/CatalogueProducts/bed23.webp",
        price: 599,
        height: "100",
        width: "179",
        depth: "218",
        weight: "45",
    },
    {
        type: "decor",
        name: "Galex ",
        desc:
            "The grooviest way to tell the time? Say hi to Galex. Those spikes nod to 60s space-age, while the matte black and brass scheme brings it into the now.",
        img: "../Images/Catalogue/CatalogueProducts/decor1.webp",
        imgMain: "../Images/Catalogue/CatalogueProducts/decor11.webp",
        imgOther1: "../Images/Catalogue/CatalogueProducts/decor12.webp",
        imgOther2: "../Images/Catalogue/CatalogueProducts/decor13.webp",
        price: 39,
        height: "62",
        width: "62",
        depth: "4",
        weight: "0.4",
    },
    {
        type: "coffetable",
        name: "Aula ",
        desc:
            "Transform your living room with Aula. The circular shapes will create a calming flow in your space – now all you need is that cup of tea.",
        img: "../Images/Catalogue/CatalogueProducts/coffetable1.webp",
        imgMain: "../Images/Catalogue/CatalogueProducts/coffetable11.webp",
        imgOther1: "../Images/Catalogue/CatalogueProducts/coffetable12.webp",
        imgOther2: "../Images/Catalogue/CatalogueProducts/coffetable13.webp",
        price: 299,
        height: "35/40",
        width: "90/70",
        depth: "90/70",
        weight: "33",
    },
    {
        type: "coffetable",
        name: "Cheney ",
        desc:
            "Get your best books ready. This coffee table's just waiting to make a scene – glass top, brass accent, graphic black metal sides and legs. Cheney feels more 'luxury display case' than 'pass the biscuit tin.' We wouldn't say no, though.",
        img: "../Images/Catalogue/CatalogueProducts/coffetable2.webp",
        imgMain: "../Images/Catalogue/CatalogueProducts/coffetable21.webp",
        imgOther1: "../Images/Catalogue/CatalogueProducts/coffetable22.webp",
        imgOther2: "../Images/Catalogue/CatalogueProducts/coffetable23.webp",
        price: 299,
        height: "40",
        width: "120",
        depth: "54",
        weight: "21",
    },
    {
        type: "bookshelves",
        name: "Anderson ",
        desc:
            "Earthy, industrial-looking mango wood. Anderson was always going to be a looker. The metallic trend's nailed too, thanks to the copper cladding. Designed in-house and made in India, this large shelving unit features plenty of space to store all your books, bits and bobs.",
        img: "../Images/Catalogue/CatalogueProducts/bookshelves1.webp",
        imgMain: "../Images/Catalogue/CatalogueProducts/bookshelves11.webp",
        imgOther1: "../Images/Catalogue/CatalogueProducts/bookshelves12.webp",
        imgOther2: "../Images/Catalogue/CatalogueProducts/bookshelves13.webp",
        price: 649,
        height: "180",
        width: "120",
        depth: "35",
        weight: "66",
    },
    {
        type: "cupboard",
        name: "Campton",
        desc:
            "Campton's part of our collaboration with furniture brand Georgson. This triple wardrobe is a perfect example of the sleek Scandinavian design they're known for. Notice the matt grey lacquered doors and handles – a totally Scandi take on all that storage.",
        img: "../Images/Catalogue/CatalogueProducts/cupboard1.webp",
        imgMain: "../Images/Catalogue/CatalogueProducts/cupboard11.webp",
        imgOther1: "../Images/Catalogue/CatalogueProducts/cupboard12.webp",
        imgOther2: "../Images/Catalogue/CatalogueProducts/cupboard13.webp",
        price: 899,
        height: "186",
        width: "124",
        depth: "55",
        weight: "120",
    },
    {
        type: "seating",
        name: "Thelma",
        desc:
            "Love contemporary design? You’ll love Thelma. Sleek with a big dose of comfiness, this office chair will have you at your desk, even when you don’t need to be.",
        img: "../Images/Catalogue/CatalogueProducts/seating2.webp",
        imgMain: "../Images/Catalogue/CatalogueProducts/seating21.webp",
        imgOther1: "../Images/Catalogue/CatalogueProducts/seating22.webp",
        imgOther2: "../Images/Catalogue/CatalogueProducts/seating23.webp",
        price: 99,
        height: "84",
        width: "49",
        depth: "54",
        weight: "6",
    },
    {
        type: "seating",
        name: "Keira",
        desc:
            "Being at work's never felt so good. Keira's got a padded, supportive back and armrests, and is upholstered in soft grey boucle fabric. Check out the refined piping detail, too.",
        img: "../Images/Catalogue/CatalogueProducts/seating3.webp",
        imgMain: "../Images/Catalogue/CatalogueProducts/seating31.webp",
        imgOther1: "../Images/Catalogue/CatalogueProducts/seating32.webp",
        imgOther2: "../Images/Catalogue/CatalogueProducts/seating33.webp",
        price: 199,
        height: "86",
        width: "55",
        depth: "55",
        weight: "11.5",
    },
    {
        type: "decor",
        name: "Textured Brush Strokes",
        desc:
            "Peaceful paintings? It's a thing. Get zen with this triptych from Dan Hobday – it's filled with textured brushstrokes and a calming colour palette of pink, blue and white. Hang for a dose of dreamy, whatever your mood.",
        img: "../Images/Catalogue/CatalogueProducts/decor2.webp",
        imgMain: "../Images/Catalogue/CatalogueProducts/decor21.webp",
        imgOther1: "../Images/Catalogue/CatalogueProducts/decor22.webp",
        imgOther2: "../Images/Catalogue/CatalogueProducts/decor23.webp",
        price: 189,
        height: "62",
        width: "32",
        depth: "3",
        weight: "6",
    },
    {
        type: "decor",
        name: "Levvy",
        desc:
            "Brass and copper's a timeless combo, making Levvy a timeless wall sculpture. Its series of metallic circles are an easy way to amp up your walls.",
        img: "../Images/Catalogue/CatalogueProducts/decor3.webp",
        imgMain: "../Images/Catalogue/CatalogueProducts/decor31.webp",
        imgOther1: "../Images/Catalogue/CatalogueProducts/decor32.webp",
        imgOther2: "../Images/Catalogue/CatalogueProducts/decor33.webp",
        price: 129,
        height: "48",
        width: "130",
        depth: "3",
        weight: "3",
    },
    {
        type: "decor",
        name: "Arles",
        desc:
            "Need a mirror but torn between simple or statement? Panic over. Arles’ octagonal shape makes this an eye-catcher you won’t get tired of looking at – or in to. Grown-up glamour? Yes, please. The brushed brass finish brings sophistication to getting ready.",
        img: "../Images/Catalogue/CatalogueProducts/decor4.webp",
        imgMain: "../Images/Catalogue/CatalogueProducts/decor41.webp",
        imgOther1: "../Images/Catalogue/CatalogueProducts/decor42.webp",
        imgOther2: "../Images/Catalogue/CatalogueProducts/decor43.webp",
        price: 149,
        height: "80",
        width: "80",
        depth: "4",
        weight: "13",
    },
    {
        type: "bed",
        name: "Fenella",
        desc:
            "Statement headboards? It's a trend. And we know you'll love Fenella's wavy ways. Look a little closer at the soft velvet, contrast piping and refined brass legs – this is sleeping, in style.",
        img: "../Images/Catalogue/CatalogueProducts/bed3.webp",
        imgMain: "../Images/Catalogue/CatalogueProducts/bed31.webp",
        imgOther1: "../Images/Catalogue/CatalogueProducts/bed32.webp",
        imgOther2: "../Images/Catalogue/CatalogueProducts/bed33.webp",
        price: 399,
        height: "105",
        width: "163",
        depth: "212",
        weight: "40",
    },
    {
        type: "bed",
        name: "Ami",
        desc:
            "That cool, industrial look that's always on trend? That's Ami. The dark stained solid pine and metal legs make the perfect backdrop to any kind of bedding. We love how the soft edges keep it contemporary, too.",
        img: "../Images/Catalogue/CatalogueProducts/bed4.webp",
        imgMain: "../Images/Catalogue/CatalogueProducts/bed41.webp",
        imgOther1: "../Images/Catalogue/CatalogueProducts/bed42.webp",
        imgOther2: "../Images/Catalogue/CatalogueProducts/bed43.webp",
        price: 399,
        height: "79",
        width: "226",
        depth: "176",
        weight: "42",
    },
    {
        type: "dining",
        name: "Jenson",
        desc:
            "Jenson demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points – not that this dining table needs it. Nordic retro? You got it.",
        img: "../Images/Catalogue/CatalogueProducts/dining2.webp",
        imgMain: "../Images/Catalogue/CatalogueProducts/dining21.webp",
        imgOther1: "../Images/Catalogue/CatalogueProducts/dining22.webp",
        imgOther2: "../Images/Catalogue/CatalogueProducts/dining23.webp",
        price: 449,
        height: "74",
        width: "140",
        depth: "83",
        weight: "35",
    },
    {
        type: "cupboard",
        name: "Mischa",
        desc:
            "Mischa's brass panelling? It's got that luxury look. And we took it even further with dark stain acacia wood, slender metal legs and cutout handles on those drawers. Sophisticated storage? Oh, sure.",
        img: "../Images/Catalogue/CatalogueProducts/cupboard2.webp",
        imgMain: "../Images/Catalogue/CatalogueProducts/cupboard21.webp",
        imgOther1: "../Images/Catalogue/CatalogueProducts/cupboard22.webp",
        imgOther2: "../Images/Catalogue/CatalogueProducts/cupboard23.webp",
        price: 599,
        height: "188",
        width: "100",
        depth: "38",
        weight: "18",
    },
    {
        type: "cupboard",
        name: "Stow",
        desc:
            "This apothecary-style filing cabinet is updated with a little modern-industrial attitude, maintaining its lovely vintage feel with aged brass.",
        img: "../Images/Catalogue/CatalogueProducts/cupboard3.webp",
        imgMain: "../Images/Catalogue/CatalogueProducts/cupboard31.webp",
        imgOther1: "../Images/Catalogue/CatalogueProducts/cupboard32.webp",
        imgOther2: "../Images/Catalogue/CatalogueProducts/cupboard33.webp",
        price: 349,
        height: "94",
        width: "44",
        depth: "50",
        weight: "39",
    },
    {
        type: "cupboard",
        name: "Pavia",
        desc:
            "Casual, bohemian, with a lot of global influence. Vintage-style cane doors, black wood-effect finish and a compact size. Pavia's ticking all our boxes. This highboard's perfect for storing plates, glassware and mugs.",
        img: "../Images/Catalogue/CatalogueProducts/cupboard4.webp",
        imgMain: "../Images/Catalogue/CatalogueProducts/cupboard41.webp",
        imgOther1: "../Images/Catalogue/CatalogueProducts/cupboard42.webp",
        imgOther2: "../Images/Catalogue/CatalogueProducts/cupboard43.webp",
        price: 229,
        height: "102",
        width: "79",
        depth: "41",
        weight: "26",
    },
    {
        type: "bookshelves",
        name: "Wingrove",
        desc:
            "Retro-inspired design, French oak – you know Wingrove's something special. Those legs are the standout feature – look at how they're shaped. This shelving unit's got space for your tech bits, books and everything in-between.",
        img: "../Images/Catalogue/CatalogueProducts/bookshelves2.webp",
        imgMain: "../Images/Catalogue/CatalogueProducts/bookshelves21.webp",
        imgOther1: "../Images/Catalogue/CatalogueProducts/bookshelves22.webp",
        imgOther2: "../Images/Catalogue/CatalogueProducts/bookshelves23.webp",
        price: 799,
        height: "180",
        width: "175",
        depth: "44",
        weight: "87",
    },
    {
        type: "coffetable",
        name: "Dotty",
        desc:
            "Playful retro stylings and a pocket-friendly price. Dotty’s set on hairpin legs to give your living space a boost without breaking the bank. Designed in our MADE Studio, this round coffee table was made to merge function with style. Crafted from dark-stained wood, contrasted with a soft grey shelf underneath.",
        img: "../Images/Catalogue/CatalogueProducts/coffetable3.webp",
        imgMain: "../Images/Catalogue/CatalogueProducts/coffetable31.webp",
        imgOther1: "../Images/Catalogue/CatalogueProducts/coffetable32.webp",
        imgOther2: "../Images/Catalogue/CatalogueProducts/coffetable33.webp",
        price: 149,
        height: "43",
        width: "80",
        depth: "80",
        weight: "11",
    },
];

// Variables
backgroundImages = [""];
var k;
var catalogue = "";
mainImgs = [];

// Call when window loads
window.onload = function () {
    // color();
    // declare();
    var definedType = localStorage.getItem("catalogueType");
    setInterval(changeMenuUpCat, 100);
    console.log("definedtype: " + definedType);

    var heightMenu = -document.getElementById("menu-up").offsetHeight;
    console.log(heightMenu);
    heightMenu = heightMenu.toString();

    document.getElementById("image-background").style.top = heightMenu + "px";
    if (definedType != undefined) setTimeout(show(definedType), 2000);
    color();
};

// Changes menu
function changeMenuUpCat() {
    let x = document.getElementById("menu-up");
    if (window.scrollY > 0) {
        x.style.animationName = "menuBackgr";
    } else {
        x.style.animationName = "";
        x.style.backgroundColor = "rgba(0,0,0,0)";
        x.style.color = "white";
    }
}

// Fill the catalogue
var currentProducts = [];
function show(type, fromArray = products) {
    localStorage.setItem("catalogueType", type);
    currentProducts = [];
    createCatalogue(type);
    mainImgChange(type);
    let k = 1;
    let cpIndex = 0;
    for (let i = 0; i < fromArray.length; i++) {
        if (type == fromArray[i].type || type == "all") {
            currentProducts[cpIndex++] = fromArray[i];
            document.getElementById("clel" + k).style.display = "block";
            document.getElementById("img" + k).style.backgroundImage =
                "url(" + fromArray[i].img + ")";
            document.getElementById("name" + k).innerHTML = fromArray[i].name;
            document.getElementById("price" + k).innerHTML =
                fromArray[i].price + "$";
            k++;
        }
    }
    // console.log(currentProducts);
    color();
}

// Create the catalogue
function createCatalogue(filter) {
    k = 1;
    catalogue = "";
    for (let i of products) {
        if (i.type == filter || filter == "all") {
            catalogue +=
                "<div class='cle' id='clel" +
                k +
                "'" +
                " onmouseover='iconsAppear(\"" +
                k +
                "\")' onmouseout='iconsDisappear(\"" +
                k +
                "\")'>   <div class='icons-hover'><div class='icons-buy'><img src='../Images/Icons/wishlist.svg' class='wishlist' id='wishlist" +
                k +
                "' onclick='wishlistAdd(\"" +
                k +
                "\")'></img><img src='../Images/Icons/shopping-bag.svg' class='bag' id='bag" +
                k +
                "' onclick='bagAdd(\"" +
                k +
                "\")'></img> </div></div> <a href='../HTML/Product.html' onclick='setProduct(\"" +
                k +
                "\")' class='prodlink'><div class='imgs' id='img" +
                k +
                "'></div><div class='info info1'><span id='name" +
                k +
                "'></span><span class='price' id='price" +
                k +
                "'></span></div></a></div>";
            k++;
        }
    }
    document.getElementById("catalogue-list").innerHTML = catalogue;

    selected(filter);
}

// Start sorting
function sortStart(mode) {
    sort(mode, currentProducts);
    show(localStorage.getItem("catalogueType"), currentProducts);
}
// Sort the catalogue
function sort(mode, sortArray) {
    switch (mode) {
        case "Aa":
            sortArray.sort(dynamicSort("name"));
            break;
        case "Ad":
            sortArray.sort(dynamicSort("-name"));
            break;
        case "Na":
            sortArray.sort(dynamicSort("price", 1));
            break;
        case "Nd":
            sortArray.sort(dynamicSort("-price"), 1);
            break;
        default:
            break;
    }
    console.log(currentProducts);
}

// Sort an array of objects
function dynamicSort(property, n = 0) {
    var sortInd = 1;
    if (property[0] === "-") {
        sortInd = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        var result =
            a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
        return result * sortInd;
    };
}
// Show the current type selected
function selected(s) {
    let nodes = document.getElementById("list").childNodes;
    for (let i of nodes) {
        if (i.nodeName == "LI") i.style.color = "black";
        if (i.nodeName == "LI" && i.id == s) i.style.color = "orange";
    }
    console.log(s);
}

// Color the the floating icons respectively
function color() {
    wishlistItems = JSON.parse(localStorage.getItem("wishlistItems"));
    bagItems = JSON.parse(localStorage.getItem("bagItems"));
    for (let i = 1; i < k; i++) {
        for (p of wishlistItems) {
            if (document.getElementById("name" + i).innerHTML == p) {
                document.getElementById("wishlist" + i).style.filter =
                    "invert(76%) sepia(84%) saturate(3191%) hue-rotate(359deg) brightness(101%) contrast(102%)";
                document.getElementById("wishlist" + i).style.opacity = "1";
            }
        }
    }
    for (let i = 1; i < k; i++) {
        for (p of bagItems) {
            if (document.getElementById("name" + i).innerHTML == p) {
                document.getElementById("bag" + i).style.filter =
                    "invert(76%) sepia(84%) saturate(3191%) hue-rotate(359deg) brightness(101%) contrast(102%)";
                document.getElementById("bag" + i).style.opacity = "1";
            }
        }
    }
}

// Fade In the Icons
function iconsAppear(n) {
    document.getElementById("wishlist" + n).style.animationName = "fadeIn";
    document.getElementById("bag" + n).style.animationName = "fadeIn";
}

// Fade Out the Icons
function iconsDisappear(n) {
    document.getElementById("wishlist" + n).style.animationName = "fadeOut";
    document.getElementById("bag" + n).style.animationName = "fadeOut";
    color();
}

// Change the menu when moving
function changeMenuUp() {
    let x = document.getElementById("menu-up");
    if (window.scrollY > 0) {
        console.log(window.scrollY);
        x.style.animationName = "menuBackgr";
    } else {
        x.style.animationName = "";
        x.style.backgroundColor = "";
        x.style.color = "";
    }
}

// Select the product for the Product page
function setProduct(n) {
    let namecur = document.getElementById("name" + n).innerHTML;
    for (i in products) {
        if (namecur == products[i].name) {
            localStorage.setItem("products", JSON.stringify(products));
            localStorage.setItem("index", i);
        }
    }
}

// Add an Item to wishlist
function wishlistAdd(n) {
    let namecur = document.getElementById("name" + n).innerHTML;
    document.getElementById("wishlist" + n).style.filter =
        "invert(76%) sepia(84%) saturate(3191%) hue-rotate(359deg)brightness(101%) contrast(102%)";
    wishlistItems = JSON.parse(localStorage.getItem("wishlistItems"));
    for (i of products) {
        let jump;
        if (namecur == i.name) {
            jump = 1;
            for (j in wishlistItems) {
                console.log("wishlistItems[j]:" + wishlistItems[j]);
                if (wishlistItems[j] == namecur) {
                    jump = 0;
                    wishlistItems.splice(j, 1);
                    document.getElementById("wishlist" + n).style.filter = "";
                    document.getElementById("wishlist" + n).style.opacity = "0";
                }
            }
        }
        if (jump) {
            wishlistItems.push(i.name);
            document.getElementById("wishlist" + n).style.filter =
                " invert(76%) sepia(84%) saturate(3191%) hue-rotate(359deg) brightness(101%) contrast(102%)";
        }
    }
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
}

// Add an Item to Bag
function bagAdd(n) {
    let namecur = document.getElementById("name" + n).innerHTML;
    document.getElementById("bag" + n).style.filter =
        "invert(76%) sepia(84%) saturate(3191%) hue-rotate(359deg)brightness(101%) contrast(102%)";
    bagItems = JSON.parse(localStorage.getItem("bagItems"));
    for (i of products) {
        let jump;
        if (namecur == i.name) {
            jump = 1;
            for (j in bagItems) {
                if (bagItems[j] == namecur) {
                    jump = 0;
                    bagItems.splice(j, 1);
                    document.getElementById("bag" + n).style.filter = "";
                    document.getElementById("bag" + n).style.opacity = "0";
                }
            }
        }
        if (jump) {
            bagItems.push(i.name);
            document.getElementById("bag" + n).style.filter =
                " invert(76%) sepia(84%) saturate(3191%) hue-rotate(359deg) brightness(101%) contrast(102%)";
        }
    }
    localStorage.setItem("bagItems", JSON.stringify(bagItems));
}

// Change the image to correspond the type
function mainImgChange(n) {
    document.getElementById("image-background").style.animationName =
        "transImg";
    setTimeout(function dummy1() {
        document.getElementById("image-background").style.animationName = "";
    }, 400);
    setTimeout(function dummy2() {
        document.getElementById("image-background").style.backgroundImage =
            "url(../Images/Catalogue/MainImgs/" + n + ".jpg)";
    }, 200);
}
