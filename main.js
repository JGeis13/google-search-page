(function () {
  /* constant ui elements */
  const searchResultsEl = document.querySelector("#main .search-results");
  const relatedSearchesEl = document.querySelector("#related .related-searches");
  const suggestedSearchesEl = document.querySelector("#suggested .suggested-searches");

  /* FUNCTIONS */

  /* element builders */
  function buildSingleAlsoAsk(data, idx) {
    let html = `
    <div class='also-ask-item accordian-item'>
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

  function buildSingleRelatedSearch(data, idx) {
    let html = `
    <div class='related-search-item accordian-item'>
      <input id='tab2-${idx}' type='checkbox' />
      <label for='tab2-${idx}'>${data.title}</label>
      <div class='content'>
        <div class='snippet'>${data.snippetHTML}</div>
      </div>
      <span class="material-icons accordian-btn">expand_more</span>
      <span class="material-icons accordian-btn">expand_less</span>
    </div>`;

    return html;
  }

  function buildSingleSuggestedSearch(data) {
    return `
      <div class='suggested-search-item'>
        <span class='material-icons'>search</span>
        <a href='#'>${data}</a>
      </div>
    `;
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

    html += `</div>
      <div class="feedback">
          <span></span>
          <a href="#">Feedback</a>
        </div>`;
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

  function buildRelatedSearches(arr) {
    let html = `
      <div>
        <h3>Related searches</h3>
        <span class="material-icons">more_vert</span>
      </div>`;

    arr.forEach((item, idx) => {
      html += buildSingleRelatedSearch(item, idx);
    });

    return html;
  }

  function buildSuggested(arr) {
    let html = ``;

    arr.forEach((item, idx) => {
      html += buildSingleSuggestedSearch(item, idx);
    });

    return html;
  }

  /* build and place html */

  searchResultsEl.innerHTML = buildResults(data.results);
  relatedSearchesEl.innerHTML = buildRelatedSearches(data.relatedSearches);
  suggestedSearchesEl.innerHTML = buildSuggested(data.suggested);
})();
