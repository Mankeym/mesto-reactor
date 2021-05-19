import logo from './logo.svg';
import './App.css';

function App() {
  return (

      <div className="page">
        <header className="header">
          <img src="<%=require('./images/Vector.svg')%>" className="header__logo" alt="Место"/>
        </header>
        <main>
          <section className="profile">
            <div className="profile__page">
              <div className="profile__avatar">
                <img src="<%=require('./images/image.svg')%>" className="profile__logo" alt="Жак Ив-Кусто"/>
                  <button className="profile__avatar-update" type="button"></button>
              </div>
              <div className="profile__info">
                <div>
                  <h1 className="profile__title" id="heading">Жак-Ив Кусто</h1>
                  <p className="profile__subtitle" id="quote">Исследователь океана</p>
                </div>
                <button type="button" className="profile__rectangle">
                  <img src="<%=require('./images/pen.svg')%>" alt="Ручка"/>
                </button>
              </div>
            </div>
            <button type="button" className="profile__button">
              <img src="<%=require('./images/krest.svg')%>" alt="Крест" className="profile__image"/>
            </button>
          </section>
          <section className="cards">

          </section>

        </main>
        <footer className="footer">
          <h2 className="footer__copyright">© 2020-2021 Mesto Russia</h2>
        </footer>
        <section className="overlay profile-popup">
          <div className="popup">
            <h2 className="popup__title">Редактировать профиль</h2>
            <form name="userData" className="popup__form" noValidate>
              <input type="text" id="popup__name-author" className="popup__input popup__input_type_name" name="username"
                     value="Жак-Ив Кусто" maxLength="40" minLength="2" required />
                <span className="popup__name-author-error popup__error"></span>
                <input type="text" id="popup__link-author" className="popup__input popup__input_type_job"
                       name="userinfo" value="Исследователь окена" maxLength="200" minLength="2" required />
                  <span className="popup__link-author-error popup__error"></span>
                  <button type="submit" className="popup__submit popup__submit-profile" value="Сохранить">Сохранить
                  </button>
            </form>
            <button type="button" className="overlay__button overlay__button-profile">
              <img className="overlay__image" src="<%=require('./images/Close.svg')%>" alt="Крест"/>
            </button>
          </div>
        </section>
        <section className="overlay overlay_edit">
          <div className="popup">
            <h2 className="popup__title">Новое место</h2>
            <form id="form1" name="cardData" className="popup__form popup__form_edit" noValidate>
              <input id="popup__name" type="text" className="popup__input popup__input_type_mesto"
                     name="cardDescription" placeholder="Название" minLength="2" maxLength="30" required/>
                <span className="popup__name-error popup__error"></span>
                <input id="popup__link" type="url" className="popup__input popup__input_type_link" name="cardImage"
                       placeholder="Ссылка на картинку" required/>
                  <span className="popup__link-error popup__error"></span>
                  <button type="submit" className="popup__submit popup__submit-edit" value="Сохранить"
                          disabled>Сохранить
                  </button>
            </form>
            <button type="button" className="overlay__button overlay__button_edit">
              <img className="overlay__image" src="<%=require('./images/Close.svg')%>" alt="Крест"/>
            </button>
          </div>
        </section>
      </div>
        <section className="overlay overlay_edit-picture">
          <div className="popup popup_bigImage">
            <img src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
                 className="popup__picture" alt="Большая картинка"/>
              <h3 className="popup__textpicture"></h3>
              <button type="button" className="overlay__button overlay__button_edit-picture">
                <img className="overlay__image" src="<%=require('./images/Close.svg')%>" alt="Крест"/>
              </button>
          </div>
        </section>

      <template className="card-template">
        <figure className="card">
          <button className="card__trash">
            <img src="<%=require('./images/Trash.svg')%>" alt="Ведро"/>
          </button>
          <img className="card__logo" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
               alt="Картинка"/>
            <figcaption className="card__figcaption">
              <h3 className="card__title"></h3>
              <div className="card__like">
                <button aria-label="Кнопка нравится" type="button" className="card__button"></button>
                <p className="card__score">1</p>
              </div>
            </figcaption>
        </figure>
      </template>

  <section className="overlay overlay_edit-delete">
    <form className="popup popup_delete">
      <h2 className="popup__title">Вы уверены?</h2>
      <button type="submit" className="popup__submit popup__submit-delete" value="Да">Да</button>
      <button type="button" className="overlay__button overlay__button_edit">
        <img className="overlay__image" src="<%=require('./images/Close.svg')%>" alt="Крест"/>
      </button>
    </form>
  </section>

  <section className="overlay overlay_edit_avatar">
    <div className="popup">
      <h2 className="popup__title">Обновить аватар</h2>
      <form className="popup__form popup__form-avatar">
        <input id="popup__avatar" type="url" className="popup__input popup__input_type_avatar" name="cardAvatar"
               placeholder="Ссылка на аватар" required/>
          <span className="popup__link-error popup__error"></span>
          <button type="submit" className="popup__submit popup__submit-avatar" value="Да">Да</button>
          <button type='button' className="overlay__button overlay__button_edit">
            <img className="overlay__image" src="<%=require('./images/Close.svg')%>" alt="Крест"/>
          </button>
      </form>
    </div>
  </section>

  );
}

export default App;
