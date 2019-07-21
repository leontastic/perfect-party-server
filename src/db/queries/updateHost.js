module.exports = (hostid, { firstname, lastname, phonenumber, email }) => `
UPDATE Host
SET
  FirstName='${firstname}',
  LastName='${lastname}',
  PhoneNumber='${phonenumber}',
  Email='${email}'
WHERE
  HostId=${hostid}
;`
