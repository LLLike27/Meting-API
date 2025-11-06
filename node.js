import { serve } from '@hono/node-server'

import app from './app.js'
import config from './src/config.js'

const port = config.PORT || 3000

serve({
    fetch: app.fetch,
    port: port
})

console.log(`🚀 服务已启动`)
console.log(`📡 监听端口: ${port}`)
console.log(`🌐 访问地址: http://localhost:${port}`)
