import * as dotenv from 'dotenv';

export class ConfigService {
    private readonly envConfig: Record<string, string>;
    constructor() {
        const result = dotenv.config();

        if (result.error) {
            this.envConfig = process.env;
        } else {
            this.envConfig = result.parsed;
        }
    }

    public get(key: string): string {
        return this.envConfig[key];
    }

    public async getPortConfig() {
        return this.get('PORT');
    }

    public async getMongoConfig() {
        return {
            //uri: 'mongodb://admin:1234@localhost:27017/testing',
            uri: 'mongodb://kkh3:1234@localhost:27017/testing',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
    }
}
