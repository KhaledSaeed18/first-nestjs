import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHealthCheck() {
        return {
            status: 'ok',
            environment: process.env.NODE_ENV || 'development',
            uptime: process.uptime(),
            timestamp: new Date().toISOString(),
            application: {
                name: 'first-nest',
                version: '1.0.0',
            },
        };
    }
}
