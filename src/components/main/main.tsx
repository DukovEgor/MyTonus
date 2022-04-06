import Price from '../price/price';
import Slider from '../slider/slider';

export default function Main() {
  return (
    <main className="main">
      <div className="main__screen">
        <div className="main__screen-container container">
          <div className="main__left">
            <div className="promo__items">
              <p className="promo__item">БЕЗ СВЕРХНАГРУЗОК</p>
              <p className="promo__item">БЕЗ ГОЛОДОВОК</p>
            </div>
            <h1 className="main__title title">Онлайн сервис жиросжигающих тренировок и питания</h1>
            <h2 className="main__subtitle subtitle">Выберите один из планов питания и нагрузок, сконструированных специально
              для Вас!
            </h2>
            <p className="main__description subtitle">Мы предлагаем уникальные планы для похудения, которые создаются нашими
              специалистами из области спорта и нутрициологии согласно Вашим параметрам, целям, срокам и возможностям. Мы
              предложим Вам готовое решение по похудению, позволяющее шаг за шагом достичь желаемого результата за
              максимально возможные короткие сроки.
            </p>
            <form action="/" className="main__form">
              <input type="email" className="main__form-email-input" placeholder="Ваша электронная почта: example@mail.ru" />
              <button className="main__form-email-submit" type="submit">Хочу идельное тело!</button>
            </form>
          </div>
          <div className="main__right">
            <img className="main__right-img" src="/images/girl.png" alt="" />
          </div>
        </div>
      </div>
      <div className="partners__screen bg-red">
        <div className="partners__screen-container container">
          <div className="partners__left">
            <h2 className="partners__title title">Наши партнеры</h2>
            <p className="partners__text subtitle">Тренируйтесь где угодно и когда угодно: дома и на улице, ночью и днем. Все,
              что
              нужно, у Вас уже есть, и это - Вы!
            </p>
          </div>
          <div className="partners__right">
            <img src="/images/partners/cb.svg" alt="Тренажеры" className="partners__logo" />
            <img src="/images/partners/lf.svg" alt="Тренажеры" className="partners__logo" />
            <img src="/images/partners/oct.svg" alt="Тренажеры" className="partners__logo" />
            <img src="/images/partners/pr.svg" alt="Тренажеры" className="partners__logo" />
            <img src="/images/partners/tr.svg" alt="Тренажеры" className="partners__logo" />
          </div>
          <img className="dots" src="/images/partners/dots.svg" alt="Тренажеры" />
        </div>
      </div>
      <Price />
      <div className="about__screen bg-red">
        <div className="about__screen-container container">
          <div className="title__block ">
            <h2 className="about__title title">О нас</h2>
            <p className="about__text subtitle">Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные
              тексты.
              Вскоре пунктуация раз образ за залетают коварный там силуэт свою!
            </p>
          </div>
          <div className="about__row">
            <img src="/images/about/1.png" alt="Онлайн-тренировки и правильное питание" className="about__photo-left about__photo" />
            <div className="about__row-description">
              <h2 className="about__title title">Чем мы занимаемся?</h2>
              <p className="about__text subtitle">Далеко-далеко за словесными, горами в стране гласных и согласных живут
                рыбные тексты.
                Маленький lorem, лучше своего диких собрал города? Lorem одна текст грустный за несколько своих
                переписывается щеке! Сих повстречался однажды подзаголовок!
              </p>
            </div>
          </div>
          <div className="about__row about__row-bottom">
            <div className="about__row-description">
              <p className="about__text text">Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные
                тексты.
                Маленький lorem, лучше своего диких собрал города? Lorem одна текст грустный за несколько своих
                переписывается щеке! Сих повстречался однажды подзаголовок!
              </p>
              <p className="about__text text">Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные
                тексты.
                Маленький lorem, лучше своего диких собрал города? Lorem одна текст грустный за несколько своих
                переписывается щеке! Сих повстречался однажды подзаголовок!
              </p>
              <p className="about__text text">Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные
                тексты.
                Маленький lorem, лучше своего диких собрал города? Lorem одна текст грустный за несколько своих
                переписывается щеке! Сих повстречался однажды подзаголовок!
              </p>
            </div>
            <img src="/images/about/2.png" alt="Онлайн-тренировки и правильное питание" className="about__photo-right about__photo" />
            <img className="dots" src="/images/partners/dots.svg" alt="Тренажеры" />
          </div>
        </div>
      </div>
      <div className="how__screen bg-red">
        <div className="how__screen-container container">
          <div className="how__left">
            <h2 className="how__title title">Как это работает?</h2>
            <p className="how__text subtitle">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные
              тексты.
              Прямо подпоясал коварный щеке ipsum которой но свое родного великий!
            </p>
            <a href="/" className="about__sign-up">Создать аккаунт</a>
          </div>
          <div className="how__right">
            <dl className="steps__list one spoiler">
              <div className="row__spoil active" onClick={(evt) => {
                evt.currentTarget.classList.toggle('active');
              }}
              >
                <dt className="spoil__title"><svg className='chevron' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Chevron Down</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={48} d="M112 184l144 144 144-144" /></svg>
                  <p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.</p>
                </dt>
                <dd className="spoil__answer">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные
                  тексты. Родного, на берегу решила. Маленький однажды она предложения бросил, ему повстречался.
                </dd>
              </div>
              <div className="row__spoil" onClick={(evt) => {
                evt.currentTarget.classList.toggle('active');
              }}
              >
                <dt className="spoil__title"><svg className='chevron' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Chevron Down</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={48} d="M112 184l144 144 144-144" /></svg>
                  <p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.</p>
                </dt>
                <dd className="spoil__answer">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные
                  тексты. Родного, на берегу решила. Маленький однажды она предложения бросил, ему повстречался.
                </dd>
              </div>
              <div className="row__spoil" onClick={(evt) => {
                evt.currentTarget.classList.toggle('active');
              }}
              >
                <dt className="spoil__title"><svg className='chevron' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Chevron Down</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={48} d="M112 184l144 144 144-144" /></svg>
                  <p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.</p>
                </dt>
                <dd className="spoil__answer">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные
                  тексты. Родного, на берегу решила. Маленький однажды она предложения бросил, ему повстречался.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <img className="dots how__screen-dots" src="/images/partners/dots.svg" alt="Тренажеры" />
      </div>
      <div className="blog__screen bg-red">
        <div className="container blog__screen-container">
          <h2 className="blog__header title">Наш еженедельный блог</h2>
          <p className="blog__subtitle subtitle">Узнавайте первыми о правильном питании, тренировках и эксклюзивных
            предложениях для наших клиентов
          </p>
          <div className="blogs">
            <div className="blog">
              <img src="/images/blog/blog1.png" alt="Тренировки в спортивном зале" className="blog__image" />
              <h3 className="blog__title subtitle new">Далеко-далеко за словесными горами в стране гласных и согласных живут
                рыбные тексты.
              </h3>
              <div className="blog__text text">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные
                тексты.
                Рукописи семь переулка, власти щеке это строчка пунктуация эта вопрос, своих обеспечивает проектах,
                подпоясал встретил жизни. Подзаголовок, раз но. Реторический свой деревни это щеке маленький, своего о
                себя продолжил силуэт. loremru42
              </div>
            </div>
            <div className="blog">
              <img src="/images/blog/blog2.png" alt="Тренировки на свежем воздухе" className="blog__image" />
              <h3 className="blog__title subtitle">Далеко-далеко за словесными горами в стране гласных и согласных живут
                рыбные тексты.
                На берегу дороге парадигматическая не его!
              </h3>
              <div className="blog__text text">Далеко-далеко за словесными горами в стране гласных, и согласных живут рыбные
                тексты. Безопасную, власти меня семь рекламных предупреждал коварных. Встретил буквоград от всех бросил
                решила? Рыбными, семь это что назад заманивший текстами языком обеспечивает, наш предупреждал вопроса
                решила? Снова заманивший свое знаках силуэт?
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red">
        <div className="faqsandreviews__screen">
          <div className="faqs__screen">
            <div className="faqs__screen-container container">
              <h2 className="faqs__header title">Часто задаваемые вопросы</h2>
              <p className="faqs__header-subtitle subtitle">Далеко-далеко за словесными горами в стране, гласных и согласных
                живут
                рыбные тексты.
                Инициал над семь повстречался lorem!
              </p>
              <div className="questions">
                <div className="question">
                  <h3 className="question__title subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                  <p className="text question__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quas
                    iusto
                    non architecto dignissimos officia dicta numquam enim ex! Dolorum! Lorem, ipsum dolor sit amet
                    consectetur
                    adipisicing elit. Ipsa id dignissimos tempore cum excepturi earum ex fuga! Accusantium, aliquid
                    reiciendis?
                  </p>
                </div>
                <div className="question">
                  <h3 className="question__title subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                  <p className="text question__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quas
                    iusto
                    non architecto dignissimos officia dicta numquam enim ex! Dolorum! Lorem, ipsum dolor sit amet
                    consectetur
                    adipisicing elit. Ipsa id dignissimos tempore cum excepturi earum ex fuga! Accusantium, aliquid
                    reiciendis?
                  </p>
                </div>
                <div className="question">
                  <h3 className="question__title subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                  <p className="text question__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quas
                    iusto
                    non architecto dignissimos officia dicta numquam enim ex! Dolorum! Lorem, ipsum dolor sit amet
                    consectetur
                    adipisicing elit. Ipsa id dignissimos tempore cum excepturi earum ex fuga! Accusantium, aliquid
                    reiciendis?
                  </p>
                </div>
                <div className="question">
                  <h3 className="question__title subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                  <p className="text question__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quas
                    iusto
                    non architecto dignissimos officia dicta numquam enim ex! Dolorum! Lorem, ipsum dolor sit amet
                    consectetur
                    adipisicing elit. Ipsa id dignissimos tempore cum excepturi earum ex fuga! Accusantium, aliquid
                    reiciendis?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Slider />
        </div>
      </div>
    </main>
  );
}
