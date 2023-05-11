import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

const srcDir = '../../../libs/web/src/assets/';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, srcDir),
      serveStaticOptions: {
        fallthrough: false
      }
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
