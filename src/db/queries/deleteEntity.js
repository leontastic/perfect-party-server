module.exports = (entity, pk) => id => `
DELETE FROM ${entity}
WHERE ${pk}=${id}
`
