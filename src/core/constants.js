export const SERVICES_CONTENT = [
  {
    title: 'Дорожные знаки',
    description: `Просто укажите какой знак и в каком месте надо отображать. При каждом проезде машины в заданном
    участке будет отображаться соответствующий знак. Помогайте на дороге себе и другим умными оповещениями! Это бесплатно.`,
    buttonText: 'Указать бесплатно',
    buttonLink: 'https://adcar.me/',
    type: 'notify',
  },
  {
    title: 'Персональный текст',
    description: `Передайте привет, поздравьте с Днем Рождения или просто сделайте сюрприз близкому человеку! Укажите
             нужный гос номер автомобиля и как только он попадет в зону преследователя ваш текст высветится на заднем стекле!`,
    buttonText: 'Разместить за 100р',
    buttonLink: 'https://adcar.me/',
    type: 'msq',
  },
  {
    title: 'Умная реклама',
    description: `Используйте супер оффлайн таргетинг! Настраивайте показы в нужное время, по заданному адресу или даже
            для конкретных марок авто. Мерседесам один контент, Тойотам другой, Жигулям без контента. Протестируйте онлайн!`,
    buttonText: 'Заказать от 10 000р',
    buttonLink: 'https://adcar.me/',
    type: 'advertise',
  }
]

export const ABOUT_CONTENT = {
  title: 'Как это работает',
  description: `На заднее стекло внутри автомобиля <br/>
устанавливается полупрозрачный тонкий экран <br/>
с интернет подключением`,
  list: [
    {
      icon: 'type1',
      title: `Питается от обычного прикуривателя`,
      description: 'Потребляет минимальное количество энергии'
    },
    {
      icon: 'type2',
      title: `Не загораживает обзор заднего вида`,
      description: 'Полупрозрачность позволяет видеть насквозь'
    },
    {
      icon: 'type3',
      title: `Не слепит тех, кто двигается следом`,
      description: 'Авто регулировка яркости экрана днем/ночью'
    },
    {
      icon: 'type4',
      title: `Определяет где сейчас находится`,
      description: 'За счет встроенного GPS/ГЛОНАСС приемника'
    },
    {
      icon: 'type5',
      title: `Распознает марки автомобилей`,
      description: 'Компьютерное зрение видит BMW/KIA/ВАЗ/etc'
    },
    {
      icon: 'type6',
      title: `Умеет считывать гос номера машин`,
      description: 'Как во время стоянки, так и во время движения'
    }
  ]
}

export const FOOTER_CONTENT = {
  copyright: "© ООО «Эдкар» 2018-2020"
}

export const INFO_CONTENT = {
  description: `Такси больше всего времени проводит на дорогах. Это важный момент, так как холостые показы никому не
    интересны, должен быть умный контент, умеющий подстраиваться по ряду параметров для каждого преследователя и
    несомненно быть полезным и не надоедливым.`,
  title: "Почему такси?"
}

export const INFO = {
  email: "info@adcar.me"
}

export const HERO_CONTENT = {
  title: `Онлайн размещение <br/> на задних стеклах такси`,
  text: `Дорожных знаков, персональных текстов и <strong>умной</strong> рекламы`,
  btn1: 'Видео',
  btn2: 'Как это работает'
}
