import tuitsModel from './tuits-model.js';

export const findTuits = async () => tuitsModel.find();
export const createTuit = async (tuit) => tuitsModel.create(tuit);
export const deleteTuit = async (tid) => tuitsModel.deleteOne({_id: tid});
export const updateTuit = async (tid, tuit) => tuitsModel.updateOne({_id: tid}, {$set: tuit})