import pJSON from "../package.json";
import Fingerprint2 from "fingerprintjs2";
import { fstore } from "./fire";
import * as serviceWorker from "./serviceWorker";

console.log(`${pJSON.name} ${pJSON.version} (${process.env.REACT_APP_ENV})`);
console.log("bootTime", Date.now());
let entity = {
  bootTime: Date.now(),
  vs: pJSON.version
};

const initRedux = () => {
  console.log("initRedux", entity);
};

const returning = () => {
  const docRef = fstore.collection("entities").doc(entity.fingerprint);
  docRef.get().then(function(fsdoc) {
    const data = fsdoc.data();
    delete data.fingerprint;
    delete data.bootTime;
    entity = {
      ...entity,
      fstore: data
    };
    initRedux();
  });
};

const firstRun = () => {
  entity.visits = 1;
  entity.created = Date.now();
  //   console.log("firstRun set entity", entity);
  const docRef = fstore.collection("entities").doc(entity.fingerprint);
  docRef
    .set(entity, { merge: true })
    .then(function() {
      returning();
    })
    .catch(function(error) {
      console.log("Error firstRun failed", error);
    });
};

const initFirestore = fingerprint => {
  const docRef = fstore.collection("entities").doc(fingerprint);
  docRef
    .get()
    .then(function(doc) {
      if (doc.exists) {
        returning();
      } else {
        firstRun();
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
};

const createFingerprint = () => {
  Fingerprint2.getPromise().then(function(components) {
    const values = components.map(function(component) {
      return component.value;
    });
    const fingerprint = Fingerprint2.x64hash128(values.join(""), 31);
    entity.fingerprint = fingerprint;
    initFirestore(fingerprint);
  });
};

setTimeout(createFingerprint, 200);

serviceWorker.register();

// merge entity
