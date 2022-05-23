INSERT INTO department (id, name)
VALUES (1, "Marketing"),
       (2, "Finance"),
       (3, "Operations"),
       (4, "Human Resource"),
       (5, "IT");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Project Manager", 100000, 1),
       (2, "SEO Specialist", 90000, 1),
       (3, "Analytics Specialist", 80000, 1),
       (4, "Content Strategist", 80000, 1),
       (5, "CFO", 200000, 2),
       (6, "Management accountant", 100000, 2),
       (7, "Financial accountant", 100000, 2),
       (8, "Internal auditor", 100000, 2),
       (9, "Credit controller", 90000, 2),
       (10, "Accounts payable accountant", 80000, 2),
       (11, "Operations coordinator", 50000, 3),
       (12, "Operations analyst", 60000, 3),
       (13, "Program manager", 80000, 3),
       (14, "Operations engineer", 100000, 3),
       (15, "Director of operations", 120000, 3),
       (16, "Chief Human Resource Officer", 150000, 4),
       (17, "HR director", 90000, 4),
       (18, "Recruiting manager", 90000, 4),
       (19, "Compensation & Benefits manager", 90000, 4),
       (20, "Recruiter", 80000, 4),
       (21, "Computer systems manager", 80000, 5),
       (22, "Network architect", 90000, 5),
       (23, "Systems analyst", 80000, 5),
       (24, "IT coordinator", 70000, 5),
       (25, "Network admin", 100000, 5),
       (26, "System admin", 100000, 5);

    INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
    VALUES (1, "Sansa", "Stark", 1, NULL),
           (2, "Brienne", "Tarth", 2, 1),
           (3, "Arya", "Stark", 3, 1),
           (4, "Jamie", "Lannister", 4, 1),
           (5, "Cersei", "Lannister", 5, NULL),
           (6, "Bran", "Stark", 6, 5),
           (7, "Samwell", "Tarly", 7, 5),
           (8, "Jorah", "Momont", 8, 5),
           (9, "Robb", "Stark", 9, 5),
           (10, "Khal", "Drogo", 10, 5),
           (11, "Davos", "Seaworth", 11, 15),
           (12, "Petyr", "Baelish", 12, 15),
           (13, "Sandor", "Clegane", 13, 15),
           (14, "Podrick", "Paynea", 14, 15),
           (15, "Daenerys", "Targaryen", 15, NULL),
           (16, "John", "Snow", 16, NULL),
           (17, "Tywin", "Lannister", 17, 16),
           (18, "Margaery", "Tyrell", 18, 16),
           (19, "Joffrey", "Baratheon", 19, 16),
           (20, "Catelyn", "Stark", 20, 16),
           (21, "Barristan", "Selmy", 21, 26),
           (22, "Loras", "Tyrell", 22, 26),
           (23, "Eddard", "Stark", 23, 26),
           (24, "Renly", "Baratheon", 24, 26),
           (25, "Oberyn", "Martell", 25, 26),
           (26, "Tyrion", "Lannister", 26, NULL);



        



