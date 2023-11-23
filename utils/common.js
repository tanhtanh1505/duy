exports.getPlaceholderStringForArray = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Invalid input");
  }

  // if is array, we'll clone the arr
  // and fill the new array with placeholders
  const placeholders = [...arr];
  return placeholders.fill("?").join(", ").trim();
};

exports.multipleColumnSet = (object) => {
  if (typeof object !== "object") {
    throw new Error("Invalid input");
  }

  const keys = Object.keys(object);
  const values = Object.values(object);

  columnSet = keys.map((key) => `${key} = ?`).join(", ");

  return {
    columnSet,
    values,
  };
};

exports.multipleColumnGet = (object) => {
  if (typeof object !== "object") {
    throw new Error("Invalid input");
  }

  const keys = Object.keys(object);
  const values = Object.values(object);

  columnSet = keys.map((key) => `${key} = ?`).join(" AND ");

  return {
    columnSet,
    values,
  };
};

exports.multipleColumnGetInner = (table, object) => {
  if (typeof object !== "object") {
    throw new Error("Invalid input");
  }

  const keys = Object.keys(object);
  const values = Object.values(object);

  columnSet = keys.map((key) => `${table}.${key} = ?`).join(" AND ");

  return {
    columnSet,
    values,
  };
};

//query insert into table
exports.multipleColumnInsert = (table, data) => {
  if (typeof data !== "object") {
    throw new Error("Invalid input");
  }

  const keys = Object.keys(data);
  const values = Object.values(data);
  for (let i = 0; i < values.length; i++) {
    if (values[i] == null) {
      values[i] = "";
    }
  }

  const columnSet = keys.map((key) => `${key}`).join(", ");
  const placeholders = keys.map((key) => "?").join(", ");

  const sql = `INSERT INTO ${table} (${columnSet}) VALUES (${placeholders})`;

  return { sql, values };
};
