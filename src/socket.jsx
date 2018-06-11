import io from 'socket.io-client'

var ioConn = io.connect("http://localhost:9999")


export default ioConn