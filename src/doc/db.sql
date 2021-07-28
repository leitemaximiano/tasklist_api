create database tasklist;

-- table Task
create table t_task (
    id uuid primary key not null,
    title varchar(100) not null,
    body varchar(500),
    status int default 1    
);