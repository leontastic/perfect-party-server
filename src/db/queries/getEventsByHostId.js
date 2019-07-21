module.exports = hostId => `
SELECT
  EventId,
  EventName,
  EventDate,
  HostId
FROM Event
WHERE HostId = ${hostId}
`
