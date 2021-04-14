(function () {
  /* constant ui elements */
  const searchResultsEl = document.querySelector("#main .search-results");

  /* FUNCTIONS */

  /* element builders */
  function buildSingleAlsoAsk(data, idx) {
    let html = `
    <div class='also-ask-item'>
      <input id='tab-${idx}' type='checkbox' />
      <label for='tab-${idx}'>${data.main}</label>
      <div class='content'>
        <div class='snippet'>${data.snippetHTML}</div>
        <span>${data.date}</span>
        
        <a href='${data.url}'>
          <div class='address'>
            <span>${data.domain}</span>
            <span class="material-icons">chevron_right</span>
            <span>${data.path}</span>
          </div>
          <h3>${data.title}</h3>
        </a>

        <div>Search for: <a href='#'>${data.main}</a></div>
      </div>
      <span class="material-icons accordian-btn">expand_more</span>
      <span class="material-icons accordian-btn">expand_less</span>
    </div>`;

    return html;
  }

  function buildSingleResult(data) {
    let html = `
    <div class='search-result'>
      <a href='${data.url}'>
        <div class='address'>
          <span>${data.domain}</span>
          <span class="material-icons">chevron_right</span>
          <span>${data.path}</span>
          <span class="material-icons">more_vert</span>
        </div>
        <h3>${data.title}</h3>
      </a>
      <div class='snippet'>${data.snippet}</div>
    </div>`;

    return html;
  }

  /* section builders */
  function buildPeopleAlsoAsk(arr) {
    let html = `
    <div class='people-also-ask'>
      <div>
        <h3>People also ask</h3>
        <span class="material-icons">more_vert</span>
      </div>`;

    arr.forEach((item, idx) => {
      html += buildSingleAlsoAsk(item, idx);
    });

    html += `</div>`;
    return html;
  }

  function buildResults(arr) {
    let html = ``;

    arr.forEach((item, idx) => {
      if (idx == 1) {
        html += buildPeopleAlsoAsk(data.peopleAlsoAsk);
      }
      html += buildSingleResult(item);
    });

    return html;
  }

  function buildRelatesSearches() {
    return "";
  }

  function buildSuggested() {
    return "";
  }

  /* build and place html */

  searchResultsEl.innerHTML = buildResults(data.results);
})();
