# какой имедж нам нужен
# данный имедж основан на имедже ноды
FROM node

# создание рабочей директории, где будет находиться приложение
# и где можно указать контекс, где будут лежать файлы и папки приложения
WORKDIR /app

# при пересборке проекта, докер будет смотреть что изменилось в докере и устанавливать только новые зависимости
# а старые брать из кэша
COPY package.json /app

# далее идут команды, чтобы собрать приложение
# которые срабатывают при сборке проекта
RUN npm install

# копи - копирует определенные файлы и папки в наш имедж
# . - означает конкретна та папка (корень проекта), где находится докерфайл
# затем в какое место нужно поместить все файлы
# вторая точка работает, так как она указана в контексте WORKDIR
COPY  . .

# указание переменной порта
ENV PORT 3000
# не обязательная команда, но которую лучше использовать
# тут указывать какой порт запускает приложение
# обращение к переменной через $
EXPOSE $PORT

# место где хранятся грубо говоря сохраненные образы
VOLUME [ "/app/data" ]

# для запуска команды
# которые срабатывают при запуске проекта
CMD [ "node", "app.js"]

# в .dockerignore указываем все файлы, которые не нужно загружать в докер