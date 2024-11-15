async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();
    const cardsContainer = document.querySelector(".cards-container");
    data.forEach((element) => {
      const card = document.createElement("div");
      card.classList.add("card");
      //donduyle container icine innerhtml append ettik
      //yukarida api ile datayi fetch ettik error olmamasi durumunda bu kodlar calisacak.
      card.innerHTML = `
        <h3>${element.name} (${element.username})</h3>
        <p><strong>Email:</strong> ${element.email}</p>
        <p><strong>Phone:</strong> ${element.phone}</p>
        <p><strong>Website:</strong> <a href="http://${element.website}" target="_blank">${element.website}</a></p>
        <p><strong>Company:</strong> ${element.company.name}</p>
        <p><strong>Company Catchphrase:</strong> "${element.company.catchPhrase}"</p>
        <p><strong>Company BS:</strong> ${element.company.bs}</p>
        <p><strong>Address:</strong> ${element.address.suite}, ${element.address.street}, ${element.address.city}, ${element.address.zipcode}</p>
        <p><strong>Geo Coordinates:</strong> Lat: ${element.address.geo.lat}, Lng: ${element.address.geo.lng}</p>
      `;

      cardsContainer.appendChild(card);

      card.addEventListener("click", () => {
        const card_ID = element.id;
        console.log(card_ID); // id'yi aldik
        localStorage.setItem('cardId', card_ID);
        window.location.href = `/posts.html?userId=${card_ID}`;
      });
    });
  } catch (err) {
    console.log("Hata: ", err);
  }
}

fetchData();
