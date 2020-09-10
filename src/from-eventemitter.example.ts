import { createServer, ServerResponse, IncomingMessage } from 'http'
import { eventGenerator } from './from-eventemitter'

const server = createServer()

server.on('connection', (socket) => {
  console.log('connection established')
})

server.on('request', (request: IncomingMessage, response: ServerResponse) => {
  console.log('event request: ', request.url)
})

async function pause(timeout: number) {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

server.on('close', () => console.log('server closed'))

const delays = [10000, 5000, 2000, 500]
let i = 0

;(async function () {
  const iterator = eventGenerator<[IncomingMessage, ServerResponse]>(
    server,
    'request'
  )

  for await (const [request, response] of iterator) {
    console.log('iterator request: ', request.url)
    const delay = delays[i++] || 1000
    console.log('delay: ', delay)
    pause(delay)

    console.log('iterator response: ', request.url)
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.write('hello world')
    response.end()
  }
})()

server.listen(8888)
