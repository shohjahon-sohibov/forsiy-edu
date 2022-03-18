const fs = require('fs')
const path = require('path')

class Fs {
  constructor(dir) {
    this.dir = dir
  }

  read() {
    return fs.readFileSync(path.resolve(__dirname, `.${this.dir}`), { encoding: 'utf-8', flag: 'r' })
  }

  write(chunk) {
    return fs.writeFileSync(path.resolve(__dirname, `.${this.dir}`), JSON.stringify(chunk, null ,2))
  }
}
module.exports = Fs