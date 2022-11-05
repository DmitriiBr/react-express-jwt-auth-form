
"exact role" 
SELECT
  type.typname,
  enum.enumlabel AS value
FROM pg_enum AS enum
JOIN pg_type AS type
  ON (type.oid = enum.enumtypid)
WHERE type.typname = 'roles' AND enum.enumlabel = 'ADMIN'
GROUP BY enum.enumlabel,
         type.typname;

"create user"
INSERT INTO
  USERS (username, email, password, user_roles)
  VALUES ('username', 'email', 'password', 'roles');