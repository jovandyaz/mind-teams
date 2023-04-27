DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50),
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    role VARCHAR(50),
    account VARCHAR(50),
    team VARCHAR(50),
    job_title VARCHAR(50),
    english_level VARCHAR(50),
    skills VARCHAR(100)[],
    resume_link VARCHAR(100),
    status VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

INSERT INTO users (name, last_name, email, password, role, account, team, job_title, english_level, skills, resume_link, status)
VALUES 
    ('Jovan', 'Dyaz', 'jovan.dyaz@example.com', 'passsword1', 'super admin', 'Space X', 'team1', 'FullStack Engineer', 'B2', '{"JavaScript", "React", "Node.js", "Express"}', 'resume.com/jovan', 'active'),
    ('Pedro', 'Piedra', 'pedro.piedra@example.com', 'password2', 'admin', 'AWS', 'team2', 'Backend Engineer', 'C1', '{"JavaScript", "Vue", "Python", "Django"}', 'resume.com/pedro', 'inactive'),
    ('Maria', 'Gonzalez', 'maria.gonzalez@example.com', 'password3', 'user', 'Google', 'team1', 'Frontend Engineer', 'B1', '{"Java", "Spring", "SQL"}', 'resume.com/maria', 'active'),
    ('Leah', 'Gutierrez', 'leah.gutierrez@example.com', 'password4', 'admin', 'Apple', 'team2', 'Data Analyst', 'C2', '{"Python", "Excel", "SQL"}', 'resume.com/leah', 'active'),
    ('Avery', 'Wu', 'avery.wu@example.com', 'password5', 'user', 'Microsoft', 'team1', 'Web Designer', 'B2', '{"HTML", "CSS", "JavaScript", "Sketch"}', 'resume.com/avery', 'inactive'),
    ('David', 'Park', 'david.park@example.com', 'password6', 'user', 'Facebook', 'team2', 'Software Engineer', 'C1', '{"Java", "React", "Django"}', 'resume.com/david', 'active'),
    ('Megan', 'Garcia', 'megan.garcia@example.com', 'password7', 'admin', 'Netflix', 'team1', 'UI Designer', 'B1', '{"Photoshop", "Illustrator", "HTML", "CSS"}', 'resume.com/megan', 'inactive'),
    ('Bryan', 'Martinez', 'bryan.martinez@example.com', 'password8', 'super admin', 'Amazon', 'team2', 'Backend Engineer', 'B2', '{"Python", "Node.js", "MongoDB"}', 'resume.com/bryan', 'active'),
    ('Olivia', 'Johnson', 'olivia.johnson@example.com', 'password9', 'user', 'Tesla', 'team1', 'Frontend Engineer', 'C1', '{"React", "Redux", "JavaScript", "HTML", "CSS"}', 'resume.com/olivia', 'inactive'),
    ('Ethan', 'Wang', 'ethan.wang@example.com', 'password10', 'admin', 'Twitter', 'team2', 'DevOps Engineer', 'B2', '{"Docker", "Kubernetes", "AWS"}', 'resume.com/ethan', 'active'),
    ('Sophia', 'Nguyen', 'sophia.nguyen@example.com', 'password11', 'user', 'Uber', 'team1', 'Mobile Developer', 'C2', '{"Swift", "Kotlin", "Android", "iOS"}', 'resume.com/sophia', 'inactive'),
    ('Jacob', 'Lee', 'jacob.lee@example.com', 'password12', 'user', 'Snapchat', 'team2', 'Fullstack Engineer', 'B1', '{"JavaScript", "Vue", "Java"}', 'resume.com/jacob', 'active'),
    ('Emily', 'Chen', 'emily.chen@example.com', 'password13', 'super admin', 'Google', 'team1', 'Data Scientist', 'C1', '{"Python", "Pandas", "NumPy", "Matplotlib"}', 'resume.com/emily', 'inactive')

DROP TABLE IF EXISTS roles;

CREATE TABLE roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(50) UNIQUE NOT NULL,
    description VARCHAR(255),
    permissions VARCHAR(255)[],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

INSERT INTO roles (name, description, permissions)
VALUES 
    ('super admin', 'Super Admin', '{"creaete_admin", "create", "read", "update", "delete"}'),
    ('admin', 'Admin', '{"create", "read", "update", "delete"}'),
    ('user', 'User', '{"read"}');