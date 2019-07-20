module.exports = () => `
SELECT
  EventId,
  EventName,
  EventDate,
  HostId
FROM Event
ORDER BY EventId
;`
