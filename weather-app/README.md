# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Пояснения к проекту

1.  <b>Внешний вид приложения</b> <br>
    При реализации проекта следовала дизайну, не везде это получилось, были спорные моменты макета, которые надо было уточнить, но из-за ограчения времения приоритетом стал функционал, поэтому внешний вид не совсем соотвествует макету. Верстка была сделана без препроцессоров, думаю в таком небольшом проекте они были не нужны.
    Возникли трудности с кастомизацией стилей инпутов, в которых выбирается город и дата, если бы не было ограничения, то лучше было использовать компонент какой-нибудь ui-библиотеки

2.  <b>Работа с API</b> <br>

    Прогноз на неделю получаем в виде 8 дней, с учетом текущего, поэтому последний день был исключен, чтобы осталось только 7 карточек.
    Данные за прошлый период доступны только 5 дней назад, получается пользователя надо предупреждать об этом, либо ограничивать выбор даты.
    Ключ API для работы сервисом есть в коде, но это не очень хорошая идея, но для тестового приложения было сделано так.

3.  <b>State management.</b> <br>

    В этом приложении использовался React.useState. Было решено не использовать Redux или любую другую глобальную библиотеку управления состоянием. С одной стороны, это помогло бы отделить бизнес-логику от уровня представления, но, с другой стороны, не оправданно для такой небольшой задачи.

4.  <b>Структура</b> <br>

    Возможно структура проекта и его компонентов не самая удачная, но здесь у нас только одна страница приложения, поэтому придерживалась приниципа разделения логики на небольшие компоненты, которые можно было бы переиспользовать.

    <b>Пункты для улучшения</b>

    Доработка дизайна по макету(+адаптив на мобильных устройствах)
    Проверка ответа API, обработка ошибок
    Рефакторинг кода
