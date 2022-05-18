-- This part is not correct..need to debug.
SELECT *
FROM employee
INNER JOIN employee ON employee.manager_id = employee.id;