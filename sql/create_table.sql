CREATE TABLE projects(
    id uuid PRIMARY KEY,
    name TEXT,
    status_id uuid,
    timestamp BIGINT
);

CREATE EXTENSION "uuid-ossp";

CREATE TABLE status(
    id uuid DEFAULT uuid_generate_v1 (),
    status_name TEXT
);

INSERT INTO status (status_name) VALUES 
('Initiated'),
('Reviewed'),
('Approved'),
('Denied');

CREATE TABLE projects_history(
    id uuid PRIMARY KEY,
    project_id uuid,
    timestamp BIGINT,
    status_id uuid
);

CREATE TABLE users(
    id uuid PRIMARY KEY,
    username TEXT,
    password TEXT,
    email TEXT
);