
export interface Product {
    id: string;
    name: string;
    format: string;
    price: string;
    description: string;
    description2?: string;
    img: string;
    link?: string;
    previous?: string;
    next?: string;
  }
  
  export const products: Product[] = [
    {
      id: "price_1LxHiBGKpDMhyEuLOkox92AU",
      name: "Cupressus x leylandii",
      format: "A1 paper (594 x 841 mm)",
      price: "90",
      description:
        "Print of a section of a Leyland Cypress tree with a crack between the two main stems. <br><br>Print 505 x 675 mm approx. \nPaper (594 x 841 mm)<br>\nPrints cannot be scaled as they are printed directly from the wood block. \nOther colours of ink and paper available on request. ",
      img: "assets/images/home/ley__blue-2x.jpg",
    },
    {
      id: "price_1LxHk4GKpDMhyEuL53Xfr9oB",
      name: "Prunus serrulata 'Kanzan'",
      format: "A2 paper (420 x 594 mm)",
      price: "60",
      description:
        "Print section the main stem of Cherry Tree with large decay pockets. <br>\nPrint 320 x 350 mm approx.\nPaper (420 x 594 mm) <br>\nPrints cannot be scaled as they are printed directly from the wood block. \nOther colours of ink and paper available on request. ",
      img: "assets/images/home/cherry_dec-2x.jpg",
    },
    {
      id: "price_1PSHkmGKpDMhyEuLKuev7Uk2",
      name: "Fraxinus excelsior A4",
      format: "A4 paper (297 x 210 mm)",
      price: "25",
      description:
        "Print of a section of the branch of an Ash Tree. Gold ink on black paper. <br>\nPrint 126 x 137 mm approx.\nPaper (297 x 210 mm) <br>\nPrints cannot be scaled as they are printed directly from the wood block. \nOther colours of ink and paper available on request. ",
      description2:
        "This branch of an Ash Tree belonged to a specimen growing in Haddington, Scotland.<br><br> The eccentric ring growth shows the effect of compression and tension in wood in trees. The narrower rings are the product of gravity pressing down on the bottom of the branch producing wider rings on the top by pulling down and expanding the ring.\nThis same effect can be observed in leaning trees",
      img: "assets/images/home/ash__gold-2x.jpg",
    },
    {
      id: "price_1PSHlQGKpDMhyEuL9EJvZKc8",
      name: "Acer pseudoplatanus",
      format: "A1 paper (594 x 841 mm)",
      price: "90",
      description:
        "Large section of the trunk of a Sycamore tree hand-printed on A1 paper. <br>\nPrint 532 x 583 mm approx.\nPaper (594 x 841 mm) <br>\nPrints cannot be scaled as they are printed directly from the wood block. \nOther colours of ink and paper available on request. ",
      img: "assets/images/home/sycamore__green-2x.jpg",
    },
    {
      id: "price_1PSJDuGKpDMhyEuLJSOwD2kZ",
      name: "Acer platanoides",
      format: "A2 paper (420 x 594 mm)",
      price: "60",
      description:
        "Section of Norway Maple on A2 white paper, printed with metallic gold ink. <br>\nPrint 310 x 385 mm approx.\nPaper (420 x 594 mm) <br>\nPrints cannot be scaled as they are printed directly from the wood block. \nOther colours of ink and paper available on request. ",
      img: "assets/images/home/acer__gold-2x.jpg",
    },
    {
      id: "price_1PSJGiGKpDMhyEuLYjqMmXpV",
      name: "Pseudotsuga menziesii",
      format: "A1 paper (594 x 841 mm)",
      price: "90",
      description:
        "The rings of the main stem of a Douglas Fir with marks from the growth of the side branches. <br>\nPrint 410 x 410 mm approx.\nPaper (594 x 841 mm) <br>\nPrints cannot be scaled as they are printed directly from the wood block. \nOther colours of ink and paper available on request. ",
      img: "assets/images/home/douglas__black-2x.jpg",
    },
    {
      id: "price_1PSJTRGKpDMhyEuLhABhPTtL",
      name: "Prunus serrulata",
      format: "A2 paper (420 x 594 mm)",
      price: "60",
      description:
        "A Cherry Tree's fork with a heart shaped wound produced by fungal rot. <br>\nPrint 320 x 390 mm approx.\nPaper (420 x 594 mm) <br>\nPrints cannot be scaled as they are printed directly from the wood block. \nOther colours of ink and paper available on request. ",
      img: "assets/images/home/cherry__multi-2x.jpg",
    },
    {
      id: "price_1PSJIfGKpDMhyEuL0EjZeL3l",
      name: "Fraxinus excelsior",
      format: "A2 paper (420 x 594 mm)",
      price: "60",
      description:
        "An Ash Tree print with an off centre produced by growing leaning heavily. <br>\nPrint 300 x 310 mm approx.\nPaper (420 x 594 mm) <br>\nPrints cannot be scaled as they are printed directly from the wood block. \nOther colours of ink and paper available on request. ",
      img: "assets/images/home/ash__round-2x.jpg",
      link: "/",
      previous: "/prunusTwin",
      next: "/prunusAvium",
    },
    {
      id: "price_1PSJKWGKpDMhyEuL95b3lzaO",
      name: "Prunus avium",
      format: "A2 paper (420 x 594 mm)",
      price: "60",
      description:
        "Section of a stem of a Bird Cherry Tree using black and red ink together. <br>\nPrint 260 x 305 mm approx.\nPaper (420 x 594 mm) <br>\nPrints cannot be scaled as they are printed directly from the wood block. \nOther colours of ink and paper available on request. ",
      img: "assets/images/home/cherry_cracked-2x.jpg",
    },
  ];
  
  export function getProductData(id: string): Product | undefined {
    let productData = products.find((product) => product.id === id);
  
    if (productData === undefined) {
      console.log("Product data does not exist for ID: " + id);
      return undefined;
    }
  
    return productData;
  }