export const queryCandidates =
  'SELECT * from USERS WHERE username = $1 OR email = $2';

export const queryUserExactRole = `
SELECT *
FROM pg_enum AS enum
JOIN pg_type AS type
  ON (type.oid = enum.enumtypid)
WHERE typname = 'roles' AND enumlabel = $1 
`;

export const queryCreateUser = `
INSERT INTO
  USERS (username, email, password, user_roles)
  VALUES ($1, $2, $3, $4);
`;
