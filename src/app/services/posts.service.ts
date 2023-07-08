import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

import firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private firestore: AngularFirestore) {}

  loadFeatured() {
    return this.firestore
      .collection('posts', (ref) =>
        ref.where('isFeatured', '==', true).limit(4)
      )
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc['id'];
            return { id, data };
          });
        })
      );
  }

  loadLatest() {
    return this.firestore
      .collection('posts', (ref) => ref.orderBy('createdAt'))
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc['id'];
            return { id, data };
          });
        })
      );
  }

  loadCategoryPost(categoryId: any) {
    return this.firestore
      .collection('posts', (ref) =>
        ref.where('category.categoryId', '==', categoryId).limit(4)
      )
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc['id'];
            return { id, data };
          });
        })
      );
  }
  loadOnePost(postId: any) {
    return this.firestore.doc(`posts/${postId}`).valueChanges();
  }

  loadSimilar(categoryId: any) {
    return this.firestore
      .collection('posts', (ref) =>
        ref.where('category.categoryId', '==', categoryId).limit(4)
      )
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc['id'];
            return { id, data };
          });
        })
      );
  }
  countViews(postId: any) {
    const viewsCount = {
      views: firebase.firestore.FieldValue.increment(1),
    };
    this.firestore
      .doc(`posts/${postId}`)
      .update(viewsCount)
      .then(() => {});
  }
}
