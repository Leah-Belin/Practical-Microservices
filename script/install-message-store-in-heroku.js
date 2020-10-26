const childProcess = require('child_process')
const fs = require('fs')
const path = require('path')

function notInEnv (key) {
  return typeof process.env[key] === 'undefined'
}

const requiredEnvVars = [
  'PGHOST',
  'PGPORT',
  'PGUSER',
  'PGPASSWORD',
  'PGDATABASE'
]
const missingEnvVars = requiredEnvVars.filter(notInEnv)

if (missingEnvVars.length > 0) {
  console.log('The following required variables are missing from your env:\n')
  console.log(missingEnvVars.join('\n'))

  process.exit(1)
}

const eventideRootPath = path.join(
  __dirname,
  '..',
  'node_modules',
  '@eventide',
  'message-db',
  'database'
)

function sqlFilesInDirectory (directory) {
  const dir = path.join(eventideRootPath, directory)

  return fs.readdirSync(dir)
    .map(file => path.join(dir, file))
}

function install () {
  const sqlFiles = [
    ...sqlFilesInDirectory('schema'),
    ...sqlFilesInDirectory('extensions'),
    ...sqlFilesInDirectory('tables'),
    ...sqlFilesInDirectory('types'),
    ...sqlFilesInDirectory('functions'),
    ...sqlFilesInDirectory('indexes'),
    ...sqlFilesInDirectory('views')
  ]

  sqlFiles.forEach(file => {
    childProcess.execSync(`psql -f ${file}`)
  })
}

install()
