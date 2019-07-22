module.exports = (entity, mapper) => records => `
INSERT INTO ${entity} (${Object.keys(records[0]).join(', ')})
VALUES
  ${records
    .map(Object.values)
    .map(values => values.map(value => `'${value}'`).join(', '))
    .map(set => `(${set})`)
    .join(',\n')}
;`
