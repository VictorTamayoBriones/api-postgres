CREATE TABLE public.books(
    id bigint NOT NULL,
    section bigint NOT NULL,
    title text NOT NULL,
    author text NOT NULL,
    PRIMARY KEY (id)
);


insert into books values
    (1, 4, 'Clean Code', 'Issac Asimov'),
    (2, 4, 'Js Moderno', 'Fernando Herrera'),
    (3, 4, 'Introducción a git', 'Midu Dev');


CREATE TABLE public.users(
    id SERIAL NOT NULL,
    userName text NOT NULL,
    userEmail text NOT NULL,
    userPass text NOT NULL
);


INSERT INTO users (userName, userEmail, userPass) values
    ('Jose', 'jose@jose.com', '123456'),
    ('Yess', 'yess@yess.com', '123456'),
    ('Eleazar', 'eleazar@eleazar.com', '123456'),
    ('Victor', 'victor@victor.com', '123456');
