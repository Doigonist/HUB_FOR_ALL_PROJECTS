-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3305
-- Время создания: Апр 17 2025 г., 12:14
-- Версия сервера: 5.7.39
-- Версия PHP: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `avtotransport_pred`
--

-- --------------------------------------------------------

--
-- Структура таблицы `categories`
--

CREATE TABLE `categories` (
  `id` int(1) NOT NULL,
  `category` varchar(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `categories`
--

INSERT INTO `categories` (`id`, `category`) VALUES
(1, 'CE'),
(2, 'CDE'),
(3, 'BCDE');

-- --------------------------------------------------------

--
-- Структура таблицы `clients`
--

CREATE TABLE `clients` (
  `id` int(2) NOT NULL,
  `name_company` varchar(18) DEFAULT NULL,
  `contact_name` varchar(13) DEFAULT NULL,
  `tel` varchar(16) DEFAULT NULL,
  `ur_adress` varchar(34) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `clients`
--

INSERT INTO `clients` (`id`, `name_company`, `contact_name`, `tel`, `ur_adress`) VALUES
(1, 'ООО \"Стройка\"', 'Сидоров А.А.', '+7(999)123-45-67', 'Москва, ул. Строителей, 5'),
(2, 'ЗАО \"МеталлТорг\"', 'Петров П.П.', '+7(999)234-56-78', 'СПб, Литейный пр., 10'),
(3, 'ИП \"ЛесПром\"', 'Кузнецов К.К.', '+7(999)345-67-89', 'Казань, ул. Лесная, 15'),
(4, 'ООО \"ПесокСервис\"', 'Смирнов С.С.', '+7(999)456-78-90', 'Екатеринбург, ул. Горная, 20'),
(5, 'АО \"УгольДобыча\"', 'Федоров Ф.Ф.', '+7(999)567-89-01', 'Новосибирск, ул. Шахтерская, 3'),
(6, 'ООО \"НефтеТранс\"', 'Николаев Н.Н.', '+7(999)678-90-12', 'Ростов-на-Дону, ул. Нефтяная, 7'),
(7, 'ИП \"ХимПродукт\"', 'Васильев В.В.', '+7(999)789-01-23', 'Краснодар, ул. Химиков, 12'),
(8, 'ООО \"АгроПоставка\"', 'Павлов П.П.', '+7(999)890-12-34', 'Воронеж, ул. Садовая, 8'),
(9, 'ЗАО \"СтеклоПром\"', 'Михайлов М.М.', '+7(999)901-23-45', 'Самара, ул. Заводская, 30'),
(10, 'ООО \"ТехноСнаб\"', 'Иванов И.И.', '+7(999)012-34-56', 'Нижний Новгород, ул. Инженерная, 5');

-- --------------------------------------------------------

--
-- Структура таблицы `drivers`
--

CREATE TABLE `drivers` (
  `id` int(2) NOT NULL,
  `fio` varchar(27) DEFAULT NULL,
  `category_categories` int(1) DEFAULT NULL,
  `pass_data` varchar(13) DEFAULT NULL,
  `adress` varchar(39) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `drivers`
--

INSERT INTO `drivers` (`id`, `fio`, `category_categories`, `pass_data`, `adress`) VALUES
(1, 'Иванов Иван Иванович', 2, '1 234 567 890', 'Москва, ул. Ленина, 1'),
(2, 'Петров Петр Петрович', 1, '2 345 678 901', 'СПб, Невский пр., 10'),
(3, 'Сидоров Сергей Сергеевич', 1, '3 456 789 012', 'Казань, ул. Баумана, 5'),
(4, 'Кузнецов Алексей Викторович', 1, '4 567 890 123', 'Екатеринбург, ул. Малышева, 15'),
(5, 'Смирнов Дмитрий Олегович', 2, '5 678 901 234', 'Новосибирск, ул. Кирова, 20'),
(6, 'Федоров Андрей Николаевич', 1, '6 789 012 345', 'Ростов-на-Дону, ул. Большая Садовая, 3'),
(7, 'Николаев Николай Петрович', 3, '7 890 123 456', 'Краснодар, ул. Красная, 100'),
(8, 'Васильев Василий Васильевич', 3, '8 901 234 567', 'Воронеж, ул. Плехановская, 25'),
(9, 'Павлов Павел Павлович', 2, '9 012 345 678', 'Самара, ул. Куйбышева, 7'),
(10, 'Михайлов Михаил Михайлович', 2, '123 456 789', 'Нижний Новгород, ул. Рождественская, 12');

-- --------------------------------------------------------

--
-- Структура таблицы `marks`
--

CREATE TABLE `marks` (
  `id` int(1) NOT NULL,
  `mark` varchar(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `marks`
--

INSERT INTO `marks` (`id`, `mark`) VALUES
(1, 'Volvo'),
(2, 'Scania'),
(3, 'MAN'),
(4, 'KamAZ'),
(5, 'Mercedes');

-- --------------------------------------------------------

--
-- Структура таблицы `routes`
--

CREATE TABLE `routes` (
  `id` int(2) NOT NULL,
  `gos_number_trucks` int(2) DEFAULT NULL,
  `fio_driver_drivers` int(2) DEFAULT NULL,
  `date_start` varchar(10) DEFAULT NULL,
  `day_end` varchar(10) DEFAULT NULL,
  `route` varchar(28) DEFAULT NULL,
  `tovar_tovars` int(13) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `routes`
--

INSERT INTO `routes` (`id`, `gos_number_trucks`, `fio_driver_drivers`, `date_start`, `day_end`, `route`, `tovar_tovars`) VALUES
(1, 1, 1, '01.05.2024', '03.05.2024', 'Москва - Санкт-Петербург', 1),
(2, 2, 2, '02.05.2024', '04.05.2024', 'СПб - Казань', 2),
(3, 3, 3, '03.05.2024', '05.05.2024', 'Казань - Екатеринбург', 3),
(4, 4, 4, '04.05.2024', '06.05.2024', 'Екатеринбург - Новосибирск', 4),
(5, 5, 5, '05.05.2024', '07.05.2024', 'Новосибирск - Ростов-на-Дону', 5),
(6, 6, 6, '06.05.2024', '08.05.2024', 'Ростов-на-Дону - Краснодар', 6),
(7, 7, 7, '07.05.2024', '09.05.2024', 'Краснодар - Воронеж', 7),
(8, 8, 8, '08.05.2024', '10.05.2024', 'Воронеж - Самара', 8),
(9, 9, 9, '09.05.2024', '11.05.2024', 'Самара - Нижний Новгород', 9),
(10, 10, 10, '10.05.2024', '12.05.2024', 'Нижний Новгород - Москва', 10);

-- --------------------------------------------------------

--
-- Структура таблицы `services`
--

CREATE TABLE `services` (
  `id` int(1) NOT NULL,
  `service` varchar(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `services`
--

INSERT INTO `services` (`id`, `service`) VALUES
(1, 'СТО \"Волга\"'),
(2, 'СТО \"Север\"'),
(3, 'СТО \"Юг\"'),
(4, 'СТО \"Восток\"'),
(5, 'СТО \"Запад\"'),
(6, 'СТО \"Центр\"');

-- --------------------------------------------------------

--
-- Структура таблицы `sto`
--

CREATE TABLE `sto` (
  `id` int(2) NOT NULL,
  `gos_number_transport` int(2) DEFAULT NULL,
  `fio_driver_drivers` int(2) DEFAULT NULL,
  `date_TO` varchar(10) DEFAULT NULL,
  `type_work` varchar(16) DEFAULT NULL,
  `price` int(5) DEFAULT NULL,
  `service_services` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `sto`
--

INSERT INTO `sto` (`id`, `gos_number_transport`, `fio_driver_drivers`, `date_TO`, `type_work`, `price`, `service_services`) VALUES
(1, 1, 1, '15.04.2024', 'Замена масла', 15000, 1),
(2, 2, 2, '16.04.2024', 'Замена тормозов', 25000, 2),
(3, 3, 3, '17.04.2024', 'Диагностика', 10000, 3),
(4, 4, 4, '18.04.2024', 'Ремонт КПП', 35000, 4),
(5, 5, 5, '19.04.2024', 'Замена фильтров', 12000, 5),
(6, 6, 6, '20.04.2024', 'Шиномонтаж', 8000, 6),
(7, 7, 7, '21.04.2024', 'Покраска', 40000, 1),
(8, 8, 8, '22.04.2024', 'Замена ремня ГРМ', 18000, 2),
(9, 9, 9, '23.04.2024', 'Ремонт подвески', 22000, 3),
(10, 10, 10, '24.04.2024', 'Замена свечей', 9000, 4);

-- --------------------------------------------------------

--
-- Структура таблицы `tovars`
--

CREATE TABLE `tovars` (
  `id` int(2) NOT NULL,
  `tovar` varchar(13) DEFAULT NULL,
  `weight` int(5) DEFAULT NULL,
  `sender` int(2) DEFAULT NULL,
  `reciever` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `tovars`
--

INSERT INTO `tovars` (`id`, `tovar`, `weight`, `sender`, `reciever`) VALUES
(1, 'Бетон', 20000, 1, 2),
(2, 'Металл', 15000, 2, 3),
(3, 'Дерево', 10000, 3, 4),
(4, 'Песок', 25000, 4, 5),
(5, 'Уголь', 30000, 5, 6),
(6, 'Нефтепродукты', 18000, 6, 7),
(7, 'Химикаты', 12000, 7, 8),
(8, 'Продукты', 8000, 8, 9),
(9, 'Стекло', 5000, 9, 10),
(10, 'Оборудование', 10000, 10, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `transport`
--

CREATE TABLE `transport` (
  `id` int(2) NOT NULL,
  `mark_mark` int(1) DEFAULT NULL,
  `model` varchar(6) DEFAULT NULL,
  `year_create` int(4) DEFAULT NULL,
  `gos_number` varchar(6) DEFAULT NULL,
  `fio_drivers` int(2) DEFAULT NULL,
  `category_categories` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `transport`
--

INSERT INTO `transport` (`id`, `mark_mark`, `model`, `year_create`, `gos_number`, `fio_drivers`, `category_categories`) VALUES
(1, 1, 'FH16', 2020, '123B77', 1, 2),
(2, 2, 'R500', 2019, 'Ӵ56ʅ77', 2, 1),
(3, 3, 'TGX', 2021, 'η89В77', 3, 1),
(4, 4, '5490', 2022, '³2177', 4, 1),
(5, 5, 'Actros', 2020, 'Ҷ54ӊ77', 5, 2),
(6, 1, 'FMX', 2021, 'й87Ί77', 6, 1),
(7, 2, 'S730', 2023, 'ű23ʕ77', 7, 3),
(8, 3, 'TGS', 2018, 'ʴ56ˌ77', 8, 3),
(9, 4, '65201', 2019, '̷89͍77', 9, 1),
(10, 5, 'Arocs', 2022, 'ͳ21р77', 10, 1);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `drivers`
--
ALTER TABLE `drivers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_categories` (`category_categories`);

--
-- Индексы таблицы `marks`
--
ALTER TABLE `marks`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `routes`
--
ALTER TABLE `routes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gos_number_trucks` (`gos_number_trucks`),
  ADD KEY `fio_driver_drivers` (`fio_driver_drivers`),
  ADD KEY `tovar_tovars` (`tovar_tovars`);

--
-- Индексы таблицы `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `sto`
--
ALTER TABLE `sto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fio_driver_drivers` (`fio_driver_drivers`),
  ADD KEY `gos_number_transport` (`gos_number_transport`),
  ADD KEY `service_services` (`service_services`);

--
-- Индексы таблицы `tovars`
--
ALTER TABLE `tovars`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reciever` (`reciever`),
  ADD KEY `sender` (`sender`);

--
-- Индексы таблицы `transport`
--
ALTER TABLE `transport`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mark_mark` (`mark_mark`),
  ADD KEY `category_categories` (`category_categories`),
  ADD KEY `fio_drivers` (`fio_drivers`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `drivers`
--
ALTER TABLE `drivers`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `marks`
--
ALTER TABLE `marks`
  MODIFY `id` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `routes`
--
ALTER TABLE `routes`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `services`
--
ALTER TABLE `services`
  MODIFY `id` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `sto`
--
ALTER TABLE `sto`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `tovars`
--
ALTER TABLE `tovars`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `transport`
--
ALTER TABLE `transport`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `drivers`
--
ALTER TABLE `drivers`
  ADD CONSTRAINT `drivers_ibfk_1` FOREIGN KEY (`category_categories`) REFERENCES `categories` (`id`);

--
-- Ограничения внешнего ключа таблицы `routes`
--
ALTER TABLE `routes`
  ADD CONSTRAINT `routes_ibfk_1` FOREIGN KEY (`gos_number_trucks`) REFERENCES `transport` (`id`),
  ADD CONSTRAINT `routes_ibfk_2` FOREIGN KEY (`fio_driver_drivers`) REFERENCES `drivers` (`id`),
  ADD CONSTRAINT `routes_ibfk_3` FOREIGN KEY (`tovar_tovars`) REFERENCES `tovars` (`id`);

--
-- Ограничения внешнего ключа таблицы `sto`
--
ALTER TABLE `sto`
  ADD CONSTRAINT `sto_ibfk_1` FOREIGN KEY (`fio_driver_drivers`) REFERENCES `drivers` (`id`),
  ADD CONSTRAINT `sto_ibfk_2` FOREIGN KEY (`gos_number_transport`) REFERENCES `transport` (`id`),
  ADD CONSTRAINT `sto_ibfk_3` FOREIGN KEY (`service_services`) REFERENCES `services` (`id`);

--
-- Ограничения внешнего ключа таблицы `tovars`
--
ALTER TABLE `tovars`
  ADD CONSTRAINT `tovars_ibfk_1` FOREIGN KEY (`reciever`) REFERENCES `clients` (`id`),
  ADD CONSTRAINT `tovars_ibfk_2` FOREIGN KEY (`sender`) REFERENCES `clients` (`id`);

--
-- Ограничения внешнего ключа таблицы `transport`
--
ALTER TABLE `transport`
  ADD CONSTRAINT `transport_ibfk_1` FOREIGN KEY (`mark_mark`) REFERENCES `marks` (`id`),
  ADD CONSTRAINT `transport_ibfk_2` FOREIGN KEY (`category_categories`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `transport_ibfk_3` FOREIGN KEY (`fio_drivers`) REFERENCES `drivers` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
