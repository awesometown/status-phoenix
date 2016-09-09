import { normalize, Schema, arrayOf } from 'normalizr';

const service = new Schema('services');

service.define({
});

const incident = new Schema('incidents');

incident.define({});

export {service, incident};