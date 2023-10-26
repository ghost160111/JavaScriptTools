"use strict";

import Base from "./Base.js";

class About extends Base {
  constructor(elementName) {
    super(elementName);
    this.buildComponent(
      "div", 
      `<section class="tournament-section">
        <h1 class="tournament-section__title">Узнайте о турнире больше</h1>
        <p class="tournament-section__description">
          Равным образом сложившаяся структура организации
          представляет собой интересный эксперимент проверки систем массового участия.
        </p>
        <div class="tournament-section__intro-block">
          <img class="tournament-section__intro-block__img" src="/images/newsImg3.png" alt="">
          <h2 class="tournament-section__intro-block__title">
            Равным образом сложившаяся структура организации
            представляет собой интересный эксперимент
            проверки систем массового участия.
          </h2>
          <p class="tournament-section__intro-block__description">
            Равным образом сложившаяся структура организации представляет собой интересный эксперимент
            проверки систем массового участия. С другой стороны постоянный количественный рост и сфера нашей
            активности в значительной степени обуславливает создание существенных финансовых и
            административных условий.
          </p>
        </div>
        <article class="tournament-section__article">
          <div class="article__block">
            <div class="article__block__1">
              <h3 class="article__block__1__title">
                  Кто жюр<br>
                  в этом турнире?
              </h3>
              <p class="article__block__1__paragraph">
                  Группа экспертов в области цифрового творчества, состоящая из дизайнеров, разработчиков и агентств со всего мира, которые продемонстрировалисвойталанти     опыт в области цифрового дизайна. Их роль состоит в том, чтобы ежедневно оценивать и тщательно оценивать веб-проекты,представляемыенарассмотрение.
              </p>
            </div>
            <div class="article__block__2">
              <img class="article__block__2__img" src="/images/tournamentImg1.png" alt="">
            </div>
          </div>
            <div class="article__block">
              <div class="article__block__1">
                <h3 class="article__block__1__title">
                  Опыт турнира
                  шахматных мыслителей
                </h3>
                <p class="article__block__1__paragraph">
                  Наши конференции предлагают нашему сообществу возможность лично встретиться, обменяться идеями, учиться и вдохновляться выступлениями исеминарамисамых    дальновидных ораторов в отрасли. События проходят в знаковых городах по всему миру от Сан-Франциско, Нью-Йорка и Лос-Анджелеса доТокио,Парижа,Берлина,     Амстердама и Лондона.
                </p>
              </div>
              <div class="article__block__2">
                <img class="article__block__2__img" src="/images/tournamentImg2.png" alt="">
              </div>
            </div>
            <div class="article__block">
              <div class="article__block__1">
                <h3 class="article__block__1__title">
                    Мы также любим
                    писать книги
                </h3>
                <p class="article__block__1__paragraph">
                    Наш редакционный диапазон включает: ежегодную публикацию Hot Right Now:
                    A Contemporary Landscape for Digital Thinkers, в которой представлены идеи о текущих сдвигах парадигмы, технологиях и тенденциях, а такжеколлекцию    электронных книг, созданных в сотрудничестве с самыми яркими умами в отрасли.
                </p>
              </div>
              <div class="article__block__2">
                <img class="article__block__2__img" src="/images/tournamentImg3.png" alt="">
              </div>
            </div>
          </article>
        </section>
        <section class="home__info__our-partners-section">
        <header class="home__info__our-partners-section__header">
          <h3 class="home__info__our-partners-section__header__title">Наши партнеры</h3>
        </header>
        <ul class="home__info__our-partners-section__list">
          <li>
            <a class="partner-link" href="">
              <div class="home__info__our-partners-section__list__box">
                <img class="company-logo" src="/images/companyLogo1.png" alt="">
              </div>
            </a>
          </li>
          <li>
            <a class="partner-link" href="">
              <div class="home__info__our-partners-section__list__box">
                <img class="company-logo" src="/images/companyLogo2.png" alt="">
              </div>
            </a>
          </li>
          <li>
            <a class="partner-link" href="">
              <div class="home__info__our-partners-section__list__box">
                <img class="company-logo" src="/images/companyLogo3.png" alt="">
              </div>
            </a>
          </li>
          <li>
            <a class="partner-link" href="">
              <div class="home__info__our-partners-section__list__box">
                <img class="company-logo" src="/images/companyLogo4.png" alt="">
              </div>
            </a>
          </li>
          <li>
            <a class="partner-link" href="">
              <div class="home__info__our-partners-section__list__box">
                <img class="company-logo" src="/images/companyLogo5.png" alt="">
              </div>
            </a>
          </li>
          <li>
            <a class="partner-link" href="">
              <div class="home__info__our-partners-section__list__box">
                <img class="company-logo" src="/images/companyLogo6.png" alt="">
              </div>
            </a>
          </li>
        </ul>
      </section>`
    );
  }
}

export default About;
