module.exports = {
  formatSex: (s) => {
    let sexFormatted
    switch (s) {
      case 0:
        sexFormatted = 'Not Known'
        break
      case 1:
        sexFormatted = 'Male'
        break
      case 2:
        sexFormatted = 'Female'
        break
      default:
        sexFormatted = 'Not Applicable'
        break
    }
    return sexFormatted
  }
}
