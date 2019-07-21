module.exports = hostid => `
DELETE FROM Host
WHERE HostId=${hostid}
;`
