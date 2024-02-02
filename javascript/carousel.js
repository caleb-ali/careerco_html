document.addEventListener("DOMContentLoaded", function () {
  const items = [
    {
      image: "/images/qa1.jpeg",
      title: "QA software Testing Practical",
      price: "$100",
    },
    {
      image: "/images/qa2.jpeg",
      title: "QA software Testing Practical",
      price: "$200",
    },
    {
      image: "/images/qa3.jpeg",
      title: "QA software Testing Practical",
      price: "$200",
    },
    {
      image: "/images/qa4.jpeg",
      title: "QA software Testing Practical",
      price: "$200",
    },
    {
      image: "/images/qa3.jpeg",
      title: "QA software Testing Practical",
      price: "$200",
    },
    {
      image: "/images/qa4.jpeg",
      title: "QA software Testing Practical",
      price: "$200",
    },

    // Add more items as needed
  ];

  let currentIndex = 0;
  const carousel = document.getElementById("carousel");
  const goBack = document.getElementById("goBack");
  const goForward = document.getElementById("goForward");

  const updateCarousel = () => {
    carousel.innerHTML = ""; // Clear existing items
    const slicedItems = items.slice(currentIndex, currentIndex + 4);
    slicedItems.forEach((item) => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `

               <style>
               .carousel-container {
                display: flex;
                flex-direction: row;
                margin-top: 1rem;
              }
              
              .mobcarousel-container {
                display: none;
              }
              
              .carousel {
                display: flex;
                overflow: hidden;
                z-index: -1;
                /* Adjust the width based on your needs */
              }
              
              .card {
                margin: 0 15px;
                text-align: left;
                background-color: #f9fafb;
                padding: 1rem;
                padding-bottom: 2rem;
                border-radius: 20px;
                border: 1px solid #ced1d5;
              }
              
              .carousel_title_div {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin-top: 1rem;
              }
              
              .carousel_title_div h3 {
                font-size: small;
                font-weight: 600;
              }
              
              .carousel_title_div p {
                font-size: small;
                font-weight: 600;
              }
              
              .back_btn {
                margin-right: -1.5rem;
              }
              
              .forward_btn {
                margin-left: -1.5rem;
              }
              
              .card_row {
                display: flex;
                flex-direction: row;
                margin-bottom: 1rem;
                gap: 1rem;
                margin-top: 1rem;
              }
              
              .card_row p {
                font-size: small;
              }
              
              .card_row2 {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                gap: 0.1rem;
              }

        
              
              @media screen and (max-width: 768px) {
                .carousel-container {
                  display: none;
                }
              
                .mobcarousel-container {
                  display: flex;
                  flex-direction: row;
                  margin-top: 1rem;
                }
              }
              
               </style>

                <img src="${item.image}" alt="${item.title}" width="250px">
                <div class='carousel_title_div'>
                    <h3>${item.title}</h3>
                    <p>${item.price}</p>
                </div>
                
                <div class="card_row">
                 <div class="card_row2">
                  <img src="/images/stopwatch.svg" />
                  <p>10 Weeks</p>
                 </div>
                 <div class="card_row2">
                  <img src="/images/diamond.svg" />
                  <p>Practical</p>
                 </div>
                </div>
                <button class="btn2">
                 <a class="active" href="">Buy Course</a>
                </button>
 
              
                <!-- Add more item details here -->
            `;
      carousel.appendChild(div);
    });
  };

  goBack.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : 0;
    updateCarousel();
  });

  goForward.addEventListener("click", () => {
    currentIndex =
      currentIndex < items.length - 4 ? currentIndex + 1 : currentIndex;
    updateCarousel();
  });

  updateCarousel(); // Initial population of the carousel
});
