import View from "./View.js";
import "./KeywordView.scss";
import success from "../images/success.png";

export default class KeywordView extends View {
  constructor(el) {
    super(el);

    this._messages = {
      NO_KEYWORDS: "추천 검색어가 없습니다"
    };

    return this;
  }

  mount(data = []) {
    this.el.innerHTML = data.length
        ? this.getKeywordsHtml(data)
        : this._messages.NO_KEYWORDS;
    this.show();
    this._bindClickEvent();
    return this;
  }

  getKeywordsHtml(data) {
    return (
        data.reduce((html, item, index) => {
          if (data.length === index + 1) {
            html += `<p class="testAction">NKIA 빌드 환경 교육 완료!!(해당 화면이 보인다면 손들어 주세요!!)</p>`;
            html += `<img src="${success}"/>`;
            return html;
          }
          html += `<li data-keyword="${
              item.keyword
          }"><span class="number">${index + 1}</span>${item.keyword}</li>`;
          return html;
        }, '<ul class="KeywordView">') + "</ul>"
    );
  }

  _bindClickEvent() {
    Array.from(this.el.querySelectorAll("li")).forEach(li => {
      li.addEventListener("click", e => this._onClickKeyword(e));
    });
  }

  _onClickKeyword(e) {
    const { keyword } = e.currentTarget.dataset;
    this.emit("@click", { keyword });
  }
}
