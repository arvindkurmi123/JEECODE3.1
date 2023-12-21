--- user table 


create table users(
	username varchar(50) primary key,
	school text,
	role text,
	age int,
	check (age>10),
	country text,
	mobile decimal(15),
	address text,
	website text,
	twitter text,
	github text,
	instagram text,
	linkedin text,
	exam text
);

create table studentregistrations(
	fullname varchar(50),
	email varchar(40),
	username varchar(50) primary key,
	password varchar(50)
);


CREATE TABLE teacherregistrations
(
    fullname varchar(50),
    email varchar(40) unique,
    experience integer,
    gradyear integer,
    username varchar(50) primary key,
    password varchar(50)
);


CREATE TABLE questions
(
    id integer primary key,
    name text ,
    description text ,
    optiona text ,
    optionb text ,
    optionc text ,
    optiond text ,
    correctanswer varchar(1) ,
    difficulty text ,
    subject text ,
    topic text ,
    points integer
);

create table uploaded(
	qid int primary key,
	author varchar(50) NOT NULL,
	dateUploaded Date NOT NULL,
    foreign key (author) references teacherregistrations(username),
    foreign key (qid) references questions(id)
);

CREATE TABLE solved
(
    id integer primary key serial,
    username varchar(50) NOT NULL,
    questionid integer,
    timespent integer NOT NULL,
    date date NOT NULL,
    donestatus boolean NOT NULL,
    foreign key (username) references studentregistrations(username),
    foreign key (questionid) references questions(id)
);

CREATE TABLE test
(
    testid serial primary key,
    type varchar(255) NOT NULL,
    duration integer NOT NULL,
    totalquestions integer NOT NULL,
    totalmarks integer NOT NULL,
    testdate timestamp without time zone NOT NULL
);

CREATE TABLE attempts
(
    attemptid integer primary key,
    testid integer,
    username varchar(255),
    score integer NOT NULL,
    correctquestion integer NOT NULL,
    wrongquestion integer NOT NULL,
    unattempted integer NOT NULL,
    timespent integer NOT NULL,
    date date DEFAULT CURRENT_DATE,
    foreign key (testid) references test(testid),
    foreign key (username) references studentregistrations(username)
);


CREATE TABLE posts
(
    postid serial primary key  ,
    content text NOT NULL,
    questionid integer NOT NULL,
    username varchar(255) NOT NULL,
    replyid integer,
    image bytea
);



CREATE TABLE testquestions
(
    questionid serial primary key,
    questiontext text NOT NULL,
    testid integer NOT NULL,
    optiona text NOT NULL,
    optionb text NOT NULL,
    optionc text NOT NULL,
    optiond text NOT NULL,
    correctanswer character(1) NOT NULL,
    marks integer NOT NULL,
    negativemarks integer NOT NULL,
    topic text,
    subject text NOT NULL,
    difficulty text NOT NULL,
    foreign key (testid) references test(testid)
);