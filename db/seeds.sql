INSERT INTO department (id, name)
VALUES (001, "Marketing"),
       (002, "Finance"),
       (003, "Operations"),
       (004, "Human Resource"),
       (005, "IT");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Project Manager", 100000, 001),
       (2, "SEO Specialist", 90000, 001),
       (3, "Analytics Specialist", 80000, 001),
       (4, "Content Strategist", 80000, 001),
       (5, "CFO", 200000, 002),
       (6, "Management accountant", 100000, 002),
       (7, "Financial accountant", 100000, 002),
       (8, "Internal auditor", 100000, 002),
       (9, "Credit controller", 90000, 002),
       (10, "Accounts payable accountant", 80000, 002),
       (11, "Operations coordinator", 50000, 003),
       (12, "Operations analyst", 60000, 003),
       (13, "Program manager", 80000, 003),
       (14, "Operations engineer", 100000, 003),
       (15, "Director of operations", 120000, 003),
       (16, "Chief Human Resource Officer", 150000, 004),
       (17, "HR director", 90000, 004),
       (18, "Recruiting manager", 90000, 004),
       (19, "Compensation & Benefits manager", 90000, 004),
       (20, "Recruiter", 80000, 004),
       (21, "Computer systems manager", 80000, 005),
       (22, "Network architect", 90000, 005),
       (23, "Systems analyst", 80000, 005),
       (24, "IT coordinator", 70000, 005),
       (25, "Network admin", 100000, 005),
       (26, "System admin", 100000, 005);


    INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
    VALUES (1, "William", "Smith", 10, NULL),
           (2, "Rezza", "Fredd", 2, NULL),
           (3, "Mohan", "Kumar", 20, NULL),
           (4, "Cindy", "Mac", 18, 4), // change the manager_id referencing another manager id.
           (5, "Vince", "Jose", 26, 5),
           (6, "Rajiv", "Kumar", 22, NULL),
           (7, "John", "Thomas", 7, NULL),
           (8, "Oshane", "Mathew", 11, NULL),
           (9, "Chin", "Young", 19, 9),
           (10, "Linda", "Greedman", 4, NULL);

