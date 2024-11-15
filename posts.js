async function fetchPosts() {
    try {
      // Carda tıklandığında olacaklar
      const cardId = localStorage.getItem('cardId');
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId=" + cardId);
  
      const postData = await response.json();
      console.log(postData);
  
      const postContainer = document.querySelector('.post-container');
      postData.forEach(element => {
        // Her bir post için bir card oluşturuluyor
        const card = document.createElement('div');
        card.classList.add('post-card'); // Card'a bir sınıf ekliyoruz
  
        // Her bir post için içeriği oluşturuyoruz
        card.innerHTML = `
          <h3>${element.title}</h3>
          <p>${element.body}</p>
          <p><strong>Post ID:</strong> ${element.id}</p>
          <p><strong>User ID:</strong> ${element.userId}</p>
        `;
  
        // Post card'ını post-container'a ekliyoruz
        postContainer.appendChild(card);
      });
    } catch (err) {
      console.log("Hata: ", err);
    }
  }
  
  fetchPosts();