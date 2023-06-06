import { Module } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Module({
  providers: [
    {
      provide: 'FirebaseAdmin',
      useFactory: () => {
        const firebaseAdmin = admin.initializeApp({
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          credential: admin.credential.cert(require('../../accountkey.json')),
        });
        return firebaseAdmin;
      },
    },
  ],
  exports: ['FirebaseAdmin'],
})
export class FirebaseModule {}
