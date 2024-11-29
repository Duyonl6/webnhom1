
function showSuggestions() {
    document.getElementById('suggestions').style.display = 'block';
  }
 
  function hideSuggestions() {
    setTimeout(() => {
      document.getElementById('suggestions').style.display = 'none';
    }, 200);
  }
  
  function filterSuggestions() {
    const searchValue = document.getElementById('search-bar').value.toLowerCase();
    const suggestions = document.getElementById('suggestions').querySelectorAll('p');
  
    suggestions.forEach((suggestion) => {
      const text = suggestion.textContent.toLowerCase();
      if (text.includes(searchValue)) {
        suggestion.style.display = 'block';
      } else {
        suggestion.style.display = 'none';
      }
    });
  }

  function fillSearch(text) {
    document.getElementById('search-bar').value = text;
    document.getElementById('search-bar').focus();
  }

  