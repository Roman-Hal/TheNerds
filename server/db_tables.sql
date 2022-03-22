CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  category VARCHAR(200),
  title VARCHAR(200),
  question_content TEXT NOT NULL,
  asked_by VARCHAR(200) NOT NULL,
  ts TIMESTAMP
);

CREATE TABLE answers (
  id SERIAL PRIMARY KEY,
  category VARCHAR(200),
  title VARCHAR(200),
  answer_content TEXT NOT NULL,
  answered_by VARCHAR(200) NOT NULL,
  ts TIMESTAMP,
  FOREIGN KEY (id) REFERENCES questions (id)
);

CREATE TABLE users (
  userid INT GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(100),
  email VARCHAR(100),
  passwd  VARCHAR(200),
  FOREIGN KEY (userid) REFERENCES questions (id)
);

  INSERT INTO questions (category, title, question_content, asked_by, ts) 
  VALUES ('html', 'What is HTML?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit', 'Daniel','NOW();');

  INSERT INTO answers (category, title, answer_content, answered_by, ts) 
  VALUES ('html', 'What is HTML?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehender', 'Daniel','NOW();');

  INSERT INTO users (username, email, passwd)
  VALUES ('Krishan', '123@test.com', 'cyf123');