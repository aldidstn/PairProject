function ticketCode(value) {
  if (value === 'Premium'){
    return 'PR'
  } else if (value === 'Regular') {
    return 'RG'
  } else if (value === 'Platinum') {
    return 'PL'
  }
}

function serialNumber(){
  return Math.floor(1000 + Math.random() * 9000)
}

module.exports = {ticketCode,serialNumber}