CREATE TABLE pic (
    id SERIAL,
    name varchar(60) NOT NULL,
    url varchar(255) NOT NULL,
    album_id INT NOT NULL,
    created TIMESTAMP NOT NULL
);