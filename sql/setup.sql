-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP table if exists cats;

CREATE table cats (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  age INT NOT NULL
);

INSERT INTO cats (name, age) VALUES 
('Benny', 7),
('Ruby', 12),
('Finley', 4),
('Jeep', 4);