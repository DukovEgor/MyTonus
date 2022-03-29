export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <section className="footer__top">
          <a href="/" className="logo">
            <img src="../images/logo.svg" alt="" />
          </a>
          <div className="controls">
            <a href="/" className="controls__link sign-in">Войти</a>
            <a href="/" className="controls__link sign-up">Регистрация</a>
          </div>
        </section>
        <section className="footer__bottom">
          <div className="info__block">
            <p className="info__block-text">Сервис «Antizhir» оказывает платные услуги по доступу к онлайн тренировкам
              для клиентов, а именно предлагает клиенту список видео упражнений и планов питания, и прочих фитнес занятий.
            </p>
          </div>
          <div className="info__block">
            <p className="info__block-text">Услуги сервиса видео тренировок «Antizhir» предоставляет ООО «КИМИКО», ОГРН
              1217100002184, ИНН/КПП 7100002332 / 710001001. ООО «КИМИКО» является оператором персональных данных
            <a className="info--link" href="/">(71-21-002455, Приказ №154 от 24.09.2021).</a>
            </p>
          </div>
          <div className="info__block">
            <p className="info__block-text">Режим работы: 10:00 — 19:00, без выходных.</p>
          </div>
          <div className="info__block">
            <p className="info__block-text">Чтобы начать тренировки необходимо зарегистрироваться в Сервисе и приобрести
              подходящий Вам тарифный план.
            </p>
          </div>
          <div className="info__block">
            <p className="info__block-text">Внимание! Подписка платная: стоимость подписки составляет 889 (восемьсот
              восемьдесят девять) руб. каждые 5 дней (периодичность определяется тарифами сервиса и соглашением о
              применении рекуррентных платежей). По любым вопросам вы можете связаться со специалистами сервиса по
              электронной почте support@antizhir.com или отписаться самостоятельно, использую страницу <a className="info--link" href="/">Отписки от услуг.</a>
            </p>
          </div>
          <div className="info__block">
            <h4 className="info__block-title info__block-title-bold">Политика безопасности</h4>
            <p className="info__block-text">При оплате заказа банковской картой, обработка платежа (включая ввод номера
              карты) происходит на защищенной странице процессинговой системы, которая прошла международную сертификацию.
              Это значит, что Ваши конфиденциальные данные (реквизиты карты, регистрационные данные и др.) не поступают в
              интернет-магазин, их обработка полностью защищена и никто, в том числе наш интернет-магазин, не может
              получить персональные и банковские данные клиента.
            </p>
          </div>
          <div className="info__block">
            <p className="info__block-text">При работе с карточными данными применяется стандарт
              защиты информации, разработанный международными платёжными системами Visa и Masterсard-Payment Card Industry
              Data Security Standard (PCI DSS), что обеспечивает безопасную обработку реквизитов Банковской карты
              Держателя. Применяемая технология передачи данных гарантирует безопасность по сделкам с Банковскими картами
              путем использования протоколов Secure Sockets Layer (SSL), Verifiedby Visa, Secure Code,и закрытых
              банковских сетей, имеющих высшую степень защиты.
            </p>
          </div>
          <div className="info__block">
            <p className="info__block-text">Регистрируясь на сайте Вы ознакомились и соглашаетесь с <a className="info--link" href="/">Договором офферты</a>,
              <a className="info--link" href="/">Политикой Конфиденциальности</a>, <a className="info--link" href="/">Тарифами</a>
              и даёте своё <a className="info--link" href="/">Согласие на обработку персональных данных</a>, <a className="info--link" href="/">Согласие на получение рекламных материалов</a> и выражаю своё <a className="info--link" href="/">Согласие с рекуррентными платежами.</a>
            </p>
          </div>
          <div className="info__block">
            <p className="info__block-text">Если услуга перестала быть актуальна для вас (вы получили тело мечты или
              более не нуждаетесь в тренировках), вы можете самостоятельно отписаться от услуги в любой момент. Для этого
              вам надо авторизоваться в <a className="info--link" href="/">личном кабинете</a> и перейти в раздел управления
              подписками или воспользоваться
            <a className="info--link" href="/">страницей отписки.</a>
            </p>
          </div>
          <div className="info__block">
            <h4 className="info__block-title info__block-title-bold">Описание условий возврата</h4>
            <p className="info__block-text">Возврат осуществляется на основании заполненного заявления. Для того, чтобы
              осуществить возврат, необходимо отправить заявку на почту support@antizhir.com и получить инструкцию от
              менеджера нашего сервиса. Либо осуществить возврат можно в автоматическом режиме в своём личном кабинете.
            </p>
          </div>
          <div className="info__block">
            <p className="info__block-text">Если покупка была оплачена банковской картой, средства будут возвращены на
              карту, с которой была совершена оплата в течение 30 календарных дней с даты заполненного заявления на
              возврат.
            </p>
          </div>
          <div className="info__block">
            <h4 className="info__block-title info__block-title-bold">Политика возврата платежей</h4>
            <p className="info__block-text">Уважаемые Клиенты, информируем Вас о том, что при запросе возврата денежных
              средств при отказе от покупки, возврат производится исключительно на ту же банковскую карту, с которой была
              произведена оплата.
            </p>
          </div>
        </section>
        <section className="pay__methods">
          <img src="/images/methods/visa.png" alt="Средство платежа" className="pay__method" />
          <img src="/images/methods/master.png" alt="Средство платежа" className="pay__method" />
          <img src="/images/methods/mir.jpg" alt="Средство платежа" className="pay__method" />
          <img src="/images/methods/qiwi.jpg" alt="Средство платежа" className="pay__method" />
          <img src="/images/methods/yandex.jpg" alt="Средство платежа" className="pay__method" />
        </section>
      </div>
    </footer>

  );
}
