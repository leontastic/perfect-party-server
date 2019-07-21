module.exports = (entity, pk) => record => `
INSERT INTO ${entity} (${[...Object.keys(record)].join(', ')})
VALUES (${[...Object.values(record)].map(value => `'${value}'`).join(', ')})
;`
