
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");

      const titles = ('I LOVE U').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }
    window.onload = () => {
      console.log("JavaScript Loaded!");
  
      // Tambahkan elemen baru ke dalam body
      let questionText = document.createElement("h2");
      questionText.textContent = "Do you want to be my GF?";
      questionText.classList.add("question");
  
      // Tambahkan ke dalam halaman
      document.body.appendChild(questionText);
  };
  
    appendTitle();

    clearTimeout(c);
  }, 1000);
};