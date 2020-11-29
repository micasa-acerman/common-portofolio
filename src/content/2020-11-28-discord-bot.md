---
templateKey: blog-post
id: 24214ewqedsadas
title: Как создать дискорд бота?
slug: /2020/11/28/how-create-discord-bot
date: 2020-11-28T03:48:03.125Z
description: Разработка discord бота на node.js
headerImage: https://i.imgur.com/z3sHshB.png
type: post
tags:
  - js
  - discord
  - bot
---

## Discord Bot

<div class="content-body tutorial-content" data-growable-markdown="">


### Введение

[Discord](https://discord.com/) — это приложение чата, позволяющее миллионам пользователей со всего мира обмениваться сообщениями и общаться в голосовом чате в сообществах, называемых [«гильдии»](https://discord.com/developers/docs/resources/guild) или «серверы». Discord также включает функциональный API, который разработчики смогут использовать для построения мощных ботов Discord. Боты могут выполнять разнообразные действия, в том числе отправлять сообщения на серверы, отправлять пользователям сообщения DM, модерировать серверы и воспроизводить звук в голосовых чатах. Это позволяет разработчикам создавать мощных ботов со сложными и продвинутыми функциями, включая инструменты модерирования и даже игры. Например, служебный бот [Dyno](https://dyno.gg/bot) обслуживает миллионы гильдий и содержит множество полезных функций, включая защиту от спама, музыкальный проигрыватель и другие служебные функции. Научившись создавать боты Discord, вы получите множество возможностей, с которыми тысячи людей смогут взаимодействовать каждый день.

В этом обучающем модуле мы создадим бот Discord с нуля, используя [Node.js](https://nodejs.org/en/) и библиотеку [Discord.js](https://discord.js.org/#/), позволяющую пользователям взаимодействовать с Discord API напрямую. Мы настроим профиль бота Discord, получим токены аутентификации для бота и запрограммируем бот для обработки отправляемых пользователями команд с аргументами.

<a name="предварительные-требования" data-unique="предварительные-требования"></a><a name="предварительные-требования" data-unique="предварительные-требования"></a>

## Предварительные требования

Для начала вам потребуется следующее:

*   Node.js, установленный на вашем компьютере для разработки. Чтобы установить его в macOS или Ubuntu 18.04, следуйте указаниям руководства [Установка Node.js и создание локальной среды разработки в macOS](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-and-create-a-local-development-environment-on-macos) или раздела **Установка с помощью PPA** руководства [Установка Node.js в Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04).

*   Любой текстовый редактор по вашему усмотрению, например, [Visual Studio Code](https://code.visualstudio.com/), [Atom](https://atom.io), [Sublime](https://www.sublimetext.com/) или [Nano](https://www.nano-editor.org/).

*   [Бесплатная учетная запись Discord](https://discord.com/register) с подтвержденной учетной записью электронной почты и [бесплатный сервер Discord](https://support.discord.com/hc/en-us/articles/204849977-How-do-I-create-a-server-), который вы будете использовать для тестирования вашего бота Discord.

<a name="шаг-1-—-настройка-бота-discord" data-unique="шаг-1-—-настройка-бота-discord"></a><a name="шаг-1-—-настройка-бота-discord" data-unique="шаг-1-—-настройка-бота-discord"></a>

## Шаг 1 — Настройка бота Discord

На этом шаге вы будете использовать графический интерфейс разработчиков Discord для настройки бота Discord и получения токена бота, который вы передадите в свою программу.

Чтобы зарегистрировать бота на платформе Discord, используйте [панель приложений Discord](https://discord.com/developers/applications/). Здесь разработчики могут создавать приложения Discord, включая ботов Discord.

![Изображение панели приложений Discord после первого посещения сайта https://discord.com/developers/applications](https://assets.digitalocean.com/articles/node_discord_bot/step1a.png)

Для начала нажмите **New Application** (Новое приложение). Discord предложит вам ввести имя нового приложения. Затем нажмите **Create** (Создать) для создания приложения.

![Изображение командной строки для создания приложения с введенным именем приложения "Test Node.js Bot"](https://assets.digitalocean.com/articles/node_discord_bot/step1b.png)

<span class="note">**Примечание.** Имя приложения не связано с именем бота, и эти имена могут не совпадать.  
</span>

Теперь откройте свою панель приложения. Чтобы добавить бота в приложение, откройте вкладку **Bot** (Бот) на панели навигации слева.

![Изображение вкладки Bot на панели приложений](https://assets.digitalocean.com/articles/node_discord_bot/step1c.png)

Нажмите кнопку **Add Bot** (Добавить бота), чтобы добавить бота в приложение. Нажмите кнопку **Yes, do it!** (Да, сделать это!) в диалоге запроса подтверждения. Откроется панель с подробными сведениями об имени вашего бота, токене аутентификации и изображении в профиле.

![Панель с подробными сведениями о боте](https://assets.digitalocean.com/articles/node_discord_bot/step1d.png)

На этой панели вы можете изменить имя бота или изображение профиля. Также необходимо скопировать токен аутентификации бота, нажав **Click to Reveal Token** (Нажмите для показа токена) и скопировав отображаемый токен.

<span class="warning">**Предупреждение.** Никогда не публикуйте и не выгружайте в сеть свой токен бота, поскольку это позволит любому пользователю выполнить вход в бот.  
</span>

Теперь нужно создать приглашение, которое позволяет добавить гильдии ботов Discord, где вы можете протестировать бот. Вначале перейдите на вкладку **OAuth2** на панели приложения. Чтобы создать приглашения, прокрутите страницу и выберите **бота** в разделе **scopes**. Также необходимо установить разрешения, чтобы определить, какие действия бот может выполнять в гильдиях. Для целей этого обучающего модуля выберите пункт **Administrator** (Администратор), которые дадут вашему боту разрешения для выполнения в гильдиях практически любых действий. Скопируйте ссылку с помощью кнопки .

![Вкладка OAuth2 с установленной сферой действия bot и уровнем разрешений administator](https://assets.digitalocean.com/articles/node_discord_bot/step1e.png)

Затем добавьте бот на сервер. Перейдите по созданной ссылке с приглашением. Вы можете добавить бот на любой сервер, который вам принадлежит или на котором у вас есть права администратора, используя выпадающее меню.

![Страница после перехода по ссылке с приглашением, что позволяет пользователям добавлять бот на серверы](https://assets.digitalocean.com/articles/node_discord_bot/step1f.png)

Теперь нажмите кнопку **Continue** (Продолжить). Обязательно установите отметку рядом с полем **Administrator**, чтобы предоставить боту разрешения администратора. Затем нажмите **Authorize** (Авторизация). Discord предложит вам решить головоломку [CAPTCHA](https://en.wikipedia.org/wiki/CAPTCHA), прежде чем бот сможет подключиться к серверу. Теперь наш бот Discord отображается в списке пользователей сервера, на который вы добавили бота, со статусом **offline** (не в сети).

![Список пользователей сервера Discord с новым ботом в разделе offline списка пользователей](https://assets.digitalocean.com/articles/node_discord_bot/step1g.png)

Вы успешно создали бота Discord и добавили его на сервер. Далее мы напишем программу для входа в бот.

<a name="шаг-2-—-создание-проекта" data-unique="шаг-2-—-создание-проекта"></a><a name="шаг-2-—-создание-проекта" data-unique="шаг-2-—-создание-проекта"></a>

## Шаг 2 — Создание проекта

На этом шаге мы настроим базовую среду программирования, где выполним сборку бота и войдем в него программным путем.

Вначале необходимо настроить папку проекта и необходимые файлы проекта для бота.

Создайте папку проекта:

<div class="code-toolbar">

    mkdir discord-bot

<div class="toolbar">

<div class="toolbar-item"></div>

</div>

</div>

Перейдите в только что созданную папку проекта:

<div class="code-toolbar">

    cd discord-bot

<div class="toolbar">

<div class="toolbar-item"></div>

</div>

</div>

Далее используйте текстовый редактор для создания файла с именем `config.json` для сохранения токена аутентификации вашего бота:

<div class="code-toolbar">

    nano config.json

<div class="toolbar">

<div class="toolbar-item"></div>

</div>

</div>

Затем добавьте в файл конфигурации следующий код, заменяя выделенный текст токеном аутентификации вашего бота:

<div class="code-label " title="config.json">config.json</div>

<div class="code-toolbar">

    {
        "BOT_TOKEN": "YOUR BOT TOKEN"
    }

<div class="toolbar">

<div class="toolbar-item"></div>

</div>

</div>

Сохраните и закройте файл.

Затем мы создадим файл `package.json`, где будут храниться детали нашего проекта и информация о зависимостях, используемых в проекте. Для создания файла `package.json` запустите следующую команду `npm`:

<div class="code-toolbar">

    npm init

<div class="toolbar">

<div class="toolbar-item"></div>

</div>

</div>

`npm` запросит различные детали вашего проекта. Если вам нужны указания по [ответам на эти запросы, воспользуйтесь руководством «Использование модулей Node.js с npm и package.json](https://www.digitalocean.com/community/tutorials/how-to-use-node-js-modules-with-npm-and-package-json#step-1-%E2%80%94-creating-a-packagejson-file)».

Сейчас мы установим пакет `discord.js`, который будем использовать для взаимодействия с Discord API. Вы можете установить `discord.js` через npm с помощью следующей команды:

<div class="code-toolbar">

    npm install discord.js

<div class="toolbar">

<div class="toolbar-item"></div>

</div>

</div>

Мы настроили файл конфигурации, установили необходимую зависимость и теперь можем начать сборку бота. В реальном приложении мы бы разделили код большого бота на несколько файлов, но в этом обучающем модуле мы поместим весь код бота в один файл.

Вначале создайте файл с именем `index.js` в папке `<span class="highlight">discord-bot</span>` для кода:

<div class="code-toolbar">

    nano index.js

<div class="toolbar">

<div class="toolbar-item"></div>

</div>

</div>

Начните программирование бота, запросив зависимость `discord.js` и файл конфигурации с токеном бота:

<div class="code-label " title="index.js">index.js</div>

<div class="code-toolbar">

    const Discord = require("discord.js");
    const config = require("./config.json");

<div class="toolbar">

<div class="toolbar-item"></div>

</div>

</div>

После этого добавьте следующие две строки кода:

<div class="code-label " title="index.js">index.js</div>

<div class="code-toolbar">

    ...
    const client = new Discord.Client();

    client.login(config.BOT_TOKEN);

<div class="toolbar">

<div class="toolbar-item"></div>

</div>

</div>

Сохраните и закройте файл.

Первая строка кода создает новый клиент `Discord.Client` и назначает его как значение константы `client`. Этот клиент частично обеспечивает взаимодействие с Discord API и получает уведомления Discord о событиях, например, о новых сообщениях. Фактически клиент представляет бот Discord.

Во второй строке кода метод `login` используется на `клиенте` для входа в созданный бот Discord с использованием токена в файле `config.json` в качестве пароля. Токен сообщает Discord API, для какого бота предназначена программа, а также подтверждает вашу аутентификацию для использования бота.

Теперь запустите файл `index.js` с помощью Node:

<div class="code-toolbar">

    node index.js

<div class="toolbar">

<div class="toolbar-item"></div>

</div>

</div>

Теперь статус вашего бота на сервере Discord, куда вы его добавили, изменится на online (в сети).

![Изображение бота со статусом online](https://assets.digitalocean.com/articles/node_discord_bot/step2a.png)

Мы успешно настроили среду программирования и создали базовый код для входа в бот Discord. На следующем шаге мы займемся пользовательскими командами и заставим бота выполнить определенные действия, например, отправить сообщения.

<a name="шаг-3-—-обработка-первой-команды-пользователя" data-unique="шаг-3-—-обработка-первой-команды-пользователя"></a><a name="шаг-3-—-обработка-первой-команды-пользователя" data-unique="шаг-3-—-обработка-первой-команды-пользователя"></a>

## Шаг 3 — Обработка первой команды пользователя

На этом шаге мы создадим бот, который может обрабатывать команды пользователя. Вы запустите свою первую команду `ping`, на которую будет отправлен ответ `pong` с указанием времени ответа на команду.

Сначала необходимо обеспечить обнаружение и получение любых отправляемых пользователями сообщений, чтобы бот мог обрабатывать любые команды. Используя метод `on` клиента Discord, Discord будет отправлять вам уведомления о новых событиях. Метод `on` принимает два аргумента: название ожидаемого события и функцию, которая будет запускаться каждый раз, когда будет возникать это событие. С этим методом вы можете ожидать события `message`, которое будет возникать каждый раз при отправке сообщения в гильдию, где у бота имеется разрешение на просмотр сообщений. Поэтому мы создадим функцию, которая будет запускаться для обработки команд каждый раз при отправке сообщения.

Вначале откройте свой файл:

<div class="code-toolbar">

    nano index.js

<div class="toolbar">

<div class="toolbar-item"></div>

</div>

</div>

Добавьте в файл следующий код:

<div class="code-label " title="index.js">index.js</div>

<div class="code-toolbar">

    ...
    const client = new Discord.Client();

    client.on("message", function(message) { 

    });                                      

    client.login(config.BOT_TOKEN);

<div class="toolbar">

<div class="toolbar-item"></div>

</div>

</div>

Эта функция, выполняемая для события `message`, принимает параметр `message`. Параметр `message` имеет значение экземпляра [Discord.js message](https://discord.js.org/#/docs/main/stable/class/Message), содержащее информацию об отправленном сообщении и методах, которые помогут боту ответить на него.

Добавьте следующую строку кода в функцию обработки команд:

<div class="code-label " title="index.js">index.js</div>

<div class="code-toolbar">

    ...
    client.on("message", function(message) {
      if (message.author.bot) return;
    });
    ...

<div class="toolbar">

<div class="toolbar-item"></div>

</div>

</div>

Эта строка проверяет, является ли автор сообщения ботом, и если это так, останавливает обработку команды. Это важно, поскольку обычно нам не нужно обрабатывать сообщения ботов или отвечать на них. Другим ботам обычно не требуется использовать наш бот, и поэтому игнорирование их сообщений позволит нам сэкономить вычислительную мощность и предотвратить случайные ответы.

Теперь мы напишем обработчик команд. Для этого важно понимать обычный формат команды Discord. Обычно структура команды Discord содержит три части в следующем порядке: префикс, имя команды и (иногда) аргументы команды.

![Изображение типичной команды Discord "! add 1 2"](https://assets.digitalocean.com/articles/node_discord_bot/step3a.png)

*   Префикс: префикс может быть любым, но обычно это знак пунктуации или абстрактная фраза, которая обычно не может располагаться в начале сообщения. Это означает, что при добавлении префикса в начало сообщения бот будет знать, что это команда, которую ему необходимо обработать.

*   Имя команды: имя команды, которое пользователь хочет использовать. Это означает, что бот может поддерживать несколько команд с разными функциями и разрешать пользователям выбирать между ними, используя разные имена команд.

*   Аргументы: иногда команда запрашивает или использует дополнительную информацию от пользователя, и пользователь может указывать аргументы после имени команды, разделяя их пробелами.

<span class="note">**Примечание.** Принудительно устанавливаемой структуры команд нет, и боты могут обрабатывать команды как угодно, однако здесь мы описываем эффективную структуру, которую использует большинство ботов.  
</span>

Чтобы начать создание синтаксического анализатора команд, поддерживающего этот формат, добавьте следующие строки кода в функцию обработки сообщений:

<div class="code-label " title="index.js">index.js</div>

<div class="code-toolbar">

    ...
    const prefix = "!";

    client.on("message", function(message) {
      if (message.author.bot) return;
      if (!message.content.startsWith(prefix)) return;
    });
    ...

<div class="toolbar">

<div class="toolbar-item"></div>

</div>

</div>

Первая строка кода добавляется, чтобы присвоить значение `"!"` константе `prefix`, которую мы будем использовать в качестве префикса бота.

Вторая строка кода проверяет, начинается ли содержание обрабатываемого ботом сообщения с заданного префикса, и останавливает дальнейшую обработку сообщения, если префикса нет.

Теперь необходимо конвертировать остальную часть сообщения в название команды и любые аргументы, которые могут присутствовать в сообщении. Добавьте следующие выделенные строки:

<div class="code-label " title="index.js">index.js</div>

<div class="code-toolbar">

    ...
    client.on("message", function(message) {
      if (message.author.bot) return;
      if (!message.content.startsWith(prefix)) return;

      const commandBody = message.content.slice(prefix.length);
      const args = commandBody.split(' ');
      const command = args.shift().toLowerCase();
    });
    ...

<div class="toolbar">

<div class="toolbar-item"></div>

</div>

</div>

Первая строка используется для удаления префикса из содержания сообщения и назначения результата константе `commandBody`. Это необходимо, поскольку нам не нужно, чтобы префикс входил в обработанное имя команды.

Вторая строка принимает сообщение с удаленным префиксом и использует на нем [метод `split`](https://www.digitalocean.com/community/tutorials/how-to-index-split-and-manipulate-strings-in-javascript#splitting-strings) с пробелом в качестве разделителя. Он разделяет команду на массив субстрок, проводя разделение после каждого пробела. В результате получается массив, содержащий имя команды, за которым идут аргументы (если они содержатся в сообщении). Мы назначаем этот массив константе `args`.

Третья строка удаляет первый элемент из массива `args` (это будет имя команды), конвертирует его в нижний регистр и назначает константе `command`. Это позволяет изолировать имя команды и оставить в массиве только аргументы. Также мы используем метод `toLowerCase`, поскольку команды в ботах Discord обычно не учитывают регистр.

Мы завершили построение синтаксического анализатора команд с реализацией обязательного префикса и получением имени команды и всех аргументов из сообщений. Теперь мы реализуем и создадим код для определенных команд.

Добавьте следующий код, чтобы начать реализацию команды `ping`:

<div class="code-label " title="index.js">index.js</div>

<div class="code-toolbar">

    ...
      const args = commandBody.split(' ');
      const command = args.shift().toLowerCase();

      if (command === "ping") {

      }                        
    });
    ...

<div class="toolbar">

<div class="toolbar-item"></div>

</div>

</div>

Это [выражение `if`](https://www.digitalocean.com/community/tutorials/how-to-write-conditional-statements-in-javascript) проверяет соответствие обработанного имени команды (назначенного константе `command`) значению `"ping"`. Такое соответствие означает, что пользователь хочет использовать команду `"ping"`. Мы вложим код определенной команды в блок выражения `if`. Впоследствии вы сможете использовать этот шаблон для других команд.

Теперь вы можете реализовать код для команды `"ping"`:

<div class="code-label " title="index.js">index.js</div>

<div class="code-toolbar">

    ...
      if (command === "ping") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
      }
    ...

<div class="toolbar">

<div class="toolbar-item"></div>

</div>

</div>

Сохраните и закройте файл.

Мы добавляем блок команды `"ping"`, который рассчитывает разницу между текущим временем, определяемым с помощью [метода `now`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now) объекта `Date`, и временной меткой создания сообщения, выражаемую в миллисекундах. Таким образом рассчитывается время обработки сообщения и ответа бота на команду `"ping"`.

Вторая строка отвечает на команду пользователя, используя метод `reply` с константой `message`. [Метод `reply`](https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=reply) отправляет запрос ping (уведомляющий пользователя и выделяющий сообщение для указанного пользователя) пользователю, который отправил команду, добавляя после запроса содержание, указанное в качестве первого аргумента метода. Мы указали [литераль шаблона](https://www.digitalocean.com/community/tutorials/understanding-template-literals-in-javascript), содержащую сообщение и рассчитанное значение ping, в качестве ответа, который будет использоваться методом `reply`.

На этом мы завершаем реализацию команды `"ping"`.

Запустите свой бот с помощью следующей команды (в той же папке, что и `index.js`):

<div class="code-toolbar">

    node index.js

<div class="toolbar">

<div class="toolbar-item"></div>

</div>

</div>

Теперь вы можете использовать команду `"! ping"` на любом канале, где бот может просматривать и принимать сообщения, а также отправлять ответы.

![Изображение бота, отвечающего в Discord на запрос "! ping" ответом "@T0M, Pong! This message had a latency of 1128ms."](https://assets.digitalocean.com/articles/node_discord_bot/step3b.png)

Вы успешно создали бот, который может обрабатывать команды пользователей, и реализовали свою первую команду. На следующем шаге мы продолжим разработку бота, реализовав команду sum.

<a name="шаг-4-—-реализация-команды-sum" data-unique="шаг-4-—-реализация-команды-sum"></a><a name="шаг-4-—-реализация-команды-sum" data-unique="шаг-4-—-реализация-команды-sum"></a>

## Шаг 4 — Реализация команды Sum

Теперь мы расширим нашу программу, реализовав команду `"! sum"`. Эта команда принимает любое количество аргументов, складывает их и возвращает пользователю сумму всех аргументов.

Если ваш бот Discord еще работает, вы можете остановить его процессы, нажав `CTRL + C`.

Откройте файл `index.js` снова:

<div class="code-toolbar">

    nano index.js

<div class="toolbar">

<div class="toolbar-item"></div>

</div>

</div>

Чтобы начать реализацию команды `"! sum"`, мы используем блок `else-if`. После проверки имени команды ping бот будет проверять, имеет ли имя команды значение `"sum"`. Мы используем блок `else-if`, потому что одновременно будет обрабатываться только одна команда, и если программа определит совпадение с именем команды `"ping"`, ей не нужно будет проводить проверку на совпадение с именем команды `"sum"`. Добавьте в файл следующие выделенные строки:

<div class="code-label " title="index.js">index.js</div>

<div class="code-toolbar">

    ...
      if (command === "ping") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Ping! This message had a latency of ${timeTaken}ms.`);
      }

      else if (command === "sum") {

      }                            
    });
    ...

<div class="toolbar">

<div class="toolbar-item"></div>

</div>

</div>

Теперь вы можете начать реализацию кода для команды `"sum"`. Код команды `"sum"` будет размещен в только что созданном нами блоке `else-if`. Теперь добавьте следующий код:

<div class="code-label " title="index.js">index.js</div>

<div class="code-toolbar">

    ...
      else if (command === "sum") {
        const numArgs = args.map(x => parseFloat(x));
        const sum = numArgs.reduce((counter, x) => counter += x);
        message.reply(`The sum of all the arguments you provided is ${sum}!`);
      }
    ...

<div class="toolbar">

<div class="toolbar-item"></div>

</div>

</div>

Мы используем [метод `map`](https://www.digitalocean.com/community/tutorials/how-to-use-array-methods-in-javascript-iteration-methods#map()) для списка аргументов, чтобы создать новый список, используя функцию [`parseFloat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) для каждого элемента в массиве `args`. При этом создается новый массив (назначенный константе `numArgs`), где все элементы являются числами, а не строками. Это означает, что в дальнейшем вы можете определить сумму чисел, выполнив операцию сложения.

Вторая строка использует [метод `reduce`](https://www.digitalocean.com/community/tutorials/how-to-use-array-methods-in-javascript-iteration-methods#reduce()) на константе `numArgs`, предоставляя функцию, суммирующую все элементы в списке. Мы назначаем сумму всех элементов в `numArgs` как значение константы `sum`.

Затем мы используем метод `reply` на объекте сообщений, чтобы ответить на команду пользователя, отправив [литераль шаблона](https://www.digitalocean.com/community/tutorials/understanding-template-literals-in-javascript), содержащую сумму всех аргументов, отправленных пользователем боту.

Это завершает реализацию команды `"sum"`. Теперь запустите бот, используя следующую команду (в той же папке, что и `index.js`):

<div class="code-toolbar">

    node index.js

<div class="toolbar">

<div class="toolbar-item"></div>

</div>

</div>

Теперь вы можете использовать команду `"! sum"` на любом канале, где бот может просматривать и отправлять сообщения.

![Изображение бота, отвечающего "The sum of all the arguments you provided is 6!" на "! sum 1 2 3", а затем отвечающего "The sum of all the arguments you provided is 13! на "! sum 1.5 1.5 10"](https://assets.digitalocean.com/articles/node_discord_bot/step4a.png)

Далее приведена законченная версия скрипта бота `index.js`:

<div class="code-label " title="index.js">index.js</div>

<div class="code-toolbar">

    const Discord = require("discord.js");
    const config = require("./config.json");

    const client = new Discord.Client();

    const prefix = "!";

    client.on("message", function(message) {
      if (message.author.bot) return;
      if (!message.content.startsWith(prefix)) return;

      const commandBody = message.content.slice(prefix.length);
      const args = commandBody.split(' ');
      const command = args.shift().toLowerCase();

      if (command === "ping") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
      }

      else if (command === "sum") {
        const numArgs = args.map(x => parseFloat(x));
        const sum = numArgs.reduce((counter, x) => counter += x);
        message.reply(`The sum of all the arguments you provided is ${sum}!`);
      }
    });

    client.login(config.BOT_TOKEN);

<div class="toolbar">

<div class="toolbar-item"></div>

</div>

</div>

На этом шаге мы дополнили наш бот Discord, реализовав в нем команду `sum`.

<a name="заключение" data-unique="заключение"></a><a name="заключение" data-unique="заключение"></a>

## Заключение

Мы успешно создали бот Discord, который может обрабатывать разные команды пользователей и аргументы команд. Если вы хотите расширить возможности вашего бота, вы можете реализовать дополнительные команды или использовать другие части Discord API для построения мощного бота Discord. Вы можете ознакомиться с [документацией по Discord.js](https://discord.js.org/#/docs/main/stable/general/welcome) или [Discord API](https://discord.com/developers/docs/intro), чтобы узнать больше о Discord API.

При создании ботов Discord всегда помните об [условиях обслуживания Discord API](https://discord.com/developers/docs/legal), определяющих требования к использованию Discord API разработчиками. Также вам может быть полезен [этот набор рекомендаций](https://github.com/meew0/discord-bot-best-practices/blob/master/README.md), показывающий наилучшие способы построения бота Discord и содержащий советы по проектированию ботов Discord. Если вы хотите узнать больше о Node.js, ознакомьтесь с нашей [серией материалов «Программирование в Node.js»](https://www.digitalocean.com/community/tutorial_series/how-to-code-in-node-js).

</div>