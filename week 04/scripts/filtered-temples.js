// ========== Footer Info ==========
document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  document.getElementById("currentyear").textContent = currentYear;
  document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;

  // ========== TEMPLE DATA ==========
  const temples = [
    {
      name: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005-08-07",
      area: 11500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    },
    {
      name: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888-05-21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
    },
    {
      name: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015-06-07",
      area: 96630,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    },
    {
      name: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020-05-02",
      area: 6861,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    },
    {
      name: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974-11-19",
      area: 156558,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
    },
    {
      name: "Lima Peru",
      location: "Lima, Peru",
      dedicated: "1986-01-10",
      area: 9600,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    },
    {
      name: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983-12-02",
      area: 116642,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    },
    {
      name: "Arequipa Peru",
      location: "Arequipa, Peru",
      dedicated: "2019-12-15",
      area: 26969,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/arequipa-peru-temple/arequipa-peru-temple-7186.jpg",
    },
    {
      name: "Manaus Brazil",
      location: "Manaus, Brazil",
      dedicated: "2012-06-10",
      area: 32032,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/manaus-brazil-temple/manaus-brazil-temple-16199.jpg",
    },
  ];

  // ========== Elements ==========
  const templeContainer = document.getElementById("templeContainer");
  const templeList = document.getElementById("temple-list");
  const links = document.querySelectorAll("nav a");
  const mainTitle = document.querySelector(".main-title");
  const menuButton = document.getElementById("menuButton");
  const navbar = document.getElementById("navbar");
  const navTitle = document.getElementById("navTitle");

  // ========== Hamburger Menu ==========
  menuButton.addEventListener("click", function () {
    navbar.classList.toggle("active");
    navTitle.style.display = navbar.classList.contains("active") ? "none" : "flex";
  });

  axisButton.addEventListener('click', () => {
  navbar.classList.remove('active');
});

  // ========== Display Temples ==========
  function displayTemples(list) {
    templeList.innerHTML = ""; // clear previous content

    for (let i = 0; i < list.length; i++) {
      const temple = list[i];

      const card = document.createElement("div");
      card.className = "temple-card";

      const img = document.createElement("img");
      img.src = temple.imageUrl;
      img.alt = temple.name + " Temple";

      const name = document.createElement("h3");
      name.textContent = temple.name;

      const location = document.createElement("p");
      location.textContent = "Location: " + temple.location;

      const dedicated = document.createElement("p");
      dedicated.textContent = "Dedicated: " + temple.dedicated;

      const area = document.createElement("p");
      area.textContent = "Area: " + temple.area + " sq ft";

      // Add everything to the card
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedicated);
      card.appendChild(area);

      // Add card to the section
      templeList.appendChild(card);
    }
  }

  // ========== Filter Function ==========
  function filterTemples(filter) {
    let filteredList = [];

    if (filter === "home") {
      filteredList = temples;
      mainTitle.textContent = "Home";
    } else if (filter === "old") {
      for (let i = 0; i < temples.length; i++) {
        const year = parseInt(temples[i].dedicated.substring(0, 4));
        if (year < 1900) {
          filteredList.push(temples[i]);
        }
      }
      mainTitle.textContent = "Old Temples";
    } else if (filter === "new") {
      for (let i = 0; i < temples.length; i++) {
        const year = parseInt(temples[i].dedicated.substring(0, 4));
        if (year > 2000) {
          filteredList.push(temples[i]);
        }
      }
      mainTitle.textContent = "New Temples";
    } else if (filter === "large") {
      for (let i = 0; i < temples.length; i++) {
        if (temples[i].area > 90000) {
          filteredList.push(temples[i]);
        }
      }
      mainTitle.textContent = "Large Temples";
    } else if (filter === "small") {
      for (let i = 0; i < temples.length; i++) {
        if (temples[i].area < 10000) {
          filteredList.push(temples[i]);
        }
      }
      mainTitle.textContent = "Small Temples";
    }

    displayTemples(filteredList);
  }

  // ========== Event Listeners for Navbar ==========
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (event) {
      event.preventDefault();
      const filter = this.getAttribute("data-filter");
      filterTemples(filter);
      navbar.classList.remove("active");
      navTitle.style.display = "flex";
    });
  }

  // ========== Initial Load ==========
  displayTemples(temples);
});
 