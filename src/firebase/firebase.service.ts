import { Injectable, Inject } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService {
  constructor(
    @Inject('FirebaseAdmin') private readonly firebaseAdmin: admin.app.App,
  ) {}

  // Use the firebaseAdmin instance to interact with Firebase services
  // For example:
  async createUser(user: any): Promise<string> {
    const { uid } = await this.firebaseAdmin.auth().createUser(user);
    return uid;
  }
}
