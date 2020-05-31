import { getImage, getAuthorImage, uploadImage } from '../controllers/awsController';

const routes = (app) => {
    app.route('/:dir/:id/:index')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl} |  type: ${req.method}`);
            next();
        }, getImage)
        //.post(uploadImage);
    app.route('/:dir/:nickname')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl} |  type: ${req.method}`);
            next();
        }, getAuthorImage)
}

export default routes;