module.exports = () => `
SELECT
  EventId,
  EventName,
  HostId
FROM Event
ORDER BY EventId
;`
