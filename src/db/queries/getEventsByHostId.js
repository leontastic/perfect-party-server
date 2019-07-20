module.exports = (hostId) => `
SELECT
  EventId,
  EventName,
  HostId
FROM Event
WHERE HostId = ${hostId}
;`
