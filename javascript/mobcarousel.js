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
        price: "$300",
      },
      {
        image: "/images/qa4.jpeg",
        title: "QA software Testing Practical",
        price: "$300",
      },
      {
        image: "/images/qa3.jpeg",
        title: "QA software Testing Practical",
        price: "$400",
      },
      {
        image: "/images/qa4.jpeg",
        title: "QA software Testing Practical",
        price: "$500",
      },
  
      // Add more items as needed
    ];
  
    let currentIndex = 0;
    const mobcarousel = document.getElementById("mobcarousel");
    const mobgoBack = document.getElementById("mobgoBack");
    const mobgoForward = document.getElementById("mobgoForward");
  
    const updatemobCarousel = () => {
      mobcarousel.innerHTML = ""; // Clear existing items
      const slicedItems = items.slice(currentIndex, currentIndex + 1);
      slicedItems.forEach((item) => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
  
                 <style>
                 .mobcarousel-container {
                  display: flex;
                  flex-direction: row;
                  margin-top: 1rem;
                }
                
                .mobcarousel-container {
                  display: none;
                }
                
                .mobcarousel {
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
                
                .mobcarousel_title_div {
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                  margin-top: 1rem;
                }
                
                .mobcarousel_title_div h3 {
                  font-size: small;
                  font-weight: 600;
                }
                
                .mobcarousel_title_div p {
                  font-size: small;
                  font-weight: 600;
                }
                
                .mobback_btn {
                  margin-right: -1.5rem;
                }
                
                .mobforward_btn {
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
                  .mobcarousel-container {
                    display: block;
                  }
                
                  .mobcarousel-container {
                    display: flex;
                    flex-direction: row;
                    margin-top: 1rem;
                  }

                  .mobback_btn {
                    margin-left: 1rem;
                  }
                  
                  .mobforward_btn {
                    margin-right: 1rem;
                  }
                }
                
                 </style>
  
                  <img src="${item.image}" alt="${item.title}" width="250px">
                  <div class='mobcarousel_title_div'>
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
        mobcarousel.appendChild(div);
      });
    };
  
    mobgoBack.addEventListener("click", () => {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : 0;
      updatemobCarousel();
    });
  
    mobgoForward.addEventListener("click", () => {
      currentIndex =
        currentIndex < items.length - 1 ? currentIndex + 1 : currentIndex;
      updatemobCarousel();
    });
  
    updatemobCarousel(); // Initial population of the mobcarousel
  });
  