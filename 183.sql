/* 181. Employees Earning More Than Their Managers (SQL)
first submission
Runtime: 340 ms, faster than 76.71% of MySQL online submissions for Employees Earning More Than Their Managers.
Memory Usage: 0B, less than 100.00% of MySQL online submissions for Employees Earning More Than Their Managers. */

--Write your MySQL query statement below:

SELECT a.name AS Employee
FROM Employee AS a, Employee AS b
WHERE a.managerId = b.Id
    AND a.salary > b.salary;
